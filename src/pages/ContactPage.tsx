import React, { useEffect } from "react";
import { APP_NAME } from "@/utils/constants";

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = `Contact Us | ${APP_NAME}`;
  }, []);

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="bg-primary text-white py-16 px-4 shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-accent font-medium italic">
            We would love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="rounded-2xl border border-border bg-surface shadow-sm overflow-hidden p-3 sm:p-4 md:p-6">
          <div className="w-full overflow-hidden rounded-xl border border-border bg-white">
            <div
              className="relative w-full"
              style={{ aspectRatio: "640 / 823" }}
            >
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdjrtH-g2L0_WYGsR6sPDlc8RkTwpd9cboinxPA8jwmkcpvmA/viewform?embedded=true"
                className="absolute inset-0 h-full w-full border-0"
                title="Contact Form"
                loading="lazy"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
