"use client";
import Link from "next/link";
import { useLang } from "@/lib/lang";

// Placeholder: the real work page comes later.
export default function Work() {
  const { t } = useLang();
  return (
    <main
      style={{
        minHeight: "100svh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "28px",
        padding: "24px clamp(20px,4vw,56px)",
        background: "#0A0A0A",
        color: "#F3F2F2",
        textAlign: "center",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", color: "#F3F2F2" }}>
        <svg
          viewBox="-3 -3 46 70"
          style={{ display: "block", height: "24px", width: "16px", flex: "none" }}
          strokeLinejoin="round"
        >
          <polygon points="13,0 27,0 14,27 0,27" fill="currentColor" stroke="currentColor" strokeWidth="5"></polygon>
          <polygon points="26,33 40,33 27,64 13,64" fill="currentColor" stroke="currentColor" strokeWidth="5"></polygon>
        </svg>
        <span
          style={{
            display: "inline-flex",
            alignItems: "baseline",
            gap: ".1em",
            fontSize: "21px",
            letterSpacing: "-.02em",
            lineHeight: "1",
          }}
        >
          <span style={{ fontWeight: "600" }}>{"loom"}</span>
          <span style={{ fontWeight: "300" }}>{"IT"}</span>
        </span>
      </Link>
      <h1
        style={{
          margin: "0",
          fontSize: "clamp(34px,5.2vw,88px)",
          fontWeight: "600",
          letterSpacing: "-.04em",
          lineHeight: "1.06",
        }}
      >
        {t("Work is coming soon.")}
      </h1>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "12px",
          border: "1px solid #5B5958",
          padding: "10px 16px",
          fontSize: "13px",
          fontWeight: "500",
          color: "#F3F2F2",
        }}
        className="hv0"
      >
        <span style={{ color: "var(--acc)" }}>{"←"}</span>
        {t("Back to home")}
      </Link>
    </main>
  );
}
