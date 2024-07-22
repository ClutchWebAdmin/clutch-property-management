"use client";

import Link from "next/link";
import CookieConsent from "react-cookie-consent";

export default function CookieModal() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="I understand"
      style={{ background: "var(--primaryLight)", color: "var(--primaryDark)" }}
      buttonStyle={{
        backgroundColor: "var(--primaryBlue)",
        color: "var(--primaryLight)",
        fontSize: "13px",
      }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.{" "}
      <span style={{ fontSize: "10px" }}>
        By continuing to use this site you agree to our{" "}
        <span>
          <Link href={`/terms`} className="underline">
            Terms of Service
          </Link>
        </span>{" "}
        and{" "}
        <span>
          <Link href={`/privacy`} className="underline">
            Privacy Policy
          </Link>
        </span>
        .
      </span>
    </CookieConsent>
  );
}
