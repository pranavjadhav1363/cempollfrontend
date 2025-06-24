"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_ROUTES_API_URL}/web/inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          EmailId: formData.email,
          PhoneNo: formData.phone,
          Inquiry: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: "success", message: "Thank you! Your message has been sent." });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong. Please try again." });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({ type: "error", message: "An error occurred. Please try again later." });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="bg-gradient-to-br from-orange-500 to-pink-500 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our expert team for all your construction chemical needs. We're here to provide
            innovative solutions and exceptional service.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border-t-4 border-orange-500">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Visit Us</h3>
              <p className="text-gray-600 leading-relaxed">
                123 Industrial Park Drive<br />
                Construction City, CC 12345<br />
                United States
              </p>
            </div>

            {/* Phone */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border-t-4 border-green-500">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Call Us</h3>
              <p className="text-gray-600 mb-2">+1 (555) 123-4567</p>
              <p className="text-gray-600">+1 (555) 765-4321</p>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border-t-4 border-pink-500">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Email Us</h3>
              <p className="text-gray-600 mb-2">info@constructchem.com</p>
              <p className="text-gray-600">sales@constructchem.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center w-full">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-3xl bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h3>

              {/* Status Message */}
             
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-4 pr-4 py-3 border-2 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 bg-white text-gray-800"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-4 pr-4 py-3 border-2 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 bg-white text-gray-800"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-4 pr-4 py-3 border-2 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 bg-white text-gray-800"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full pl-4 pr-4 py-3 border-2 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 bg-white text-gray-800"
                    placeholder="Tell us about your construction chemical needs..."
                  />
                </div>
{status.message && (
                <div
                  className={`mb-6 px-4 py-3 rounded-lg text-sm font-medium ${
                    status.type === "success"
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : "bg-red-100 text-red-800 border border-red-300"
                  }`}
                >
                  {status.message}
                </div>
              )}
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
