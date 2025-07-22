import { useState, useRef } from "react";
import {
  Send,
  User,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.length < 2 ? "Name must be at least 2 characters" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email"
          : "";
      case "message":
        return value.length < 10
          ? "Message must be at least 10 characters"
          : "";
      default:
        return "";
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

   const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitStatus("success");
          form.current.reset(); // ✅ Clear form
        },
        (error) => {
          console.error("Email failed:", error);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  const inputClasses = (fieldName) => `
    w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white
    ${
      errors[fieldName]
        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
        : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
    }
    focus:outline-none focus:ring-4 focus:ring-opacity-20
    placeholder-gray-400 text-gray-700
  `;

  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Let's Start Planning Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to explore the world? Drop us a message and our travel experts
            will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shadow-sm">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Email</p>
                    <p className="text-gray-600">contact@travelagency.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shadow-sm">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Office</p>
                    <p className="text-gray-600">
                      123 Travel Street, Indore, MP
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shadow-sm">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">
                      Business Hours
                    </p>
                    <p className="text-gray-600">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-blue-600 mb-2">24/7</h4>
                <p className="text-gray-600 text-sm">Customer Support</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-green-600 mb-2">
                  &lt;2hr
                </h4>
                <p className="text-gray-600 text-sm">Response Time</p>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white text-center shadow-lg">
              <h4 className="text-xl font-bold mb-2">
                Trusted by 10,000+ Travelers
              </h4>
              <p className="text-blue-100">
                Your dream vacation is just a message away!
              </p>
            </div>
          </div>

          {/* Contact Form */}
         <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">
          Send us a Message
        </h3>
        <p className="text-gray-600">
          Fill out the details below and we'll get back to you as soon as
          possible.
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={`${inputClasses("name")} pl-12`}
            />
          </div>
          {errors.name && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={`${inputClasses("email")} pl-12`}
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message *
          </label>
          <div className="relative">
            <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your travel plans, questions, or how we can help you..."
              required
              rows={5}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={`${inputClasses("message")} pl-12 resize-none`}
            />
          </div>
          {errors.message && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Hidden timestamp */}
        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300
            flex items-center justify-center gap-3 relative overflow-hidden
            ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02]"
            }
          `}
        >
          <div className="relative flex items-center gap-3">
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </div>
        </button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="flex items-center gap-3 text-green-700 bg-green-50 p-4 rounded-xl border border-green-200">
            <CheckCircle className="w-6 h-6 flex-shrink-0" />
            <div>
              <p className="font-semibold">Message sent successfully!</p>
              <p className="text-sm text-green-600">We'll get back to you within 24 hours.</p>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="flex items-center gap-3 text-red-700 bg-red-50 p-4 rounded-xl border border-red-200">
            <AlertCircle className="w-6 h-6 flex-shrink-0" />
            <div>
              <p className="font-semibold">Failed to send message</p>
              <p className="text-sm text-red-600">Please try again or contact us directly.</p>
            </div>
          </div>
        )}
      </form>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
