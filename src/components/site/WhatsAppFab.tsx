import React from "react";

export function WhatsAppFab() {
  return (
    <a
      aria-label="WhatsApp contact"
      href="https://wa.me/35699319746"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-purple text-primary-foreground shadow-glow"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M21 15.5a4.5 4.5 0 0 1-4.5 4.5h-8l-4 1 1-4V7A4.5 4.5 0 0 1 9 2.5h6A4.5 4.5 0 0 1 19.5 7v8.5z" fill="currentColor" />
      </svg>
    </a>
  );
}
