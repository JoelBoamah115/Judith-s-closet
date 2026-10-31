"use client";

import { useState } from "react";
import { MessageCircle, Phone, MapPin, Mail, Clock, Send } from "lucide-react";
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY_NUMBER, createGeneralInquiryWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("General Styling Advice");
  const [message, setMessage] = useState("");

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hello Judith's Closet! My name is ${name || "a customer"}.\nTopic: ${topic}\nMessage: ${message || "I would like to inquire about your collections."}`;
    const url = `https://wa.me/233547631900?text=${encodeURIComponent(formatted)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-[#F8F5F0] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-widest text-[#80664E] font-semibold flex items-center justify-center">
            Client Concierge
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#25211F]">
            Connect With Judith&apos;s Closet
          </h1>
          <p className="text-sm text-[#80664E] font-light leading-relaxed">
            Have questions about styling, fabric availability, or custom wardrobe fittings? Reach out directly on WhatsApp or submit your inquiry below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left: Contact Info & Direct WhatsApp Hotline */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className="p-8 rounded-3xl space-y-6"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCCABD",
                boxShadow: "0 8px 24px rgba(48, 32, 28, 0.06)",
              }}
            >
              {/* Label — burgundy replaces gold */}
              <span
                className="text-xs uppercase tracking-widest font-bold"
                style={{ color: "#78172D" }}
              >
                Direct WhatsApp Hotline
              </span>

              {/* Heading — deep espresso */}
              <h3
                className="font-serif text-2xl font-semibold"
                style={{ color: "#30201C" }}
              >
                Instant Personal Concierge
              </h3>

              {/* Paragraph — warm dark brown, meets 4.5:1 on white */}
              <p
                className="text-xs leading-relaxed font-light"
                style={{ color: "#57443B" }}
              >
                Our fastest channel for order placements, size confirmations, and immediate stock checks.
              </p>

              {/* CTA button — deep WhatsApp green, white text */}
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-white text-xs font-bold uppercase tracking-widest shadow-md transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78172D] jc-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Open WhatsApp Now: {WHATSAPP_DISPLAY_NUMBER}</span>
              </a>

              <style>{`
                .jc-whatsapp-btn { background-color: #167A43; }
                .jc-whatsapp-btn:hover { background-color: #12683A; }
              `}</style>
            </div>

            {/* Location & Details Card */}
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFD2] space-y-5 shadow-sm">
              <h4 className="font-serif text-lg font-semibold text-[#25211F]">
                Studio & Consultation Details
              </h4>
              <ul className="space-y-4 text-xs text-[#25211F]/80">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#641526] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#25211F]">Location:</strong>
                    Accra, Greater Accra Region, Ghana
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#641526] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#25211F]">Telephone & WhatsApp:</strong>
                    <a href="tel:+233547631900" className="hover:text-[#641526] underline">
                      {WHATSAPP_DISPLAY_NUMBER}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#641526] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#25211F]">Client Inquiries:</strong>
                    concierge@judithscloset.demo
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#641526] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#25211F]">Concierge Hours:</strong>
                    Monday – Saturday: 9:00 AM – 7:00 PM GMT
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Prefilled Inquiry Form that directly launches WhatsApp */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E8DFD2] shadow-sm space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#80664E] font-semibold">
                Direct Inquiry Form
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#25211F] mt-1">
                Send a Message to Judith&apos;s Closet
              </h3>
              <p className="text-xs text-[#80664E] mt-1">
                Fill in your details below and click Send to instantly open a personalized WhatsApp conversation.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#25211F] uppercase tracking-wider block mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kwame Mensah / Akosua Darko"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-xs bg-[#FAF8F5] border border-[#E8DFD2] rounded-xl focus:outline-none focus:border-[#641526]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#25211F] uppercase tracking-wider block mb-1.5">
                  Inquiry Topic
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-3 text-xs bg-[#FAF8F5] border border-[#E8DFD2] rounded-xl focus:outline-none focus:border-[#641526]"
                >
                  <option value="General Styling Advice">General Styling & Wardrobe Advice</option>
                  <option value="Order & Stock Availability">Order & Stock Availability</option>
                  <option value="Custom Size Fitting">Custom Size Fitting Assistance</option>
                  <option value="Event / Gala Styling">Event / Gala Styling Consultation</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#25211F] uppercase tracking-wider block mb-1.5">
                  Message / Outfit of Interest
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us which garments you are interested in or what questions you have..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 text-xs bg-[#FAF8F5] border border-[#E8DFD2] rounded-xl focus:outline-none focus:border-[#641526]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Directly via WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-[#80664E] italic">
                * Your message will be formatted and loaded into WhatsApp for immediate delivery.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
