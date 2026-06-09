"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ContactButton({ buttonText }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  useEffect(() => {
    if (!isOpen) return;

    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/developer/245171564.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      const existing = document.querySelector(
        'script[src="https://js-na2.hsforms.net/forms/embed/developer/245171564.js"]'
      );
      if (existing) existing.remove();
    };
  }, [isOpen]);

  return (
    <>
      <button onClick={handleOpen}>{buttonText}</button>

      {isOpen && (
        <div
          onClick={handleClose}
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 transition-opacity duration-300 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-3xl bg-[#1B376D] rounded-2xl shadow-2xl max-h-[92vh] overflow-hidden transform transition-all duration-300 ${
              isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Logo Header */}
            <div className="flex justify-between items-center px-6 pt-6 pb-4">
              <Image
                src="/images/clutch-logo.png"
                alt="Clutch Property Management"
                width={160}
                height={55}
                className="h-11 w-auto"
                priority
              />
              <button
                onClick={handleClose}
                className="text-4xl text-white hover:text-gray-300 transition-colors"
              >
                &times;
              </button>
            </div>

            {/* Scrollable Form Area with your requested padding */}
            <div className="overflow-y-auto max-h-[calc(92vh-80px)] p-0">
              <div
                className="hs-form-html dark-form-theme mx-auto"
                style={{ maxWidth: "880px" }}
                data-region="na2"
                data-form-id="0820b7af-5832-452f-8a68-04eac68bcd8e"
                data-portal-id="245171564"
              ></div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .dark-form-theme form {
          width: 100% !important;
          max-width: 100% !important;
        }

        .dark-form-theme .hs-form-field {
          margin-bottom: 2.25rem !important;
        }

        .dark-form-theme label {
          color: #ffffff !important;
          font-size: 15px !important;
          font-weight: 500 !important;
          margin-bottom: 10px !important;
        }

        .dark-form-theme .hs-form-required {
          color: #ff6b6b !important;
        }

        /* Minimal input style like your screenshot */
        .dark-form-theme input[type="text"],
        .dark-form-theme input[type="email"],
        .dark-form-theme input[type="tel"],
        .dark-form-theme textarea,
        .dark-form-theme select {
          width: 100% !important;
          background: transparent !important;
          border: none !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.45) !important;
          padding: 12px 6px 10px 6px !important;
          color: #ffffff !important;
          font-size: 17px !important;
          outline: none !important;
        }

        .dark-form-theme input:focus,
        .dark-form-theme textarea:focus,
        .dark-form-theme select:focus {
          border-bottom: 2px solid #ffffff !important;
        }

        .dark-form-theme input::placeholder,
        .dark-form-theme textarea::placeholder {
          color: #aaaaaa !important;
          font-style: italic;
        }

        .dark-form-theme .hs-button,
        .dark-form-theme input[type="submit"] {
          background-color: #ffffff !important;
          color: #1B376D !important;
          padding: 11px 28px !important;
          border-radius: 6px !important;
          font-weight: 600 !important;
          font-size: 15px !important;
          margin-top: 20px !important;
        }

        .dark-form-theme .hs-button:hover {
          transform: translateY(-1px);
        }

        .dark-form-theme .form-columns-2 {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 2rem !important;
        }

        @media (max-width: 640px) {
          .dark-form-theme .form-columns-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
