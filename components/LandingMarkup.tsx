// Generated from the Claude Design mockup (Loom IT Hero v5) and then maintained by hand.
import type { CSSProperties, ReactNode, Ref } from "react";
import Link from "next/link";

export type LandingMarkupProps = {
  t: (en: string) => string;
  rootRef: Ref<HTMLDivElement>;
  menu: ReactNode;
  photo: ReactNode;
  manifesto: ReactNode;
  toggleMenu: () => void;
  lang: "es" | "en";
  toggleLang: () => void;
};

export default function LandingMarkup({
  t,
  rootRef,
  menu,
  photo,
  manifesto,
  toggleMenu,
  lang,
  toggleLang,
}: LandingMarkupProps) {
  return (
    <div
      ref={rootRef}
      style={
        {
          "--acc": "#CFF27E",
          position: "relative",
          background: "#0A0A0A",
          color: "#F3F2F2",
          fontFamily: "var(--font-poppins), sans-serif",
        } as CSSProperties
      }
    >
      <div data-herosec="1" style={{ position: "relative", height: "calc(var(--svh) * 140 + var(--lvh) * 100)" }}>
        <div style={{ position: "sticky", top: "0", height: "calc(var(--lvh) * 100)", overflow: "hidden" }}>
          <div data-gl="1" style={{ position: "absolute", inset: "0" }}></div>
          <div
            data-safe="1"
            style={{ position: "absolute", top: "0", left: "0", right: "0", height: "calc(var(--svh) * 100)" }}
          >
          <header
            className="hdr"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              zIndex: "20",
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              gap: "24px",
              padding: "24px clamp(20px,4vw,56px)",
            }}
          >
            <button
              data-fade="1"
              aria-label={t("Menu")}
              onClick={toggleMenu}
              style={{
                justifySelf: "start",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                background: "transparent",
                border: "0",
                padding: "12px 12px 12px 0",
                cursor: "pointer",
                color: "#F3F2F2",
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "13px",
                fontWeight: "500",
                letterSpacing: ".02em",
              }}
            >
              <span style={{ position: "relative", width: "26px", height: "18px", display: "block" }}>
                <span
                  data-bar-a="1"
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "1px",
                    height: "2px",
                    background: "#F3F2F2",
                    transition: "transform .45s cubic-bezier(.16,1,.3,1),top .45s cubic-bezier(.16,1,.3,1)",
                  }}
                ></span>
                <span
                  data-bar-m="1"
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "8px",
                    height: "2px",
                    background: "#F3F2F2",
                    transition: "opacity .25s ease",
                  }}
                ></span>
                <span
                  data-bar-b="1"
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "10px",
                    top: "15px",
                    height: "2px",
                    background: "var(--acc)",
                    transition:
                      "transform .45s cubic-bezier(.16,1,.3,1),top .45s cubic-bezier(.16,1,.3,1),right .45s cubic-bezier(.16,1,.3,1)",
                  }}
                ></span>
              </span>
            </button>
            <a
              href="#top"
              data-fade="1"
              style={{ display: "flex", alignItems: "center", gap: "10px", color: "#F3F2F2" }}
            >
              <svg
                viewBox="-3 -3 46 70"
                style={{ display: "block", height: "24px", width: "16px", flex: "none" }}
                strokeLinejoin="round"
              >
                <polygon
                  points="13,0 27,0 14,27 0,27"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="5"
                ></polygon>
                <polygon
                  points="26,33 40,33 27,64 13,64"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="5"
                ></polygon>
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
            </a>
            <div className="hdr-r" style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: "20px" }}>
              <button
                data-fade="1"
                type="button"
                aria-label={t("Switch language")}
                onClick={toggleLang}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "transparent",
                  border: "0",
                  padding: "10px 0",
                  cursor: "pointer",
                  color: "#F3F2F2",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
              >
                <span style={{ color: lang === "es" ? "var(--acc)" : "#F3F2F2" }}>{"ES"}</span>
                <span>{"/"}</span>
                <span style={{ color: lang === "en" ? "var(--acc)" : "#F3F2F2" }}>{"EN"}</span>
              </button>
              <a
                href="#contact"
                data-fade="1"
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
                {t("Contact ")}
                <span style={{ color: "var(--acc)" }}>{"→"}</span>
              </a>
            </div>
          </header>
          <div
            data-title="1"
            style={{
              position: "absolute",
              left: "clamp(20px,4vw,56px)",
              right: "clamp(20px,4vw,56px)",
              bottom: "clamp(28px,calc(var(--svh) * 5),48px)",
              zIndex: "2",
              pointerEvents: "none",
            }}
          >
            <h1
              style={{
                margin: "0",
                maxWidth: "calc(50vw - 80px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "min(4.2vw,calc(var(--svh) * 7.5),96px)",
                letterSpacing: "-.05em",
                lineHeight: "1",
                color: "#F3F2F2",
              }}
            >
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
                <span data-in="1" style={{ display: "block", fontWeight: "300" }}>
                  {t("We build digital")}
                </span>
              </span>
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
                <span data-in="1" style={{ display: "block", fontWeight: "600" }}>
                  {t("products ")}
                  <span style={{ color: "var(--acc)" }}>{t("that work.")}</span>
                </span>
              </span>
            </h1>
          </div>
          <div
            style={{
              position: "absolute",
              inset: "0",
              zIndex: "2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 clamp(20px,4vw,56px)",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0 .4em",
                fontSize: "clamp(36px,5.4vw,100px)",
                fontWeight: "600",
                letterSpacing: "-.045em",
                lineHeight: "1.05",
              }}
            >
              <span data-word="1" style={{ opacity: "0" }}>
                {t("Websites.")}
              </span>
              <span data-word="1" style={{ opacity: "0" }}>
                {t("Apps.")}
              </span>
              <span data-word="1" style={{ opacity: "0", color: "var(--acc)" }}>
                {t("Automations.")}
              </span>
            </div>
          </div>
          <div
            data-end="1"
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              bottom: "calc(var(--svh) * 20)",
              zIndex: "2",
              display: "flex",
              justifyContent: "center",
              padding: "0 24px",
              opacity: "0",
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                fontSize: "clamp(26px,3.4vw,60px)",
                fontWeight: "300",
                letterSpacing: "-.035em",
                lineHeight: "1.1",
                textAlign: "center",
              }}
            >
              {t("Designed and built ")}
              <span style={{ fontWeight: "600" }}>{t("from scratch.")}</span>
            </span>
          </div>
          <div
            data-out="1"
            style={{
              position: "absolute",
              left: "clamp(20px,4vw,56px)",
              right: "clamp(20px,4vw,56px)",
              top: "96px",
              zIndex: "2",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "24px",
              fontSize: "12px",
              lineHeight: "1.5",
              color: "#8E8B8B",
              pointerEvents: "none",
            }}
          >
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#F3F2F2" }}>{"Santa Fe, AR"}</span>
              <span data-clock="1"></span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px", color: "#F3F2F2" }}>
              <span
                style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--acc)" }}
              ></span>
              {t("Available for new projects")}
            </span>
          </div>
          <a
            data-out="1"
            href="#work"
            style={{
              position: "absolute",
              right: "clamp(20px,4vw,56px)",
              bottom: "clamp(28px,calc(var(--svh) * 5),48px)",
              zIndex: "3",
              width: "clamp(200px,20vw,280px)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              color: "#F3F2F2",
            }}
            className="hv1"
          >
            <span
              style={{
                position: "relative",
                display: "block",
                aspectRatio: "4/3",
                background: "#141414",
                overflow: "hidden",
                border: "1px solid #2A2A2A",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "0",
                  height: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "0 7px",
                  background: "#1E1E1E",
                  zIndex: "2",
                }}
              >
                <span
                  style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#5B5958" }}
                ></span>
                <span
                  style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#5B5958" }}
                ></span>
                <span
                  style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#5B5958" }}
                ></span>
                <span
                  style={{ marginLeft: "8px", height: "7px", width: "46%", background: "#2E2E2E" }}
                ></span>
              </span>
              <span
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "16px",
                  bottom: "0",
                  overflow: "hidden",
                }}
              >
                <span
                  data-reel="1"
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "0",
                    height: "300%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      flex: "1",
                      background: "#F1ECE2",
                      padding: "10% 9%",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      gap: "7%",
                    }}
                  >
                    <span
                      style={{ display: "block", width: "70%", height: "13%", background: "#0A0A0A" }}
                    ></span>
                    <span
                      style={{ display: "block", width: "48%", height: "13%", background: "#0A0A0A" }}
                    ></span>
                    <span style={{ display: "flex", gap: "6%", marginTop: "4%" }}>
                      <span
                        style={{
                          display: "block",
                          width: "30%",
                          background: "var(--acc)",
                          height: "auto",
                          aspectRatio: "3/1",
                        }}
                      ></span>
                      <span
                        style={{
                          display: "block",
                          width: "22%",
                          background: "transparent",
                          height: "auto",
                          aspectRatio: "3/1",
                          border: "1.5px solid #0A0A0A",
                          boxSizing: "border-box",
                        }}
                      ></span>
                    </span>
                    <span
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3,1fr)",
                        gap: "5%",
                        marginTop: "auto",
                        height: "26%",
                      }}
                    >
                      <span
                        style={{ display: "block", width: "100%", height: "100%", background: "#D9D2C4" }}
                      ></span>
                      <span
                        style={{ display: "block", width: "100%", height: "100%", background: "#D9D2C4" }}
                      ></span>
                      <span
                        style={{ display: "block", width: "100%", height: "100%", background: "#0A0A0A" }}
                      ></span>
                    </span>
                  </span>
                  <span
                    style={{
                      flex: "1",
                      background: "#0A0A0A",
                      padding: "8% 9%",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      gap: "9%",
                    }}
                  >
                    <span
                      style={{
                        width: "34%",
                        height: "88%",
                        border: "2px solid #3A3A3A",
                        borderRadius: "10px",
                        boxSizing: "border-box",
                        padding: "7% 8%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "7%",
                      }}
                    >
                      <span
                        style={{ display: "block", width: "60%", height: "8%", background: "#F3F2F2" }}
                      ></span>
                      <span
                        style={{ display: "block", width: "100%", height: "30%", background: "#2A2A2A" }}
                      ></span>
                      <span
                        style={{ display: "block", width: "100%", height: "12%", background: "#2A2A2A" }}
                      ></span>
                      <span
                        style={{ display: "block", width: "100%", height: "12%", background: "var(--acc)" }}
                      ></span>
                    </span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "9%" }}>
                      <span
                        style={{ display: "block", width: "90%", height: "14px", background: "#F3F2F2" }}
                      ></span>
                      <span
                        style={{ display: "block", width: "60%", height: "14px", background: "#F3F2F2" }}
                      ></span>
                      <span
                        style={{ display: "block", width: "80%", height: "6px", background: "#5B5958" }}
                      ></span>
                      <span
                        style={{ display: "block", width: "70%", height: "6px", background: "#5B5958" }}
                      ></span>
                    </span>
                  </span>
                  <span
                    style={{
                      flex: "1",
                      background: "var(--acc)",
                      padding: "9% 9%",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
                    >
                      <span
                        style={{ display: "block", width: "40%", height: "11px", background: "#0A0A0A" }}
                      ></span>
                      <span
                        style={{
                          fontFamily: "var(--font-poppins), sans-serif",
                          fontWeight: "600",
                          fontSize: "22px",
                          letterSpacing: "-.04em",
                          lineHeight: "1",
                          color: "#0A0A0A",
                        }}
                      >
                        {"+70%"}
                      </span>
                    </span>
                    <span style={{ display: "flex", alignItems: "flex-end", gap: "6%", height: "52%" }}>
                      <span
                        data-barg="1"
                        style={{ flex: "1", height: "30%", background: "#0A0A0A", transformOrigin: "bottom" }}
                      ></span>
                      <span
                        data-barg="1"
                        style={{ flex: "1", height: "45%", background: "#0A0A0A", transformOrigin: "bottom" }}
                      ></span>
                      <span
                        data-barg="1"
                        style={{ flex: "1", height: "38%", background: "#0A0A0A", transformOrigin: "bottom" }}
                      ></span>
                      <span
                        data-barg="1"
                        style={{ flex: "1", height: "62%", background: "#0A0A0A", transformOrigin: "bottom" }}
                      ></span>
                      <span
                        data-barg="1"
                        style={{ flex: "1", height: "78%", background: "#0A0A0A", transformOrigin: "bottom" }}
                      ></span>
                      <span
                        data-barg="1"
                        style={{
                          flex: "1",
                          height: "100%",
                          background: "#F3F2F2",
                          transformOrigin: "bottom",
                        }}
                      ></span>
                    </span>
                  </span>
                </span>
                <span
                  data-cur="1"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "12px",
                    height: "12px",
                    margin: "-6px 0 0 -6px",
                    borderRadius: "50%",
                    background: "#F3F2F2",
                    boxShadow: "0 0 0 2px #0A0A0A",
                    zIndex: "3",
                  }}
                ></span>
                <span
                  data-ring="1"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "28px",
                    height: "28px",
                    margin: "-14px 0 0 -14px",
                    borderRadius: "50%",
                    border: "2px solid #F3F2F2",
                    opacity: "0",
                    zIndex: "3",
                  }}
                ></span>
              </span>
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "12px",
                fontSize: "12px",
              }}
            >
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#8E8B8B" }}>{t("Recent work")}</span>
                <span data-reel-label="1" style={{ fontSize: "14px", fontWeight: "500" }}></span>
              </span>
              <span style={{ color: "var(--acc)" }}>{"→"}</span>
            </span>
          </a>
          <div
            data-hint="1"
            style={{
              position: "absolute",
              left: "50%",
              bottom: "clamp(28px,calc(var(--svh) * 5),48px)",
              transform: "translateX(-50%)",
              zIndex: "3",
            }}
          >
            <a
              href="#work"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                color: "#F3F2F2",
              }}
              className="hv1"
            >
              <span
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  border: "1px solid #5B5958",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                }}
              >
                {"↓"}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "#8E8B8B",
                }}
              >
                {t("Scroll")}
              </span>
            </a>
          </div>
          </div>
          {menu}
        </div>
      </div>
      <section
        data-manifesto="1"
        style={{
          position: "relative",
          zIndex: "2",
          marginTop: "calc(var(--svh) * -22)",
          padding: "clamp(40px,calc(var(--svh) * 8),96px) clamp(20px,4vw,56px) clamp(80px,calc(var(--svh) * 12),140px)",
          background: "#0A0A0A",
        }}
      >
        <p
          style={{
            margin: "0",
            maxWidth: "1320px",
            fontFamily: "var(--font-poppins), sans-serif",
            fontSize: "clamp(34px,5.2vw,88px)",
            fontWeight: "600",
            letterSpacing: "-.04em",
            lineHeight: "1.06",
            color: "#F3F2F2",
            textWrap: "pretty",
          }}
        >
          {manifesto}
        </p>
      </section>
      <section style={{ padding: "0", background: "#0A0A0A" }}>
        <div
          data-reveal="1"
          style={{
            position: "relative",
            height: "min(calc(var(--svh) * 92),920px)",
            overflow: "hidden",
            background: "#1E1E1E",
            clipPath: "inset(12% 9% 12% 9%)",
          }}
        >
          <div data-reveal-img="1" style={{ position: "absolute", inset: "0", transform: "scale(1.25)" }}>
            {photo}
          </div>
          <div
            style={{
              position: "absolute",
              inset: "0",
              pointerEvents: "none",
              background: "linear-gradient(to top,rgba(10,10,10,.72),rgba(10,10,10,0) 45%)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              left: "clamp(20px,4vw,56px)",
              right: "clamp(20px,4vw,56px)",
              bottom: "clamp(24px,calc(var(--svh) * 5),56px)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px",
              flexWrap: "wrap",
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "clamp(44px,6.4vw,120px)",
                letterSpacing: "-.045em",
                lineHeight: ".98",
                color: "#F3F2F2",
              }}
            >
              <span style={{ fontWeight: "300" }}>{t("Every sprint")}</span>
              <span style={{ fontWeight: "600" }}>{t("adds up.")}</span>
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "#D9D6D6",
              }}
            >
              {t("Fig. 01 — The process")}
            </span>
          </div>
        </div>
      </section>
      <section
        data-svc="1"
        id="services"
        style={{
          position: "relative",
          background: "#0A0A0A",
          color: "#F3F2F2",
          padding: "clamp(130px,calc(var(--svh) * 22),240px) clamp(20px,4vw,56px) clamp(160px,calc(var(--svh) * 28),300px)",
        }}
      >
        <div
          data-sgrid="1"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,2.2fr)",
            gap: "clamp(32px,6vw,120px)",
            alignItems: "start",
          }}
        >
          <div
            data-sleft="1"
            style={{
              position: "sticky",
              top: "clamp(80px,calc(var(--svh) * 14),140px)",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              minWidth: "0",
            }}
          >
            <span
              data-sin="1"
              style={{ position: "relative", display: "block", height: "1px", background: "#2A2A2A" }}
            >
              <span
                data-sprog="1"
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  bottom: "0",
                  width: "100%",
                  background: "#F3F2F2",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                }}
              ></span>
            </span>
            <div data-sin="1" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              <span style={{ fontSize: "12px", fontWeight: "500", letterSpacing: ".08em", color: "#8E8B8B" }}>
                <span data-scount="1"></span>
                {"/06"}
              </span>
            </div>
            <span
              data-sin="1"
              style={{
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "#6B6868",
              }}
            >
              {t("(What we do)")}
            </span>
            <p
              data-sdesc="1"
              style={{
                margin: "0",
                maxWidth: "440px",
                minHeight: "9em",
                fontSize: "clamp(17px,1.45vw,22px)",
                fontWeight: "400",
                lineHeight: "1.38",
                letterSpacing: "-.01em",
                color: "#F3F2F2",
              }}
            ></p>
          </div>
          <div
            data-slist="1"
            style={{ position: "relative", display: "flex", flexDirection: "column", minWidth: "0" }}
          >
            <span
              data-sin="1"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "clamp(16px,calc(var(--svh) * 3),32px)",
                fontSize: "15px",
                fontWeight: "500",
                color: "#F3F2F2",
              }}
            >
              <span
                style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#5B5958" }}
              ></span>
              {t("What we can help with")}
            </span>
            <span
              data-sname="1"
              style={{
                display: "block",
                overflow: "hidden",
                paddingBottom: ".04em",
                width: "max-content",
                maxWidth: "100%",
                fontSize: "min(6.4vw,calc(var(--svh) * 11),124px)",
                fontWeight: "600",
                letterSpacing: "-.055em",
                lineHeight: "1.02",
                color: "#F3F2F2",
                cursor: "pointer",
                transition: "color .45s ease",
              }}
            >
              <span style={{ display: "block" }}>{t("Web development")}</span>
            </span>
            <span
              data-sname="1"
              style={{
                display: "block",
                overflow: "hidden",
                paddingBottom: ".04em",
                width: "max-content",
                maxWidth: "100%",
                fontSize: "min(6.4vw,calc(var(--svh) * 11),124px)",
                fontWeight: "600",
                letterSpacing: "-.055em",
                lineHeight: "1.02",
                color: "#3A3A3A",
                cursor: "pointer",
                transition: "color .45s ease",
              }}
            >
              <span style={{ display: "block" }}>{t("Mobile apps")}</span>
            </span>
            <span
              data-sname="1"
              style={{
                display: "block",
                overflow: "hidden",
                paddingBottom: ".04em",
                width: "max-content",
                maxWidth: "100%",
                fontSize: "min(6.4vw,calc(var(--svh) * 11),124px)",
                fontWeight: "600",
                letterSpacing: "-.055em",
                lineHeight: "1.02",
                color: "#3A3A3A",
                cursor: "pointer",
                transition: "color .45s ease",
              }}
            >
              <span style={{ display: "block" }}>{t("Desktop apps")}</span>
            </span>
            <span
              data-sname="1"
              style={{
                display: "block",
                overflow: "hidden",
                paddingBottom: ".04em",
                width: "max-content",
                maxWidth: "100%",
                fontSize: "min(6.4vw,calc(var(--svh) * 11),124px)",
                fontWeight: "600",
                letterSpacing: "-.055em",
                lineHeight: "1.02",
                color: "#3A3A3A",
                cursor: "pointer",
                transition: "color .45s ease",
              }}
            >
              <span style={{ display: "block" }}>{t("Product design")}</span>
            </span>
            <span
              data-sname="1"
              style={{
                display: "block",
                overflow: "hidden",
                paddingBottom: ".04em",
                width: "max-content",
                maxWidth: "100%",
                fontSize: "min(6.4vw,calc(var(--svh) * 11),124px)",
                fontWeight: "600",
                letterSpacing: "-.055em",
                lineHeight: "1.02",
                color: "#3A3A3A",
                cursor: "pointer",
                transition: "color .45s ease",
              }}
            >
              <span style={{ display: "block" }}>{t("Automations")}</span>
            </span>
            <span
              data-sname="1"
              style={{
                display: "block",
                overflow: "hidden",
                paddingBottom: ".04em",
                width: "max-content",
                maxWidth: "100%",
                fontSize: "min(6.4vw,calc(var(--svh) * 11),124px)",
                fontWeight: "600",
                letterSpacing: "-.055em",
                lineHeight: "1.02",
                color: "#3A3A3A",
                cursor: "pointer",
                transition: "color .45s ease",
              }}
            >
              <span style={{ display: "block" }}>{t("Software modernization")}</span>
            </span>
            <div
              data-sprev-card="1"
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                width: "clamp(200px,17vw,290px)",
                aspectRatio: "4/5",
                overflow: "hidden",
                background: "#161616",
                pointerEvents: "none",
                opacity: "0",
                transform: "scale(.85)",
                zIndex: "3",
                willChange: "transform",
              }}
            >
              <div
                data-sstack="1"
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "0",
                  height: "600%",
                  transition: "transform .8s cubic-bezier(.76,0,.24,1)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "16.6667%",
                    overflow: "hidden",
                    background: "radial-gradient(120% 90% at 30% 20%,#262626 0%,#141414 70%)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      inset: "16% 10%",
                      display: "flex",
                      flexDirection: "column",
                      background: "#F1ECE2",
                      boxShadow: "0 30px 60px rgba(0,0,0,.5)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        height: "14px",
                        padding: "0 7px",
                        background: "#262626",
                        flex: "none",
                      }}
                    >
                      <span
                        style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#555" }}
                      ></span>
                      <span
                        style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#555" }}
                      ></span>
                      <span
                        style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#555" }}
                      ></span>
                    </span>
                    <span
                      style={{
                        flex: "1",
                        padding: "10%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          width: "70%",
                          height: "10px",
                          background: "#0A0A0A",
                          flex: "none",
                        }}
                      ></span>
                      <span
                        style={{
                          display: "block",
                          width: "46%",
                          height: "10px",
                          background: "#0A0A0A",
                          flex: "none",
                        }}
                      ></span>
                      <span style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
                        <span
                          style={{
                            display: "block",
                            width: "40px",
                            height: "14px",
                            background: "var(--acc)",
                            flex: "none",
                          }}
                        ></span>
                        <span
                          style={{
                            display: "block",
                            width: "34px",
                            height: "14px",
                            background: "transparent",
                            flex: "none",
                            border: "1.5px solid #0A0A0A",
                            boxSizing: "border-box",
                          }}
                        ></span>
                      </span>
                      <span
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3,1fr)",
                          gap: "6px",
                          marginTop: "auto",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            width: "100%",
                            height: "40px",
                            background: "#D9D2C4",
                            flex: "none",
                          }}
                        ></span>
                        <span
                          style={{
                            display: "block",
                            width: "100%",
                            height: "40px",
                            background: "#D9D2C4",
                            flex: "none",
                          }}
                        ></span>
                        <span
                          style={{
                            display: "block",
                            width: "100%",
                            height: "40px",
                            background: "#0A0A0A",
                            flex: "none",
                          }}
                        ></span>
                      </span>
                    </span>
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      left: "12px",
                      bottom: "10px",
                      fontSize: "10px",
                      fontWeight: "600",
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      color: "#8E8B8B",
                    }}
                  >
                    {t("Web development")}
                  </span>
                </div>
                <div
                  style={{
                    position: "relative",
                    height: "16.6667%",
                    overflow: "hidden",
                    background: "radial-gradient(120% 90% at 30% 20%,#262626 0%,#141414 70%)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "10%",
                      bottom: "10%",
                      aspectRatio: "9/18.5",
                      transform: "translateX(-50%)",
                      border: "3px solid #3A3A3A",
                      borderRadius: "20px",
                      background: "#0A0A0A",
                      padding: "22px 10% 10%",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      gap: "7px",
                      boxShadow: "0 30px 60px rgba(0,0,0,.5)",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        width: "55%",
                        height: "8px",
                        background: "#F3F2F2",
                        flex: "none",
                      }}
                    ></span>
                    <span
                      style={{
                        display: "block",
                        width: "100%",
                        height: "38%",
                        background: "#2A2A2A",
                        flex: "none",
                      }}
                    ></span>
                    <span
                      style={{
                        display: "block",
                        width: "100%",
                        height: "10%",
                        background: "#2A2A2A",
                        flex: "none",
                      }}
                    ></span>
                    <span
                      style={{
                        display: "block",
                        width: "100%",
                        height: "12%",
                        background: "var(--acc)",
                        flex: "none",
                        marginTop: "auto",
                      }}
                    ></span>
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      left: "12px",
                      bottom: "10px",
                      fontSize: "10px",
                      fontWeight: "600",
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      color: "#8E8B8B",
                    }}
                  >
                    {t("Mobile apps")}
                  </span>
                </div>
                <div
                  style={{
                    position: "relative",
                    height: "16.6667%",
                    overflow: "hidden",
                    background: "radial-gradient(120% 90% at 30% 20%,#262626 0%,#141414 70%)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      inset: "20% 8%",
                      display: "flex",
                      flexDirection: "column",
                      background: "#1E1E1E",
                      border: "1px solid #333",
                      boxShadow: "0 30px 60px rgba(0,0,0,.5)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        height: "14px",
                        padding: "0 7px",
                        background: "#262626",
                        flex: "none",
                      }}
                    >
                      <span
                        style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#555" }}
                      ></span>
                      <span
                        style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#555" }}
                      ></span>
                      <span
                        style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#555" }}
                      ></span>
                    </span>
                    <span style={{ flex: "1", display: "flex" }}>
                      <span
                        style={{
                          width: "30%",
                          background: "#161616",
                          padding: "8px 6px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            width: "100%",
                            height: "10px",
                            background: "#2E2E2E",
                            flex: "none",
                            borderLeft: "2px solid var(--acc)",
                          }}
                        ></span>
                        <span
                          style={{
                            display: "block",
                            width: "80%",
                            height: "6px",
                            background: "#3A3A3A",
                            flex: "none",
                          }}
                        ></span>
                        <span
                          style={{
                            display: "block",
                            width: "70%",
                            height: "6px",
                            background: "#3A3A3A",
                            flex: "none",
                          }}
                        ></span>
                        <span
                          style={{
                            display: "block",
                            width: "76%",
                            height: "6px",
                            background: "#3A3A3A",
                            flex: "none",
                          }}
                        ></span>
                      </span>
                      <span
                        style={{
                          flex: "1",
                          padding: "10px",
                          display: "flex",
                          alignItems: "flex-end",
                          gap: "4px",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            width: "100%",
                            height: "40%",
                            background: "#3A3A3A",
                            flex: "1",
                          }}
                        ></span>
                        <span
                          style={{
                            display: "block",
                            width: "100%",
                            height: "62%",
                            background: "#3A3A3A",
                            flex: "1",
                          }}
                        ></span>
                        <span
                          style={{
                            display: "block",
                            width: "100%",
                            height: "48%",
                            background: "#3A3A3A",
                            flex: "1",
                          }}
                        ></span>
                        <span
                          style={{
                            display: "block",
                            width: "100%",
                            height: "80%",
                            background: "#3A3A3A",
                            flex: "1",
                          }}
                        ></span>
                        <span
                          style={{
                            display: "block",
                            width: "100%",
                            height: "66%",
                            background: "#3A3A3A",
                            flex: "1",
                          }}
                        ></span>
                        <span
                          style={{
                            display: "block",
                            width: "100%",
                            height: "92%",
                            background: "var(--acc)",
                            flex: "1",
                          }}
                        ></span>
                      </span>
                    </span>
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      left: "12px",
                      bottom: "10px",
                      fontSize: "10px",
                      fontWeight: "600",
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      color: "#8E8B8B",
                    }}
                  >
                    {t("Desktop apps")}
                  </span>
                </div>
                <div
                  style={{
                    position: "relative",
                    height: "16.6667%",
                    overflow: "hidden",
                    background: "radial-gradient(120% 90% at 30% 20%,#262626 0%,#141414 70%)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      inset: "14%",
                      display: "grid",
                      gridTemplateColumns: "repeat(3,1fr)",
                      gridTemplateRows: "repeat(3,1fr)",
                      gap: "7px",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        background: "#F3F2F2",
                        flex: "none",
                        gridColumn: "1 / span 3",
                      }}
                    ></span>
                    <span
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        background: "#2A2A2A",
                        flex: "none",
                        gridColumn: "1 / span 2",
                      }}
                    ></span>
                    <span
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        background: "var(--acc)",
                        flex: "none",
                      }}
                    ></span>
                    <span
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        background: "transparent",
                        flex: "none",
                        border: "1.5px dashed #6B6868",
                        boxSizing: "border-box",
                      }}
                    ></span>
                    <span
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        background: "transparent",
                        flex: "none",
                        border: "1.5px dashed #6B6868",
                        boxSizing: "border-box",
                      }}
                    ></span>
                    <span
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        background: "#3A3A3A",
                        flex: "none",
                      }}
                    ></span>
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      left: "12px",
                      bottom: "10px",
                      fontSize: "10px",
                      fontWeight: "600",
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      color: "#8E8B8B",
                    }}
                  >
                    {t("Product design")}
                  </span>
                </div>
                <div
                  style={{
                    position: "relative",
                    height: "16.6667%",
                    overflow: "hidden",
                    background: "radial-gradient(120% 90% at 30% 20%,#262626 0%,#141414 70%)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      inset: "0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      background: "var(--acc)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        width: "62%",
                        padding: "10px 12px",
                        background: "#0A0A0A",
                        color: "#F3F2F2",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      <span style={{ width: "8px", height: "8px", background: "var(--acc)" }}></span>
                      {t("New order")}
                    </span>
                    <span style={{ width: "2px", height: "10px", background: "#0A0A0A" }}></span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        width: "62%",
                        padding: "10px 12px",
                        background: "#0A0A0A",
                        color: "#F3F2F2",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      <span style={{ width: "8px", height: "8px", background: "var(--acc)" }}></span>
                      {t("Invoice")}
                    </span>
                    <span style={{ width: "2px", height: "10px", background: "#0A0A0A" }}></span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        width: "62%",
                        padding: "10px 12px",
                        background: "#F3F2F2",
                        color: "#0A0A0A",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      <span style={{ width: "8px", height: "8px", background: "#0A0A0A" }}></span>
                      {t("Email sent")}
                    </span>
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      left: "12px",
                      bottom: "10px",
                      fontSize: "10px",
                      fontWeight: "600",
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      color: "#0A0A0A",
                    }}
                  >
                    {t("Automations")}
                  </span>
                </div>
                <div
                  style={{
                    position: "relative",
                    height: "16.6667%",
                    overflow: "hidden",
                    background: "radial-gradient(120% 90% at 30% 20%,#262626 0%,#141414 70%)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      inset: "16% 10%",
                      display: "flex",
                      boxShadow: "0 30px 60px rgba(0,0,0,.5)",
                    }}
                  >
                    <span
                      style={{
                        flex: "1",
                        background: "#2A2A2A",
                        padding: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          width: "80%",
                          height: "6px",
                          background: "#555",
                          flex: "none",
                        }}
                      ></span>
                      <span
                        style={{
                          display: "block",
                          width: "40%",
                          height: "18px",
                          background: "#444",
                          flex: "none",
                          marginLeft: "20%",
                        }}
                      ></span>
                      <span
                        style={{
                          display: "block",
                          width: "90%",
                          height: "6px",
                          background: "#555",
                          flex: "none",
                        }}
                      ></span>
                      <span
                        style={{
                          display: "block",
                          width: "60%",
                          height: "6px",
                          background: "#555",
                          flex: "none",
                          marginLeft: "10%",
                        }}
                      ></span>
                    </span>
                    <span style={{ width: "3px", background: "var(--acc)" }}></span>
                    <span
                      style={{
                        flex: "1",
                        background: "#F1ECE2",
                        padding: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          width: "70%",
                          height: "9px",
                          background: "#0A0A0A",
                          flex: "none",
                        }}
                      ></span>
                      <span
                        style={{
                          display: "block",
                          width: "50%",
                          height: "9px",
                          background: "#0A0A0A",
                          flex: "none",
                        }}
                      ></span>
                      <span
                        style={{
                          display: "block",
                          width: "40%",
                          height: "12px",
                          background: "var(--acc)",
                          flex: "none",
                        }}
                      ></span>
                      <span
                        style={{
                          display: "block",
                          width: "100%",
                          height: "30px",
                          background: "#D9D2C4",
                          flex: "none",
                          marginTop: "auto",
                        }}
                      ></span>
                    </span>
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      left: "12px",
                      bottom: "10px",
                      fontSize: "10px",
                      fontWeight: "600",
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      color: "#8E8B8B",
                    }}
                  >
                    {t("Software modernization")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-show="1"
        id="work"
        style={{
          position: "relative",
          zIndex: "5",
          height: "calc(var(--svh) * 420 + var(--lvh) * 100)",
          marginTop: "calc(var(--svh) * -125)",
          background: "transparent",
          pointerEvents: "none",
        }}
      >
        <div style={{ position: "sticky", top: "0", height: "calc(var(--lvh) * 100)", overflow: "hidden" }}>
          <div
            data-show-dark="1"
            style={{ position: "absolute", inset: "0", background: "#050505", opacity: "0" }}
          ></div>
          <div data-show-gl="1" style={{ position: "absolute", inset: "0" }}></div>
          <div
            data-show-blur="1"
            style={{ position: "absolute", inset: "0", pointerEvents: "none", opacity: "0" }}
          >
            <div
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                height: "34%",
                backdropFilter: "blur(2.5px)",
                WebkitBackdropFilter: "blur(2.5px)",
                maskImage: "linear-gradient(#000 55%,transparent)",
                WebkitMaskImage: "linear-gradient(#000 55%,transparent)",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                bottom: "0",
                height: "34%",
                backdropFilter: "blur(2.5px)",
                WebkitBackdropFilter: "blur(2.5px)",
                maskImage: "linear-gradient(transparent,#000 45%)",
                WebkitMaskImage: "linear-gradient(transparent,#000 45%)",
              }}
            ></div>
          </div>
          <div data-show-vig="1" style={{ position: "absolute", inset: "0", opacity: "0" }}>
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "radial-gradient(ellipse 70% 80% at 50% 50%,rgba(5,5,5,0) 40%,rgba(5,5,5,.85) 100%)",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                height: "calc(var(--svh) * 22)",
                background: "linear-gradient(#050505,rgba(5,5,5,0))",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                bottom: "0",
                height: "calc(var(--svh) * 22)",
                background: "linear-gradient(rgba(5,5,5,0),#050505)",
              }}
            ></div>
          </div>
          <div
            data-safe="1"
            style={{ position: "absolute", top: "0", left: "0", right: "0", height: "calc(var(--svh) * 100)" }}
          >
          <div
            data-show-words="1"
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
              gap: "min(24vw,calc(var(--svh) * 30))",
              pointerEvents: "none",
              visibility: "hidden",
              textShadow: "0 0 48px rgba(5,5,5,.7)",
            }}
          >
            <span
              style={{
                flex: "1",
                minWidth: "0",
                display: "flex",
                justifyContent: "flex-end",
                overflow: "hidden",
              }}
            >
              <span
                data-sw="1"
                style={{
                  display: "block",
                  fontSize: "clamp(40px,7.2vw,136px)",
                  fontWeight: "600",
                  letterSpacing: "-.06em",
                  lineHeight: "1",
                  paddingBottom: ".1em",
                  color: "#F3F2F2",
                  whiteSpace: "nowrap",
                }}
              >
                {t("Selected")}
              </span>
            </span>
            <span
              style={{
                flex: "1",
                minWidth: "0",
                display: "flex",
                justifyContent: "flex-start",
                overflow: "hidden",
              }}
            >
              <span
                data-sw="-1"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: ".12em",
                  fontSize: "clamp(40px,7.2vw,136px)",
                  fontWeight: "300",
                  letterSpacing: "-.06em",
                  lineHeight: "1",
                  paddingBottom: ".1em",
                  color: "#F3F2F2",
                  whiteSpace: "nowrap",
                }}
              >
                {t("work")}
              </span>
            </span>
          </div>
          <div
            data-show-cta="1"
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              top: "calc(50% + calc(var(--svh) * 24))",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              opacity: "0",
              transform: "translateY(30px)",
            }}
          >
            <Link
              href="/work"
              style={{
                pointerEvents: "auto",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                border: "1px solid #5B5958",
                padding: "11px 18px",
                fontSize: "13px",
                fontWeight: "500",
                letterSpacing: ".01em",
                color: "#F3F2F2",
                textDecoration: "none",
                background: "rgba(10,10,10,.35)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                transition: "border-color .35s ease,color .35s ease",
              }}
              className="hv2"
            >
              {t("Explore the work ")}
              <span style={{ color: "var(--acc)" }}>{"→"}</span>
            </Link>
          </div>
          </div>
        </div>
      </section>
      <section
        data-case="1"
        id="case"
        data-screen-label="Case study"
        style={{ position: "relative", zIndex: "6", background: "#0A0A0A", color: "#F3F2F2" }}
      >
        <div style={{ padding: "clamp(100px,calc(var(--svh) * 16),180px) clamp(20px,4vw,56px) clamp(56px,calc(var(--svh) * 9),100px)" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "24px",
              paddingBottom: "clamp(24px,calc(var(--svh) * 4),40px)",
            }}
          >
            <span
              data-cf="0"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "12px",
                fontWeight: "500",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#8A8786",
              }}
            >
              <span style={{ width: "8px", height: "8px", background: "var(--acc)" }}></span>
              {t("Case study")}
            </span>
            <span
              data-cf="1"
              style={{ fontSize: "12px", fontWeight: "500", letterSpacing: ".08em", color: "#8A8786" }}
            >
              {"(01)"}
            </span>
          </div>
          <h2
            style={{
              margin: "0",
              display: "flex",
              flexDirection: "column",
              fontFamily: "var(--font-poppins), sans-serif",
              letterSpacing: "-.06em",
              lineHeight: ".9",
            }}
          >
            <span data-cm="0" style={{ display: "block", overflow: "hidden", paddingBottom: ".04em" }}>
              <span style={{ display: "block", fontSize: "clamp(64px,12.5vw,230px)", fontWeight: "600" }}>
                {t("Barbershop")}
              </span>
            </span>
            <span data-cm="1" style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(32px,4.6vw,80px)",
                  fontWeight: "300",
                  letterSpacing: "-.045em",
                }}
              >
                {t("Bookings and cash, ")}
                <span style={{ fontWeight: "600", color: "var(--acc)" }}>{t("in one place.")}</span>
              </span>
            </span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: "24px",
              marginTop: "clamp(48px,calc(var(--svh) * 8),88px)",
            }}
          >
            <div
              data-cf="2"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                paddingTop: "16px",
                borderTop: "1px solid #2A2A2A",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "500",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#8A8786",
                }}
              >
                {t("Client")}
              </span>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>{t("Local barbershop")}</span>
            </div>
            <div
              data-cf="3"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                paddingTop: "16px",
                borderTop: "1px solid #2A2A2A",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "500",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#8A8786",
                }}
              >
                {t("Scope")}
              </span>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>
                {t("Booking site, agenda, cash register")}
              </span>
            </div>
            <div
              data-cf="4"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                paddingTop: "16px",
                borderTop: "1px solid #2A2A2A",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "500",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#8A8786",
                }}
              >
                {t("Stack")}
              </span>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>
                {"Next.js, PostgreSQL, Mercado Pago"}
              </span>
            </div>
            <div
              data-cf="5"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                paddingTop: "16px",
                borderTop: "1px solid #2A2A2A",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "500",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#8A8786",
                }}
              >
                {t("Timeline")}
              </span>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>{t("5 weeks")}</span>
            </div>
          </div>
        </div>
        <div data-cpin="1" style={{ position: "relative", height: "calc(var(--svh) * 220 + var(--lvh) * 100)" }}>
          <div style={{ position: "sticky", top: "0", height: "calc(var(--lvh) * 100)", overflow: "hidden" }}>
            <div
              data-cframe="1"
              style={{
                position: "absolute",
                inset: "0",
                overflow: "hidden",
                background: "#161616",
                transform: "scale(.56)",
                borderRadius: "14px",
                willChange: "transform",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "0",
                  height: "40px",
                  zIndex: "2",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "0 16px",
                  background: "#161616",
                  borderBottom: "1px solid #2A2A2A",
                }}
              >
                <span style={{ display: "flex", gap: "6px" }}>
                  <span
                    style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#3A3A3A" }}
                  ></span>
                  <span
                    style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#3A3A3A" }}
                  ></span>
                  <span
                    style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#3A3A3A" }}
                  ></span>
                </span>
                <span
                  style={{ fontSize: "12px", fontWeight: "500", color: "#8A8786", letterSpacing: ".01em" }}
                >
                  {t("Booking site · client project")}
                </span>
              </div>
              <div
                data-cshot="1"
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "40px",
                  height: "280%",
                  willChange: "transform",
                }}
              >
                <div data-cshot-in="1" style={{ position: "absolute", inset: "0", transformOrigin: "50% 0" }}>
                  <div
                    className="cmock"
                    style={{
                      position: "absolute",
                      inset: "0",
                      background: "#111111",
                      color: "#EDEDED",
                      fontFamily: "var(--font-poppins), sans-serif",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "24px",
                        padding: "22px 5%",
                        borderBottom: "1px solid #222",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          fontSize: "22px",
                          fontWeight: "600",
                          letterSpacing: "-.05em",
                        }}
                      >
                        <span
                          style={{
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            border: "6px solid var(--acc)",
                            boxSizing: "border-box",
                          }}
                        ></span>
                        {"barber"}
                      </span>
                      <span style={{ display: "flex", gap: "28px", fontSize: "13px", color: "#8A8786" }}>
                        <span>{t("Services")}</span>
                        <span>{t("Team")}</span>
                        <span>{t("Location")}</span>
                      </span>
                      <span
                        style={{
                          padding: "10px 18px",
                          background: "var(--acc)",
                          color: "#0A0A0A",
                          fontSize: "13px",
                          fontWeight: "600",
                          borderRadius: "8px",
                        }}
                      >
                        {t("Book now")}
                      </span>
                    </div>
                    <div
                      style={{
                        flex: "1.3",
                        display: "grid",
                        gridTemplateColumns: "minmax(0,1.05fr) minmax(0,1fr)",
                        gap: "5%",
                        padding: "5% 5% 4%",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "500",
                            letterSpacing: ".12em",
                            textTransform: "uppercase",
                            color: "#8A8786",
                          }}
                        >
                          {t("Barbershop · Online booking")}
                        </span>
                        <span
                          style={{
                            fontSize: "clamp(34px,4.4vw,72px)",
                            fontWeight: "600",
                            letterSpacing: "-.055em",
                            lineHeight: "1",
                          }}
                        >
                          {t("Your chair,")}
                          <br />
                          <span style={{ fontWeight: "300" }}>{t("one tap away.")}</span>
                        </span>
                        <span
                          style={{
                            maxWidth: "380px",
                            fontSize: "15px",
                            lineHeight: "1.55",
                            color: "#8A8786",
                          }}
                        >
                          {t("Pick a barber, a day and a time. We'll send you a reminder two hours before.")}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "18px",
                          padding: "24px",
                          background: "#161616",
                          border: "1px solid #262626",
                          borderRadius: "16px",
                        }}
                      >
                        <span style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                          <span style={{ fontWeight: "600" }}>{t("Pick a day")}</span>
                          <span style={{ color: "#8A8786" }}>{t("October")}</span>
                        </span>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(6,minmax(0,1fr))",
                            gap: "8px",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "4px",
                              padding: "10px 0",
                              borderRadius: "10px",
                              background: "var(--acc)",
                              color: "#0A0A0A",
                            }}
                          >
                            <span style={{ fontSize: "11px", opacity: ".7" }}>{t("Tue")}</span>
                            <span style={{ fontSize: "17px", fontWeight: "600" }}>{"14"}</span>
                          </span>
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "4px",
                              padding: "10px 0",
                              borderRadius: "10px",
                              color: "#EDEDED",
                              border: "1px solid #262626",
                            }}
                          >
                            <span style={{ fontSize: "11px", opacity: ".7" }}>{t("Wed")}</span>
                            <span style={{ fontSize: "17px", fontWeight: "600" }}>{"15"}</span>
                          </span>
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "4px",
                              padding: "10px 0",
                              borderRadius: "10px",
                              color: "#EDEDED",
                              border: "1px solid #262626",
                            }}
                          >
                            <span style={{ fontSize: "11px", opacity: ".7" }}>{t("Thu")}</span>
                            <span style={{ fontSize: "17px", fontWeight: "600" }}>{"16"}</span>
                          </span>
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "4px",
                              padding: "10px 0",
                              borderRadius: "10px",
                              color: "#EDEDED",
                              border: "1px solid #262626",
                            }}
                          >
                            <span style={{ fontSize: "11px", opacity: ".7" }}>{t("Fri")}</span>
                            <span style={{ fontSize: "17px", fontWeight: "600" }}>{"17"}</span>
                          </span>
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "4px",
                              padding: "10px 0",
                              borderRadius: "10px",
                              color: "#EDEDED",
                              border: "1px solid #262626",
                            }}
                          >
                            <span style={{ fontSize: "11px", opacity: ".7" }}>{t("Sat")}</span>
                            <span style={{ fontSize: "17px", fontWeight: "600" }}>{"18"}</span>
                          </span>
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "4px",
                              padding: "10px 0",
                              borderRadius: "10px",
                              color: "#EDEDED",
                              border: "1px solid #262626",
                            }}
                          >
                            <span style={{ fontSize: "11px", opacity: ".7" }}>{t("Tue")}</span>
                            <span style={{ fontSize: "17px", fontWeight: "600" }}>{"21"}</span>
                          </span>
                        </div>
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>{t("Available times")}</span>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4,minmax(0,1fr))",
                            gap: "8px",
                          }}
                        >
                          <span
                            style={{
                              padding: "9px 0",
                              textAlign: "center",
                              borderRadius: "8px",
                              fontSize: "13px",
                              fontWeight: "500",
                              color: "#4A4848",
                              textDecoration: "line-through",
                              border: "1px solid #262626",
                            }}
                          >
                            {"10:00"}
                          </span>
                          <span
                            style={{
                              padding: "9px 0",
                              textAlign: "center",
                              borderRadius: "8px",
                              fontSize: "13px",
                              fontWeight: "500",
                              color: "#EDEDED",
                              border: "1px solid #262626",
                            }}
                          >
                            {"10:45"}
                          </span>
                          <span
                            style={{
                              padding: "9px 0",
                              textAlign: "center",
                              borderRadius: "8px",
                              fontSize: "13px",
                              fontWeight: "500",
                              color: "#4A4848",
                              textDecoration: "line-through",
                              border: "1px solid #262626",
                            }}
                          >
                            {"11:30"}
                          </span>
                          <span
                            style={{
                              padding: "9px 0",
                              textAlign: "center",
                              borderRadius: "8px",
                              fontSize: "13px",
                              fontWeight: "500",
                              color: "#EDEDED",
                              border: "1px solid #262626",
                            }}
                          >
                            {"13:00"}
                          </span>
                          <span
                            style={{
                              padding: "9px 0",
                              textAlign: "center",
                              borderRadius: "8px",
                              fontSize: "13px",
                              fontWeight: "500",
                              color: "#EDEDED",
                              border: "1px solid #262626",
                            }}
                          >
                            {"14:15"}
                          </span>
                          <span
                            style={{
                              padding: "9px 0",
                              textAlign: "center",
                              borderRadius: "8px",
                              fontSize: "13px",
                              fontWeight: "500",
                              color: "#4A4848",
                              textDecoration: "line-through",
                              border: "1px solid #262626",
                            }}
                          >
                            {"15:00"}
                          </span>
                          <span
                            style={{
                              padding: "9px 0",
                              textAlign: "center",
                              borderRadius: "8px",
                              fontSize: "13px",
                              fontWeight: "500",
                              background: "var(--acc)",
                              color: "#0A0A0A",
                            }}
                          >
                            {"16:30"}
                          </span>
                          <span
                            style={{
                              padding: "9px 0",
                              textAlign: "center",
                              borderRadius: "8px",
                              fontSize: "13px",
                              fontWeight: "500",
                              color: "#EDEDED",
                              border: "1px solid #262626",
                            }}
                          >
                            {"17:15"}
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingTop: "16px",
                            borderTop: "1px solid #262626",
                          }}
                        >
                          <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                            <span style={{ fontSize: "14px", fontWeight: "600" }}>{t("Cut + Beard")}</span>
                            <span style={{ fontSize: "12px", color: "#8A8786" }}>
                              {t("45 min · with Tomi")}
                            </span>
                          </span>
                          <span style={{ fontSize: "20px", fontWeight: "300" }}>{"$18"}</span>
                        </div>
                        <span
                          style={{
                            padding: "14px 0",
                            textAlign: "center",
                            background: "var(--acc)",
                            color: "#0A0A0A",
                            fontSize: "14px",
                            fontWeight: "600",
                            borderRadius: "10px",
                          }}
                        >
                          {t("Confirm booking")}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        flex: ".8",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "24px",
                        padding: "4% 5%",
                        borderTop: "1px solid #222",
                      }}
                    >
                      <span
                        style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}
                      >
                        <span style={{ fontSize: "32px", fontWeight: "600", letterSpacing: "-.05em" }}>
                          {t("Services")}
                        </span>
                        <span style={{ fontSize: "12px", color: "#8A8786" }}>{"(03)"}</span>
                      </span>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                          gap: "16px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "18px",
                            padding: "22px",
                            background: "#161616",
                            border: "1px solid #262626",
                            borderRadius: "14px",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontSize: "12px",
                              color: "#8A8786",
                            }}
                          >
                            <span>{t("30 min")}</span>
                            <span>{t("from")}</span>
                          </span>
                          <span
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "baseline",
                            }}
                          >
                            <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-.03em" }}>
                              {t("Haircut")}
                            </span>
                            <span style={{ fontSize: "22px", fontWeight: "300" }}>{"$12"}</span>
                          </span>
                          <span style={{ fontSize: "13px", fontWeight: "500", color: "var(--acc)" }}>
                            {t("Book →")}
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "18px",
                            padding: "22px",
                            background: "#161616",
                            border: "1px solid #262626",
                            borderRadius: "14px",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontSize: "12px",
                              color: "#8A8786",
                            }}
                          >
                            <span>{t("20 min")}</span>
                            <span>{t("from")}</span>
                          </span>
                          <span
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "baseline",
                            }}
                          >
                            <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-.03em" }}>
                              {t("Beard")}
                            </span>
                            <span style={{ fontSize: "22px", fontWeight: "300" }}>{"$8"}</span>
                          </span>
                          <span style={{ fontSize: "13px", fontWeight: "500", color: "var(--acc)" }}>
                            {t("Book →")}
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "18px",
                            padding: "22px",
                            background: "#161616",
                            border: "1px solid #262626",
                            borderRadius: "14px",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontSize: "12px",
                              color: "#8A8786",
                            }}
                          >
                            <span>{t("45 min")}</span>
                            <span>{t("from")}</span>
                          </span>
                          <span
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "baseline",
                            }}
                          >
                            <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-.03em" }}>
                              {t("Cut + Beard")}
                            </span>
                            <span style={{ fontSize: "22px", fontWeight: "300" }}>{"$18"}</span>
                          </span>
                          <span style={{ fontSize: "13px", fontWeight: "500", color: "var(--acc)" }}>
                            {t("Book →")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        flex: "1.35",
                        display: "grid",
                        gridTemplateColumns: "minmax(0,1.35fr) minmax(0,1fr)",
                        gap: "3%",
                        padding: "4% 5%",
                        background: "#0D0D0D",
                        borderTop: "1px solid #222",
                        alignItems: "start",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                        <span
                          style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}
                        >
                          <span style={{ fontSize: "26px", fontWeight: "600", letterSpacing: "-.04em" }}>
                            {t("Today ")}
                            <span style={{ fontWeight: "300", color: "#8A8786" }}>{t("Tue 14")}</span>
                          </span>
                          <span style={{ fontSize: "12px", color: "#8A8786" }}>{t("Admin · Agenda")}</span>
                        </span>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "64px minmax(0,1fr) minmax(0,1fr) auto",
                              alignItems: "center",
                              gap: "16px",
                              padding: "14px 0",
                              borderTop: "1px solid #222",
                              fontSize: "14px",
                            }}
                          >
                            <span style={{ color: "#8A8786" }}>{"10:45"}</span>
                            <span style={{ fontWeight: "500" }}>{"Lucas M."}</span>
                            <span style={{ color: "#8A8786" }}>{t("Haircut")}</span>
                            <span
                              style={{
                                padding: "5px 10px",
                                borderRadius: "999px",
                                fontSize: "11px",
                                fontWeight: "600",
                                color: "#8A8786",
                                background: "#1C1C1C",
                              }}
                            >
                              {t("Paid")}
                            </span>
                          </div>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "64px minmax(0,1fr) minmax(0,1fr) auto",
                              alignItems: "center",
                              gap: "16px",
                              padding: "14px 0",
                              borderTop: "1px solid #222",
                              fontSize: "14px",
                            }}
                          >
                            <span style={{ color: "#8A8786" }}>{"13:00"}</span>
                            <span style={{ fontWeight: "500" }}>{"Franco R."}</span>
                            <span style={{ color: "#8A8786" }}>{t("Cut + Beard")}</span>
                            <span
                              style={{
                                padding: "5px 10px",
                                borderRadius: "999px",
                                fontSize: "11px",
                                fontWeight: "600",
                                color: "#8A8786",
                                background: "#1C1C1C",
                              }}
                            >
                              {t("Paid")}
                            </span>
                          </div>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "64px minmax(0,1fr) minmax(0,1fr) auto",
                              alignItems: "center",
                              gap: "16px",
                              padding: "14px 0",
                              borderTop: "1px solid #222",
                              fontSize: "14px",
                            }}
                          >
                            <span style={{ color: "#8A8786" }}>{"14:15"}</span>
                            <span style={{ fontWeight: "500" }}>{"Juan P."}</span>
                            <span style={{ color: "#8A8786" }}>{t("Beard")}</span>
                            <span
                              style={{
                                padding: "5px 10px",
                                borderRadius: "999px",
                                fontSize: "11px",
                                fontWeight: "600",
                                color: "#8A8786",
                                background: "#1C1C1C",
                              }}
                            >
                              {t("No-show")}
                            </span>
                          </div>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "64px minmax(0,1fr) minmax(0,1fr) auto",
                              alignItems: "center",
                              gap: "16px",
                              padding: "14px 0",
                              borderTop: "1px solid #222",
                              fontSize: "14px",
                            }}
                          >
                            <span style={{ color: "#8A8786" }}>{"16:30"}</span>
                            <span style={{ fontWeight: "500" }}>{"Martín S."}</span>
                            <span style={{ color: "#8A8786" }}>{t("Cut + Beard")}</span>
                            <span
                              style={{
                                padding: "5px 10px",
                                borderRadius: "999px",
                                fontSize: "11px",
                                fontWeight: "600",
                                color: "#0A0A0A",
                                background: "var(--acc)",
                              }}
                            >
                              {t("In chair")}
                            </span>
                          </div>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "64px minmax(0,1fr) minmax(0,1fr) auto",
                              alignItems: "center",
                              gap: "16px",
                              padding: "14px 0",
                              borderTop: "1px solid #222",
                              fontSize: "14px",
                            }}
                          >
                            <span style={{ color: "#8A8786" }}>{"17:15"}</span>
                            <span style={{ fontWeight: "500" }}>{"Nico V."}</span>
                            <span style={{ color: "#8A8786" }}>{t("Haircut")}</span>
                            <span
                              style={{
                                padding: "5px 10px",
                                borderRadius: "999px",
                                fontSize: "11px",
                                fontWeight: "600",
                                color: "#EDEDED",
                                background: "#262626",
                              }}
                            >
                              {t("Confirmed")}
                            </span>
                          </div>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "64px minmax(0,1fr) minmax(0,1fr) auto",
                              alignItems: "center",
                              gap: "16px",
                              padding: "14px 0",
                              borderTop: "1px solid #222",
                              fontSize: "14px",
                            }}
                          >
                            <span style={{ color: "#8A8786" }}>{"18:00"}</span>
                            <span style={{ fontWeight: "500" }}>{"Agus T."}</span>
                            <span style={{ color: "#8A8786" }}>{t("Haircut")}</span>
                            <span
                              style={{
                                padding: "5px 10px",
                                borderRadius: "999px",
                                fontSize: "11px",
                                fontWeight: "600",
                                color: "#EDEDED",
                                background: "#262626",
                              }}
                            >
                              {t("Confirmed")}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "20px",
                          padding: "24px",
                          background: "#161616",
                          border: "1px solid #262626",
                          borderRadius: "16px",
                        }}
                      >
                        <span style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                          <span style={{ fontWeight: "600" }}>{t("Cash register")}</span>
                          <span
                            style={{ display: "flex", alignItems: "center", gap: "6px", color: "#8A8786" }}
                          >
                            <span
                              style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                background: "var(--acc)",
                              }}
                            ></span>
                            {t("Open")}
                          </span>
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <span style={{ fontSize: "12px", color: "#8A8786" }}>{t("Total today")}</span>
                          <span
                            style={{
                              fontSize: "52px",
                              fontWeight: "600",
                              letterSpacing: "-.05em",
                              lineHeight: "1",
                            }}
                          >
                            {"$412"}
                          </span>
                        </span>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span
                            style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}
                          >
                            <span style={{ color: "#8A8786" }}>{t("Cash")}</span>
                            <span>{"$164"}</span>
                          </span>
                          <span
                            style={{
                              height: "6px",
                              borderRadius: "3px",
                              background: "#222",
                              overflow: "hidden",
                            }}
                          >
                            <span
                              style={{
                                display: "block",
                                height: "100%",
                                width: "40%",
                                background: "#EDEDED",
                                borderRadius: "3px",
                              }}
                            ></span>
                          </span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span
                            style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}
                          >
                            <span style={{ color: "#8A8786" }}>{t("Card")}</span>
                            <span>{"$198"}</span>
                          </span>
                          <span
                            style={{
                              height: "6px",
                              borderRadius: "3px",
                              background: "#222",
                              overflow: "hidden",
                            }}
                          >
                            <span
                              style={{
                                display: "block",
                                height: "100%",
                                width: "48%",
                                background: "var(--acc)",
                                borderRadius: "3px",
                              }}
                            ></span>
                          </span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span
                            style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}
                          >
                            <span style={{ color: "#8A8786" }}>{t("Transfer")}</span>
                            <span>{"$50"}</span>
                          </span>
                          <span
                            style={{
                              height: "6px",
                              borderRadius: "3px",
                              background: "#222",
                              overflow: "hidden",
                            }}
                          >
                            <span
                              style={{
                                display: "block",
                                height: "100%",
                                width: "12%",
                                background: "#5B5958",
                                borderRadius: "3px",
                              }}
                            ></span>
                          </span>
                        </div>
                        <span
                          style={{
                            padding: "12px 0",
                            textAlign: "center",
                            border: "1px solid #3A3A3A",
                            fontSize: "13px",
                            fontWeight: "600",
                            borderRadius: "10px",
                          }}
                        >
                          {t("Close the day")}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        flex: ".4",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        gap: "24px",
                        padding: "3% 5%",
                        borderTop: "1px solid #222",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "clamp(60px,9vw,150px)",
                          fontWeight: "600",
                          letterSpacing: "-.07em",
                          lineHeight: ".8",
                          color: "#1E1E1E",
                        }}
                      >
                        {"barber"}
                      </span>
                      <span style={{ fontSize: "13px", color: "#8A8786", textAlign: "right" }}>
                        {t("Open Tue–Sat · 10–20h")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-cpanel="1"
              style={{
                position: "absolute",
                left: "clamp(20px,4vw,56px)",
                bottom: "calc(clamp(20px,calc(var(--svh) * 4),40px) + (var(--lvh) - var(--svh)) * 100)",
                zIndex: "3",
                width: "min(440px,calc(100% - 40px))",
                boxSizing: "border-box",
                padding: "24px 24px 22px",
                background: "#0A0A0A",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                opacity: "0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "#8A8786",
                  }}
                >
                  {t("Step ")}
                  <span data-ccount="1" style={{ color: "#F3F2F2" }}></span>
                  {" / 03"}
                </span>
                <span style={{ fontSize: "12px", fontWeight: "500", color: "#8A8786" }}>{t("Case 01")}</span>
              </div>
              <div style={{ display: "grid" }}>
                <div
                  data-cstep="1"
                  style={{ gridArea: "1 / 1", display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <span style={{ display: "block", overflow: "hidden" }}>
                    <span
                      data-cl="1"
                      style={{
                        display: "block",
                        fontSize: "28px",
                        fontWeight: "600",
                        letterSpacing: "-.04em",
                        lineHeight: "1.1",
                        color: "var(--acc)",
                      }}
                    >
                      {t("The problem")}
                    </span>
                  </span>
                  <span style={{ display: "block", overflow: "hidden" }}>
                    <span
                      data-cl="1"
                      style={{ display: "block", fontSize: "16px", lineHeight: "1.5", color: "#F3F2F2" }}
                    >
                      {t("Every booking came in over WhatsApp.")}
                    </span>
                  </span>
                  <span style={{ display: "block", overflow: "hidden" }}>
                    <span
                      data-cl="1"
                      style={{ display: "block", fontSize: "16px", lineHeight: "1.5", color: "#B5B2B0" }}
                    >
                      {t("Double bookings, no-shows and a cash box on paper.")}
                    </span>
                  </span>
                </div>
                <div
                  data-cstep="1"
                  style={{ gridArea: "1 / 1", display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <span style={{ display: "block", overflow: "hidden" }}>
                    <span
                      data-cl="1"
                      style={{
                        display: "block",
                        fontSize: "28px",
                        fontWeight: "600",
                        letterSpacing: "-.04em",
                        lineHeight: "1.1",
                        color: "var(--acc)",
                      }}
                    >
                      {t("The approach")}
                    </span>
                  </span>
                  <span style={{ display: "block", overflow: "hidden" }}>
                    <span
                      data-cl="1"
                      style={{ display: "block", fontSize: "16px", lineHeight: "1.5", color: "#F3F2F2" }}
                    >
                      {t("We spent a day at the shop before designing.")}
                    </span>
                  </span>
                  <span style={{ display: "block", overflow: "hidden" }}>
                    <span
                      data-cl="1"
                      style={{ display: "block", fontSize: "16px", lineHeight: "1.5", color: "#B5B2B0" }}
                    >
                      {t("Then built booking, agenda and cash in weekly sprints.")}
                    </span>
                  </span>
                </div>
                <div
                  data-cstep="1"
                  style={{ gridArea: "1 / 1", display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <span style={{ display: "block", overflow: "hidden" }}>
                    <span
                      data-cl="1"
                      style={{
                        display: "block",
                        fontSize: "28px",
                        fontWeight: "600",
                        letterSpacing: "-.04em",
                        lineHeight: "1.1",
                        color: "var(--acc)",
                      }}
                    >
                      {t("The result")}
                    </span>
                  </span>
                  <span style={{ display: "block", overflow: "hidden" }}>
                    <span
                      data-cl="1"
                      style={{ display: "block", fontSize: "16px", lineHeight: "1.5", color: "#F3F2F2" }}
                    >
                      {t("Clients book in three taps. Reminders go out alone.")}
                    </span>
                  </span>
                  <span style={{ display: "block", overflow: "hidden" }}>
                    <span
                      data-cl="1"
                      style={{ display: "block", fontSize: "16px", lineHeight: "1.5", color: "#B5B2B0" }}
                    >
                      {t("The day closes with one button, numbers included.")}
                    </span>
                  </span>
                </div>
              </div>
              <div style={{ height: "2px", background: "#2A2A2A", overflow: "hidden" }}>
                <div
                  data-cbar="1"
                  style={{
                    height: "100%",
                    background: "var(--acc)",
                    transform: "scaleX(0)",
                    transformOrigin: "0 50%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "clamp(80px,calc(var(--svh) * 14),160px) clamp(20px,4vw,56px) 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "24px",
          }}
        >
          <div
            data-cf="0"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              paddingTop: "18px",
              borderTop: "1px solid #2A2A2A",
            }}
          >
            <span
              style={{
                fontSize: "clamp(64px,8vw,140px)",
                fontWeight: "600",
                letterSpacing: "-.06em",
                lineHeight: ".9",
              }}
            >
              <span data-cnum="60" data-cpre="−" data-csuf="%"></span>
            </span>
            <span style={{ fontSize: "15px", color: "#B5B2B0" }}>
              {t("no-shows with automatic reminders")}
            </span>
          </div>
          <div
            data-cf="1"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              paddingTop: "18px",
              borderTop: "1px solid #2A2A2A",
            }}
          >
            <span
              style={{
                fontSize: "clamp(64px,8vw,140px)",
                fontWeight: "600",
                letterSpacing: "-.06em",
                lineHeight: ".9",
              }}
            >
              <span data-cnum="5" data-cpre="" data-csuf=" wks"></span>
            </span>
            <span style={{ fontSize: "15px", color: "#B5B2B0" }}>{t("from first call to launch")}</span>
          </div>
          <div
            data-cf="2"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              paddingTop: "18px",
              borderTop: "1px solid #2A2A2A",
            }}
          >
            <span
              style={{
                fontSize: "clamp(64px,8vw,140px)",
                fontWeight: "600",
                letterSpacing: "-.06em",
                lineHeight: ".9",
                color: "var(--acc)",
              }}
            >
              {t("3 taps")}
            </span>
            <span style={{ fontSize: "15px", color: "#B5B2B0" }}>{t("to book a chair, any time")}</span>
          </div>
        </div>
        <div
          data-cgal="1"
          style={{
            padding: "clamp(80px,calc(var(--svh) * 14),160px) clamp(20px,4vw,56px) clamp(60px,calc(var(--svh) * 10),120px)",
            display: "grid",
            gridTemplateColumns: "repeat(12,minmax(0,1fr))",
            gap: "clamp(12px,2vw,28px)",
            alignItems: "start",
          }}
        >
          <div data-cpar="-0.6" style={{ gridColumn: "1 / span 7", willChange: "transform" }}>
            <div
              data-crev="1"
              style={{
                position: "relative",
                aspectRatio: "4/5",
                overflow: "hidden",
                borderRadius: "6px",
                background: "#161616",
                clipPath: "inset(100% 0 0 0)",
              }}
            >
              <div data-crev-img="1" style={{ position: "absolute", inset: "0", transform: "scale(1.2)" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#141414",
                    fontFamily: "var(--font-poppins), sans-serif",
                    color: "#EDEDED",
                  }}
                >
                  <div
                    style={{
                      width: "52%",
                      aspectRatio: "9/18.5",
                      background: "#111",
                      border: "1px solid #2A2A2A",
                      borderRadius: "28px",
                      boxSizing: "border-box",
                      padding: "12% 9%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "10px",
                        color: "#8A8786",
                      }}
                    >
                      <span>{"16:28"}</span>
                      <span>{"barber"}</span>
                    </span>
                    <span
                      style={{
                        marginTop: "18%",
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: "var(--acc)",
                        color: "#0A0A0A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {"✓"}
                    </span>
                    <span
                      style={{
                        fontSize: "22px",
                        fontWeight: "600",
                        letterSpacing: "-.04em",
                        lineHeight: "1.05",
                      }}
                    >
                      {t("You're booked.")}
                    </span>
                    <span style={{ fontSize: "12px", lineHeight: "1.5", color: "#8A8786" }}>
                      {t("Tue 14 · 16:30")}
                      <br />
                      {t("Cut + Beard with Tomi")}
                    </span>
                    <span
                      style={{
                        marginTop: "auto",
                        padding: "10px 12px",
                        borderRadius: "12px",
                        background: "#1A1A1A",
                        border: "1px solid #262626",
                        fontSize: "11px",
                        lineHeight: "1.4",
                        color: "#B5B2B0",
                      }}
                    >
                      {t("We'll remind you 2h before. Reply 2 to reschedule.")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-cpar="0.9"
            style={{ gridColumn: "8 / span 5", marginTop: "calc(var(--svh) * 24)", willChange: "transform" }}
          >
            <div
              data-crev="1"
              style={{
                position: "relative",
                aspectRatio: "3/4",
                overflow: "hidden",
                borderRadius: "6px",
                background: "#161616",
                clipPath: "inset(100% 0 0 0)",
              }}
            >
              <div data-crev-img="1" style={{ position: "absolute", inset: "0", transform: "scale(1.2)" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: "0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "22px",
                    padding: "16%",
                    background: "#141414",
                    fontFamily: "var(--font-poppins), sans-serif",
                    color: "#EDEDED",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "#8A8786",
                    }}
                  >
                    {t("Daily close · Tue 14")}
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(40px,4.6vw,72px)",
                      fontWeight: "600",
                      letterSpacing: "-.06em",
                      lineHeight: ".9",
                    }}
                  >
                    {"$412"}
                  </span>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "110px" }}>
                    <span
                      style={{ flex: "1", height: "40%", borderRadius: "4px", background: "#262626" }}
                    ></span>
                    <span
                      style={{ flex: "1", height: "62%", borderRadius: "4px", background: "#262626" }}
                    ></span>
                    <span
                      style={{ flex: "1", height: "48%", borderRadius: "4px", background: "#262626" }}
                    ></span>
                    <span
                      style={{ flex: "1", height: "75%", borderRadius: "4px", background: "var(--acc)" }}
                    ></span>
                    <span
                      style={{ flex: "1", height: "90%", borderRadius: "4px", background: "#262626" }}
                    ></span>
                    <span
                      style={{ flex: "1", height: "30%", borderRadius: "4px", background: "#262626" }}
                    ></span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "11px",
                      color: "#8A8786",
                    }}
                  >
                    <span>{t("Tue")}</span>
                    <span>{t("Wed")}</span>
                    <span>{t("Thu")}</span>
                    <span>{t("Fri")}</span>
                    <span>{t("Sat")}</span>
                    <span>{t("Mon")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-cpar="0.3"
            style={{ gridColumn: "3 / span 7", marginTop: "calc(var(--svh) * 6)", willChange: "transform" }}
          >
            <div
              data-crev="1"
              style={{
                position: "relative",
                aspectRatio: "16/10",
                overflow: "hidden",
                borderRadius: "6px",
                background: "#161616",
                clipPath: "inset(100% 0 0 0)",
              }}
            >
              <div data-crev-img="1" style={{ position: "absolute", inset: "0", transform: "scale(1.2)" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    padding: "9% 10%",
                    background: "#141414",
                    fontFamily: "var(--font-poppins), sans-serif",
                    color: "#EDEDED",
                  }}
                >
                  <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-.04em" }}>
                      {t("Week 42")}
                    </span>
                    <span style={{ fontSize: "11px", color: "#8A8786" }}>{t("3 barbers · 86 bookings")}</span>
                  </span>
                  <div
                    style={{
                      flex: "1",
                      display: "grid",
                      gridTemplateColumns: "repeat(6,minmax(0,1fr))",
                      gridTemplateRows: "auto repeat(4,minmax(0,1fr))",
                      gap: "6px",
                    }}
                  >
                    <span style={{ fontSize: "10px", color: "#8A8786" }}>{t("Tue")}</span>
                    <span style={{ fontSize: "10px", color: "#8A8786" }}>{t("Wed")}</span>
                    <span style={{ fontSize: "10px", color: "#8A8786" }}>{t("Thu")}</span>
                    <span style={{ fontSize: "10px", color: "#8A8786" }}>{t("Fri")}</span>
                    <span style={{ fontSize: "10px", color: "#8A8786" }}>{t("Sat")}</span>
                    <span style={{ fontSize: "10px", color: "#8A8786" }}>{t("Mon")}</span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                    <span
                      style={{ borderRadius: "6px", background: "transparent", border: "1px dashed #262626" }}
                    ></span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                    <span
                      style={{ borderRadius: "6px", background: "transparent", border: "1px dashed #262626" }}
                    ></span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                    <span
                      style={{ borderRadius: "6px", background: "transparent", border: "1px dashed #262626" }}
                    ></span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                    <span
                      style={{ borderRadius: "6px", background: "transparent", border: "1px dashed #262626" }}
                    ></span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                    <span
                      style={{ borderRadius: "6px", background: "transparent", border: "1px dashed #262626" }}
                    ></span>
                    <span style={{ borderRadius: "6px", background: "var(--acc)" }}></span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                    <span
                      style={{ borderRadius: "6px", background: "transparent", border: "1px dashed #262626" }}
                    ></span>
                    <span
                      style={{ borderRadius: "6px", background: "transparent", border: "1px dashed #262626" }}
                    ></span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                    <span style={{ borderRadius: "6px", background: "#232323" }}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "0 clamp(20px,4vw,56px) clamp(100px,calc(var(--svh) * 16),180px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <span
            data-cf="0"
            style={{
              maxWidth: "520px",
              fontSize: "clamp(22px,2.4vw,36px)",
              fontWeight: "300",
              letterSpacing: "-.035em",
              lineHeight: "1.15",
              textWrap: "pretty",
            }}
          >
            {t("Got something like this in mind? ")}
            <span style={{ fontWeight: "600" }}>{t("Let's build it.")}</span>
          </span>
          <a
            data-cf="1"
            href="#case"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              height: "44px",
              padding: "0 4px 0 18px",
              background: "#F3F2F2",
              color: "#0A0A0A",
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "-.01em",
              textDecoration: "none",
              transition: "background .35s ease,color .35s ease",
            }}
            className="hv3"
          >
            {t("View full case")}
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                background: "#0A0A0A",
                color: "#F3F2F2",
                fontSize: "14px",
              }}
            >
              {"→"}
            </span>
          </a>
        </div>
      </section>
      <section
        data-faq="1"
        id="faq"
        style={{
          position: "relative",
          zIndex: "6",
          background: "#F3F2F2",
          color: "#0A0A0A",
          padding: "clamp(100px,calc(var(--svh) * 16),180px) clamp(20px,4vw,56px) clamp(80px,calc(var(--svh) * 12),140px)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
            paddingBottom: "clamp(28px,calc(var(--svh) * 5),48px)",
          }}
        >
          <h2
            style={{
              margin: "0",
              display: "flex",
              flexDirection: "column",
              fontSize: "clamp(44px,6.4vw,112px)",
              fontWeight: "600",
              letterSpacing: "-.055em",
              lineHeight: ".95",
            }}
          >
            <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
              <span data-fh="1" style={{ display: "block" }}>
                {t("Frequently")}
              </span>
            </span>
            <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
              <span data-fh="1" style={{ display: "block", fontWeight: "300" }}>
                {t("asked questions")}
              </span>
            </span>
          </h2>
          <span
            data-fin="1"
            style={{ fontSize: "12px", fontWeight: "500", letterSpacing: ".08em", color: "#6B6868" }}
          >
            {"(09)"}
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)",
            gap: "clamp(24px,5vw,80px)",
            padding: "clamp(40px,calc(var(--svh) * 7),80px) 0",
            borderTop: "1px solid #D4D1CF",
          }}
        >
          <span
            data-fin="1"
            style={{
              fontSize: "12px",
              fontWeight: "500",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "#6B6868",
            }}
          >
            {t("About Loom IT")}
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div data-fq="1" data-fin="1" data-open="1" style={{ display: "flex", flexDirection: "column" }}>
              <button
                data-fqb="1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                  width: "100%",
                  padding: "16px 0",
                  background: "transparent",
                  border: "0",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "clamp(17px,1.35vw,22px)",
                  fontWeight: "500",
                  letterSpacing: "-.02em",
                  color: "#0A0A0A",
                  transition: "color .4s ease",
                }}
                className="hv4"
              >
                {t("What is Loom IT?")}
                <span
                  data-fqi="1"
                  style={{ position: "relative", flex: "none", width: "14px", height: "14px" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      top: "6px",
                      height: "2px",
                      background: "currentColor",
                    }}
                  ></span>
                  <span
                    data-fqv="1"
                    style={{
                      position: "absolute",
                      top: "0",
                      bottom: "0",
                      left: "6px",
                      width: "2px",
                      background: "currentColor",
                      transform: "scaleY(0)",
                      transition: "transform .5s cubic-bezier(.16,1,.3,1)",
                    }}
                  ></span>
                </span>
              </button>
              <div
                data-fqa="1"
                style={{
                  display: "grid",
                  gridTemplateRows: "1fr",
                  transition: "grid-template-rows .6s cubic-bezier(.16,1,.3,1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    style={{
                      margin: "0",
                      padding: "0 0 20px",
                      maxWidth: "560px",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#3A3836",
                      textWrap: "pretty",
                    }}
                  >
                    {t(
                      "Loom IT is a small digital studio. We design and develop websites, web apps, mobile apps and custom software for businesses. The same people who design your product are the ones who build it, so nothing gets lost between the idea and the final code.",
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div data-fq="1" data-fin="1" data-open="0" style={{ display: "flex", flexDirection: "column" }}>
              <button
                data-fqb="1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                  width: "100%",
                  padding: "16px 0",
                  background: "transparent",
                  border: "0",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "clamp(17px,1.35vw,22px)",
                  fontWeight: "500",
                  letterSpacing: "-.02em",
                  color: "#A8A5A3",
                  transition: "color .4s ease",
                }}
                className="hv4"
              >
                {t("Who will I be working with?")}
                <span
                  data-fqi="1"
                  style={{ position: "relative", flex: "none", width: "14px", height: "14px" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      top: "6px",
                      height: "2px",
                      background: "currentColor",
                    }}
                  ></span>
                  <span
                    data-fqv="1"
                    style={{
                      position: "absolute",
                      top: "0",
                      bottom: "0",
                      left: "6px",
                      width: "2px",
                      background: "currentColor",
                      transform: "scaleY(1)",
                      transition: "transform .5s cubic-bezier(.16,1,.3,1)",
                    }}
                  ></span>
                </span>
              </button>
              <div
                data-fqa="1"
                style={{
                  display: "grid",
                  gridTemplateRows: "0fr",
                  transition: "grid-template-rows .6s cubic-bezier(.16,1,.3,1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    style={{
                      margin: "0",
                      padding: "0 0 20px",
                      maxWidth: "560px",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#3A3836",
                      textWrap: "pretty",
                    }}
                  >
                    {t(
                      "Directly with us. There are no account managers or middlemen: you talk to the people designing and writing the code from the first call to launch.",
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div data-fq="1" data-fin="1" data-open="0" style={{ display: "flex", flexDirection: "column" }}>
              <button
                data-fqb="1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                  width: "100%",
                  padding: "16px 0",
                  background: "transparent",
                  border: "0",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "clamp(17px,1.35vw,22px)",
                  fontWeight: "500",
                  letterSpacing: "-.02em",
                  color: "#A8A5A3",
                  transition: "color .4s ease",
                }}
                className="hv4"
              >
                {t("What kind of projects do you take on?")}
                <span
                  data-fqi="1"
                  style={{ position: "relative", flex: "none", width: "14px", height: "14px" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      top: "6px",
                      height: "2px",
                      background: "currentColor",
                    }}
                  ></span>
                  <span
                    data-fqv="1"
                    style={{
                      position: "absolute",
                      top: "0",
                      bottom: "0",
                      left: "6px",
                      width: "2px",
                      background: "currentColor",
                      transform: "scaleY(1)",
                      transition: "transform .5s cubic-bezier(.16,1,.3,1)",
                    }}
                  ></span>
                </span>
              </button>
              <div
                data-fqa="1"
                style={{
                  display: "grid",
                  gridTemplateRows: "0fr",
                  transition: "grid-template-rows .6s cubic-bezier(.16,1,.3,1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    style={{
                      margin: "0",
                      padding: "0 0 20px",
                      maxWidth: "560px",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#3A3836",
                      textWrap: "pretty",
                    }}
                  >
                    {t(
                      "Websites, online stores, web apps, mobile apps, internal tools, automations and the modernization of existing software. If it lives on a screen and helps a business work better, we probably can help.",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)",
            gap: "clamp(24px,5vw,80px)",
            padding: "clamp(40px,calc(var(--svh) * 7),80px) 0",
            borderTop: "1px solid #D4D1CF",
          }}
        >
          <span
            data-fin="1"
            style={{
              fontSize: "12px",
              fontWeight: "500",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "#6B6868",
            }}
          >
            {t("Projects & process")}
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div data-fq="1" data-fin="1" data-open="0" style={{ display: "flex", flexDirection: "column" }}>
              <button
                data-fqb="1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                  width: "100%",
                  padding: "16px 0",
                  background: "transparent",
                  border: "0",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "clamp(17px,1.35vw,22px)",
                  fontWeight: "500",
                  letterSpacing: "-.02em",
                  color: "#A8A5A3",
                  transition: "color .4s ease",
                }}
                className="hv4"
              >
                {t("How does a project start?")}
                <span
                  data-fqi="1"
                  style={{ position: "relative", flex: "none", width: "14px", height: "14px" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      top: "6px",
                      height: "2px",
                      background: "currentColor",
                    }}
                  ></span>
                  <span
                    data-fqv="1"
                    style={{
                      position: "absolute",
                      top: "0",
                      bottom: "0",
                      left: "6px",
                      width: "2px",
                      background: "currentColor",
                      transform: "scaleY(1)",
                      transition: "transform .5s cubic-bezier(.16,1,.3,1)",
                    }}
                  ></span>
                </span>
              </button>
              <div
                data-fqa="1"
                style={{
                  display: "grid",
                  gridTemplateRows: "0fr",
                  transition: "grid-template-rows .6s cubic-bezier(.16,1,.3,1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    style={{
                      margin: "0",
                      padding: "0 0 20px",
                      maxWidth: "560px",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#3A3836",
                      textWrap: "pretty",
                    }}
                  >
                    {t(
                      "With a short call to understand your business and what you need. Then we send a proposal with scope, timeline and price. Once approved, we design first, review it with you, and only then start building.",
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div data-fq="1" data-fin="1" data-open="0" style={{ display: "flex", flexDirection: "column" }}>
              <button
                data-fqb="1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                  width: "100%",
                  padding: "16px 0",
                  background: "transparent",
                  border: "0",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "clamp(17px,1.35vw,22px)",
                  fontWeight: "500",
                  letterSpacing: "-.02em",
                  color: "#A8A5A3",
                  transition: "color .4s ease",
                }}
                className="hv4"
              >
                {t("How long does a project take?")}
                <span
                  data-fqi="1"
                  style={{ position: "relative", flex: "none", width: "14px", height: "14px" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      top: "6px",
                      height: "2px",
                      background: "currentColor",
                    }}
                  ></span>
                  <span
                    data-fqv="1"
                    style={{
                      position: "absolute",
                      top: "0",
                      bottom: "0",
                      left: "6px",
                      width: "2px",
                      background: "currentColor",
                      transform: "scaleY(1)",
                      transition: "transform .5s cubic-bezier(.16,1,.3,1)",
                    }}
                  ></span>
                </span>
              </button>
              <div
                data-fqa="1"
                style={{
                  display: "grid",
                  gridTemplateRows: "0fr",
                  transition: "grid-template-rows .6s cubic-bezier(.16,1,.3,1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    style={{
                      margin: "0",
                      padding: "0 0 20px",
                      maxWidth: "560px",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#3A3836",
                      textWrap: "pretty",
                    }}
                  >
                    {t(
                      "It depends on the scope. A website usually takes a few weeks; an app or custom platform takes longer. You get a clear timeline in the proposal before we start.",
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div data-fq="1" data-fin="1" data-open="0" style={{ display: "flex", flexDirection: "column" }}>
              <button
                data-fqb="1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                  width: "100%",
                  padding: "16px 0",
                  background: "transparent",
                  border: "0",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "clamp(17px,1.35vw,22px)",
                  fontWeight: "500",
                  letterSpacing: "-.02em",
                  color: "#A8A5A3",
                  transition: "color .4s ease",
                }}
                className="hv4"
              >
                {t("Can I see progress while you build?")}
                <span
                  data-fqi="1"
                  style={{ position: "relative", flex: "none", width: "14px", height: "14px" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      top: "6px",
                      height: "2px",
                      background: "currentColor",
                    }}
                  ></span>
                  <span
                    data-fqv="1"
                    style={{
                      position: "absolute",
                      top: "0",
                      bottom: "0",
                      left: "6px",
                      width: "2px",
                      background: "currentColor",
                      transform: "scaleY(1)",
                      transition: "transform .5s cubic-bezier(.16,1,.3,1)",
                    }}
                  ></span>
                </span>
              </button>
              <div
                data-fqa="1"
                style={{
                  display: "grid",
                  gridTemplateRows: "0fr",
                  transition: "grid-template-rows .6s cubic-bezier(.16,1,.3,1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    style={{
                      margin: "0",
                      padding: "0 0 20px",
                      maxWidth: "560px",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#3A3836",
                      textWrap: "pretty",
                    }}
                  >
                    {t(
                      "Yes. You get a live preview link from early on and regular updates, so you always know where the project stands and can give feedback along the way.",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)",
            gap: "clamp(24px,5vw,80px)",
            padding: "clamp(40px,calc(var(--svh) * 7),80px) 0",
            borderTop: "1px solid #D4D1CF",
          }}
        >
          <span
            data-fin="1"
            style={{
              fontSize: "12px",
              fontWeight: "500",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "#6B6868",
            }}
          >
            {t("Pricing & support")}
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div data-fq="1" data-fin="1" data-open="0" style={{ display: "flex", flexDirection: "column" }}>
              <button
                data-fqb="1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                  width: "100%",
                  padding: "16px 0",
                  background: "transparent",
                  border: "0",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "clamp(17px,1.35vw,22px)",
                  fontWeight: "500",
                  letterSpacing: "-.02em",
                  color: "#A8A5A3",
                  transition: "color .4s ease",
                }}
                className="hv4"
              >
                {t("How much does a project cost?")}
                <span
                  data-fqi="1"
                  style={{ position: "relative", flex: "none", width: "14px", height: "14px" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      top: "6px",
                      height: "2px",
                      background: "currentColor",
                    }}
                  ></span>
                  <span
                    data-fqv="1"
                    style={{
                      position: "absolute",
                      top: "0",
                      bottom: "0",
                      left: "6px",
                      width: "2px",
                      background: "currentColor",
                      transform: "scaleY(1)",
                      transition: "transform .5s cubic-bezier(.16,1,.3,1)",
                    }}
                  ></span>
                </span>
              </button>
              <div
                data-fqa="1"
                style={{
                  display: "grid",
                  gridTemplateRows: "0fr",
                  transition: "grid-template-rows .6s cubic-bezier(.16,1,.3,1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    style={{
                      margin: "0",
                      padding: "0 0 20px",
                      maxWidth: "560px",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#3A3836",
                      textWrap: "pretty",
                    }}
                  >
                    {t(
                      "Every project is different, so we quote each one based on its scope. After the first call you receive a fixed price, with no surprises halfway through.",
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div data-fq="1" data-fin="1" data-open="0" style={{ display: "flex", flexDirection: "column" }}>
              <button
                data-fqb="1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                  width: "100%",
                  padding: "16px 0",
                  background: "transparent",
                  border: "0",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "clamp(17px,1.35vw,22px)",
                  fontWeight: "500",
                  letterSpacing: "-.02em",
                  color: "#A8A5A3",
                  transition: "color .4s ease",
                }}
                className="hv4"
              >
                {t("What happens after launch?")}
                <span
                  data-fqi="1"
                  style={{ position: "relative", flex: "none", width: "14px", height: "14px" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      top: "6px",
                      height: "2px",
                      background: "currentColor",
                    }}
                  ></span>
                  <span
                    data-fqv="1"
                    style={{
                      position: "absolute",
                      top: "0",
                      bottom: "0",
                      left: "6px",
                      width: "2px",
                      background: "currentColor",
                      transform: "scaleY(1)",
                      transition: "transform .5s cubic-bezier(.16,1,.3,1)",
                    }}
                  ></span>
                </span>
              </button>
              <div
                data-fqa="1"
                style={{
                  display: "grid",
                  gridTemplateRows: "0fr",
                  transition: "grid-template-rows .6s cubic-bezier(.16,1,.3,1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    style={{
                      margin: "0",
                      padding: "0 0 20px",
                      maxWidth: "560px",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#3A3836",
                      textWrap: "pretty",
                    }}
                  >
                    {t(
                      "We stay around. We can handle maintenance, updates and new features, or hand everything over to your team with the code and access you need.",
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div data-fq="1" data-fin="1" data-open="0" style={{ display: "flex", flexDirection: "column" }}>
              <button
                data-fqb="1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                  width: "100%",
                  padding: "16px 0",
                  background: "transparent",
                  border: "0",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "clamp(17px,1.35vw,22px)",
                  fontWeight: "500",
                  letterSpacing: "-.02em",
                  color: "#A8A5A3",
                  transition: "color .4s ease",
                }}
                className="hv4"
              >
                {t("Do I own the code and the design?")}
                <span
                  data-fqi="1"
                  style={{ position: "relative", flex: "none", width: "14px", height: "14px" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      top: "6px",
                      height: "2px",
                      background: "currentColor",
                    }}
                  ></span>
                  <span
                    data-fqv="1"
                    style={{
                      position: "absolute",
                      top: "0",
                      bottom: "0",
                      left: "6px",
                      width: "2px",
                      background: "currentColor",
                      transform: "scaleY(1)",
                      transition: "transform .5s cubic-bezier(.16,1,.3,1)",
                    }}
                  ></span>
                </span>
              </button>
              <div
                data-fqa="1"
                style={{
                  display: "grid",
                  gridTemplateRows: "0fr",
                  transition: "grid-template-rows .6s cubic-bezier(.16,1,.3,1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    style={{
                      margin: "0",
                      padding: "0 0 20px",
                      maxWidth: "560px",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#3A3836",
                      textWrap: "pretty",
                    }}
                  >
                    {t(
                      "Yes. Once the project is delivered, the code, the design files and the accounts are yours.",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-fin="1"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
            paddingTop: "clamp(32px,calc(var(--svh) * 6),64px)",
            borderTop: "1px solid #D4D1CF",
          }}
        >
          <span
            style={{
              fontSize: "clamp(17px,1.35vw,22px)",
              fontWeight: "500",
              letterSpacing: "-.02em",
              color: "#0A0A0A",
            }}
          >
            {t("Still have a question?")}
          </span>
          <a
            href="#contact"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              height: "44px",
              padding: "0 4px 0 18px",
              background: "#0A0A0A",
              color: "#F3F2F2",
              fontSize: "13px",
              fontWeight: "600",
              transition: "background .35s ease",
            }}
            className="hv3"
          >
            {t("Talk to us")}
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                background: "#F3F2F2",
                color: "#0A0A0A",
                fontSize: "14px",
              }}
            >
              {"→"}
            </span>
          </a>
        </div>
      </section>
      <section
        data-contact="1"
        id="contact"
        data-screen-label="Contact"
        style={{ position: "relative", zIndex: "6", background: "#F3F2F2" }}
      >
        <div
          data-ct-panel="1"
          style={{
            position: "relative",
            background: "#0A0A0A",
            color: "#F3F2F2",
            overflow: "hidden",
            clipPath: "inset(0 3vw 0 3vw round 24px)",
          }}
        >
          <div style={{ padding: "clamp(120px,calc(var(--svh) * 20),220px) clamp(20px,4vw,56px) 0" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "24px",
                paddingBottom: "clamp(28px,calc(var(--svh) * 5),48px)",
              }}
            >
              <span
                data-ctf="0"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "12px",
                  fontWeight: "500",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#9B9797",
                }}
              >
                <span
                  style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--acc)" }}
                ></span>
                {t("Available for new projects")}
              </span>
              <span
                data-ctf="1"
                style={{ fontSize: "12px", fontWeight: "500", letterSpacing: ".08em", color: "#9B9797" }}
              >
                {"(10)"}
              </span>
            </div>
            <h2
              style={{
                margin: "0",
                display: "flex",
                flexDirection: "column",
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "clamp(60px,10.5vw,200px)",
                letterSpacing: "-.065em",
                lineHeight: ".92",
                whiteSpace: "nowrap",
              }}
            >
              <span data-ctx="-1" style={{ display: "block", willChange: "transform" }}>
                <span data-ctm="0" style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                  <span style={{ display: "block", fontWeight: "300" }}>{t("Got an idea?")}</span>
                </span>
              </span>
              <span data-ctx="1" style={{ display: "block", willChange: "transform" }}>
                <span data-ctm="1" style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                  <span style={{ display: "block", fontWeight: "600" }}>
                    {t("Let's ")}
                    <span style={{ color: "var(--acc)" }}>{t("build")}</span>
                    {t(" it.")}
                  </span>
                </span>
              </span>
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
              gap: "clamp(32px,5vw,80px)",
              alignItems: "end",
              padding: "clamp(56px,calc(var(--svh) * 10),110px) clamp(20px,4vw,56px) 0",
            }}
          >
            <p
              data-ctf="0"
              style={{
                margin: "0",
                maxWidth: "460px",
                fontSize: "clamp(17px,1.4vw,21px)",
                lineHeight: "1.5",
                color: "#B5B2B0",
                textWrap: "pretty",
              }}
            >
              {t(
                "Tell us what you have in mind, even if it's just a rough idea. We reply within 24 hours with honest next steps.",
              )}
            </p>
            <button
              data-ct-open="1"
              data-ctf="1"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "24px",
                width: "100%",
                height: "clamp(84px,calc(var(--svh) * 12),112px)",
                padding: "0 10px 0 clamp(20px,2.4vw,36px)",
                background: "#F3F2F2",
                color: "#0A0A0A",
                border: "0",
                cursor: "pointer",
                overflow: "hidden",
                fontFamily: "var(--font-poppins), sans-serif",
                textAlign: "left",
              }}
            >
              <span
                data-ct-wipe="1"
                style={{
                  position: "absolute",
                  inset: "0",
                  background: "var(--acc)",
                  transform: "scaleX(0)",
                  transformOrigin: "0 50%",
                  transition: "transform .7s cubic-bezier(.16,1,.3,1)",
                }}
              ></span>
              <span
                style={{
                  position: "relative",
                  fontSize: "clamp(24px,2.6vw,40px)",
                  fontWeight: "600",
                  letterSpacing: "-.045em",
                  lineHeight: "1",
                }}
              >
                {t("Start a project")}
              </span>
              <span
                data-ct-arrow="1"
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "clamp(64px,calc(var(--svh) * 9),92px)",
                  height: "clamp(64px,calc(var(--svh) * 9),92px)",
                  background: "#0A0A0A",
                  color: "#F3F2F2",
                  fontSize: "24px",
                  overflow: "hidden",
                }}
              >
                <span
                  data-ct-ar="1"
                  style={{ display: "block", transition: "transform .6s cubic-bezier(.16,1,.3,1)" }}
                >
                  {"→"}
                </span>
              </span>
            </button>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: "24px",
              padding: "clamp(56px,calc(var(--svh) * 10),110px) clamp(20px,4vw,56px) 0",
            }}
          >
            <a
              data-ctf="0"
              data-ctl="1"
              href="mailto:loomit.devs@gmail.com"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                paddingTop: "16px",
                borderTop: "1px solid #2A2A2A",
                color: "#F3F2F2",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "500",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#9B9797",
                }}
              >
                {t("Email")}
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                  fontSize: "17px",
                  fontWeight: "500",
                }}
              >
                <span style={{ position: "relative" }}>
                  {"loomit.devs@gmail.com"}
                  <span
                    data-ctu="1"
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      bottom: "-4px",
                      height: "1px",
                      background: "var(--acc)",
                      transform: "scaleX(0)",
                      transformOrigin: "0 50%",
                      transition: "transform .5s cubic-bezier(.16,1,.3,1)",
                    }}
                  ></span>
                </span>
                <span
                  data-ctr="1"
                  style={{ color: "var(--acc)", transition: "transform .5s cubic-bezier(.16,1,.3,1)" }}
                >
                  {"↗"}
                </span>
              </span>
            </a>
            <a
              data-ctf="1"
              data-ctl="1"
              href="https://www.instagram.com/loomit.social/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                paddingTop: "16px",
                borderTop: "1px solid #2A2A2A",
                color: "#F3F2F2",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "500",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#9B9797",
                }}
              >
                {"Instagram"}
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                  fontSize: "17px",
                  fontWeight: "500",
                }}
              >
                <span style={{ position: "relative" }}>
                  {"@loomit.social"}
                  <span
                    data-ctu="1"
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      bottom: "-4px",
                      height: "1px",
                      background: "var(--acc)",
                      transform: "scaleX(0)",
                      transformOrigin: "0 50%",
                      transition: "transform .5s cubic-bezier(.16,1,.3,1)",
                    }}
                  ></span>
                </span>
                <span
                  data-ctr="1"
                  style={{ color: "var(--acc)", transition: "transform .5s cubic-bezier(.16,1,.3,1)" }}
                >
                  {"↗"}
                </span>
              </span>
            </a>
          </div>
          <div
            data-ct-wm="1"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              gap: ".06em",
              padding: "clamp(72px,calc(var(--svh) * 14),160px) clamp(20px,4vw,56px) 0",
              fontSize: "clamp(96px,23vw,440px)",
              lineHeight: ".78",
              letterSpacing: "-.06em",
              overflow: "hidden",
            }}
          >
            <svg
              data-ct-mark="1"
              viewBox="-3 -3 46 70"
              style={{
                display: "block",
                height: ".74em",
                width: "auto",
                flex: "none",
                overflow: "visible",
                marginBottom: ".02em",
              }}
              strokeLinejoin="round"
            >
              <polygon
                data-ct-pa="1"
                points="13,0 27,0 14,27 0,27"
                fill="var(--acc)"
                stroke="var(--acc)"
                strokeWidth="5"
              ></polygon>
              <polygon
                data-ct-pb="1"
                points="26,33 40,33 27,64 13,64"
                fill="#F3F2F2"
                stroke="#F3F2F2"
                strokeWidth="5"
              ></polygon>
            </svg>
            <span
              data-ct-word="1"
              style={{
                display: "inline-flex",
                alignItems: "baseline",
                gap: ".08em",
                willChange: "transform",
                cursor: "default",
              }}
            >
              <span style={{ display: "inline-flex" }}>
                <span
                  data-wl="1"
                  style={{ display: "inline-block", fontWeight: "600", willChange: "transform" }}
                >
                  {"l"}
                </span>
                <span
                  data-wl="1"
                  style={{ display: "inline-block", fontWeight: "600", willChange: "transform" }}
                >
                  {"o"}
                </span>
                <span
                  data-wl="1"
                  style={{ display: "inline-block", fontWeight: "600", willChange: "transform" }}
                >
                  {"o"}
                </span>
                <span
                  data-wl="1"
                  style={{ display: "inline-block", fontWeight: "600", willChange: "transform" }}
                >
                  {"m"}
                </span>
              </span>
              <span style={{ display: "inline-flex" }}>
                <span
                  data-wl="1"
                  style={{ display: "inline-block", fontWeight: "300", willChange: "transform" }}
                >
                  {"I"}
                </span>
                <span
                  data-wl="1"
                  style={{ display: "inline-block", fontWeight: "300", willChange: "transform" }}
                >
                  {"T"}
                </span>
              </span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px 32px",
              flexWrap: "wrap",
              padding: "24px clamp(20px,4vw,56px) 28px",
              borderTop: "1px solid #2A2A2A",
              fontSize: "13px",
              color: "#9B9797",
            }}
          >
            <span>{"© 2026 Loom IT"}</span>
            <span style={{ display: "flex", gap: "8px" }}>
              <span style={{ color: "#F3F2F2" }}>{"Santa Fe, AR"}</span>
              <span data-ftclock="1"></span>
            </span>
            <a
              href="#top"
              data-ct-top="1"
              style={{ display: "flex", alignItems: "center", gap: "8px", color: "#F3F2F2" }}
              className="hv5"
            >
              {t("Back to top ")}
              <span>{"↑"}</span>
            </a>
          </div>
        </div>
      </section>
      <div
        data-form="1"
        data-lenis-prevent="true"
        role="dialog"
        aria-modal="true"
        aria-label={t("Start a project")}
        style={{
          position: "fixed",
          inset: "0",
          zIndex: "200",
          display: "none",
          fontFamily: "var(--font-poppins), sans-serif",
        }}
      >
        <div
          data-fm-acc="1"
          style={{
            position: "absolute",
            inset: "0",
            background: "var(--acc)",
            clipPath: "inset(100% 0 0 0)",
          }}
        ></div>
        <div
          data-fm-bg="1"
          style={{ position: "absolute", inset: "0", background: "#0A0A0A", clipPath: "inset(100% 0 0 0)" }}
        ></div>
        <div
          data-fm-body="1"
          style={{
            position: "absolute",
            inset: "0",
            overflowY: "auto",
            color: "#F3F2F2",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "24px",
              padding: "24px clamp(20px,4vw,56px)",
            }}
          >
            <span data-fu="1" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg
                viewBox="-3 -3 46 70"
                style={{ display: "block", height: "24px", width: "16px", flex: "none" }}
                strokeLinejoin="round"
              >
                <polygon
                  points="13,0 27,0 14,27 0,27"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="5"
                ></polygon>
                <polygon
                  points="26,33 40,33 27,64 13,64"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="5"
                ></polygon>
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
            </span>
            <button
              data-fu="1"
              data-fm-close="1"
              aria-label={t("Close")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "transparent",
                border: "1px solid #5B5958",
                padding: "10px 16px",
                color: "#F3F2F2",
                cursor: "pointer",
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "13px",
                fontWeight: "500",
              }}
              className="hv6"
            >
              {t("Close ")}
              <span style={{ position: "relative", width: "12px", height: "12px", display: "block" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "5px",
                    height: "2px",
                    background: "var(--acc)",
                    transform: "rotate(45deg)",
                  }}
                ></span>
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "5px",
                    height: "2px",
                    background: "var(--acc)",
                    transform: "rotate(-45deg)",
                  }}
                ></span>
              </span>
            </button>
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              maxWidth: "1100px",
              boxSizing: "border-box",
              padding: "clamp(24px,calc(var(--svh) * 5),56px) clamp(20px,4vw,56px)",
            }}
          >
            <div
              data-fu="1"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "clamp(28px,calc(var(--svh) * 5),48px)",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#9B9797",
                }}
              >
                {t("Step ")}
                <span data-fm-n="1" style={{ color: "#F3F2F2" }}></span>
                {" / 03"}
              </span>
              <span
                style={{
                  flex: "1",
                  maxWidth: "240px",
                  height: "2px",
                  background: "#2A2A2A",
                  overflow: "hidden",
                }}
              >
                <span
                  data-fm-bar="1"
                  style={{
                    display: "block",
                    height: "100%",
                    background: "var(--acc)",
                    transform: "scaleX(.333)",
                    transformOrigin: "0 50%",
                    transition: "transform .8s cubic-bezier(.16,1,.3,1)",
                  }}
                ></span>
              </span>
            </div>
            <div style={{ display: "grid" }}>
              <div
                data-fstep="0"
                style={{
                  gridArea: "1 / 1",
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(24px,calc(var(--svh) * 4),40px)",
                }}
              >
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "clamp(36px,min(6vw,calc(var(--svh) * 9)),96px)",
                    letterSpacing: "-.06em",
                    lineHeight: ".95",
                  }}
                >
                  <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                    <span data-fm="1" style={{ display: "block", fontWeight: "300" }}>
                      {t("What are we")}
                    </span>
                  </span>
                  <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                    <span data-fm="1" style={{ display: "block", fontWeight: "600" }}>
                      {t("building?")}
                    </span>
                  </span>
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  <button
                    data-fu="1"
                    data-chip="type"
                    style={{
                      padding: "14px 22px",
                      background: "transparent",
                      border: "1px solid #3A3A3A",
                      color: "#F3F2F2",
                      cursor: "pointer",
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontSize: "16px",
                      fontWeight: "500",
                      transition: "background .35s ease,color .35s ease,border-color .35s ease",
                    }}
                    data-value="Website"
                  >
                    {t("Website")}
                  </button>
                  <button
                    data-fu="1"
                    data-chip="type"
                    style={{
                      padding: "14px 22px",
                      background: "transparent",
                      border: "1px solid #3A3A3A",
                      color: "#F3F2F2",
                      cursor: "pointer",
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontSize: "16px",
                      fontWeight: "500",
                      transition: "background .35s ease,color .35s ease,border-color .35s ease",
                    }}
                    data-value="Web app"
                  >
                    {t("Web app")}
                  </button>
                  <button
                    data-fu="1"
                    data-chip="type"
                    style={{
                      padding: "14px 22px",
                      background: "transparent",
                      border: "1px solid #3A3A3A",
                      color: "#F3F2F2",
                      cursor: "pointer",
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontSize: "16px",
                      fontWeight: "500",
                      transition: "background .35s ease,color .35s ease,border-color .35s ease",
                    }}
                    data-value="Mobile app"
                  >
                    {t("Mobile app")}
                  </button>
                  <button
                    data-fu="1"
                    data-chip="type"
                    style={{
                      padding: "14px 22px",
                      background: "transparent",
                      border: "1px solid #3A3A3A",
                      color: "#F3F2F2",
                      cursor: "pointer",
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontSize: "16px",
                      fontWeight: "500",
                      transition: "background .35s ease,color .35s ease,border-color .35s ease",
                    }}
                    data-value="Automation"
                  >
                    {t("Automation")}
                  </button>
                  <button
                    data-fu="1"
                    data-chip="type"
                    style={{
                      padding: "14px 22px",
                      background: "transparent",
                      border: "1px solid #3A3A3A",
                      color: "#F3F2F2",
                      cursor: "pointer",
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontSize: "16px",
                      fontWeight: "500",
                      transition: "background .35s ease,color .35s ease,border-color .35s ease",
                    }}
                    data-value="Software modernization"
                  >
                    {t("Software modernization")}
                  </button>
                  <button
                    data-fu="1"
                    data-chip="type"
                    style={{
                      padding: "14px 22px",
                      background: "transparent",
                      border: "1px solid #3A3A3A",
                      color: "#F3F2F2",
                      cursor: "pointer",
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontSize: "16px",
                      fontWeight: "500",
                      transition: "background .35s ease,color .35s ease,border-color .35s ease",
                    }}
                    data-value="Not sure yet"
                  >
                    {t("Not sure yet")}
                  </button>
                </div>
              </div>
              <div
                data-fstep="1"
                style={{
                  gridArea: "1 / 1",
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(24px,calc(var(--svh) * 4),40px)",
                  visibility: "hidden",
                }}
              >
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "clamp(36px,min(6vw,calc(var(--svh) * 9)),96px)",
                    letterSpacing: "-.06em",
                    lineHeight: ".95",
                  }}
                >
                  <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                    <span data-fm="1" style={{ display: "block", fontWeight: "300" }}>
                      {t("Budget and")}
                    </span>
                  </span>
                  <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                    <span data-fm="1" style={{ display: "block", fontWeight: "600" }}>
                      {t("timing.")}
                    </span>
                  </span>
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span
                    data-fu="1"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "#9B9797",
                    }}
                  >
                    {t("Budget (USD)")}
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    <button
                      data-fu="1"
                      data-chip="budget"
                      data-single="1"
                      style={{
                        padding: "14px 22px",
                        background: "transparent",
                        border: "1px solid #3A3A3A",
                        color: "#F3F2F2",
                        cursor: "pointer",
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "16px",
                        fontWeight: "500",
                        transition: "background .35s ease,color .35s ease,border-color .35s ease",
                      }}
                      data-value="Under 1k"
                    >
                      {t("Under 1k")}
                    </button>
                    <button
                      data-fu="1"
                      data-chip="budget"
                      data-single="1"
                      style={{
                        padding: "14px 22px",
                        background: "transparent",
                        border: "1px solid #3A3A3A",
                        color: "#F3F2F2",
                        cursor: "pointer",
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "16px",
                        fontWeight: "500",
                        transition: "background .35s ease,color .35s ease,border-color .35s ease",
                      }}
                      data-value="1k – 3k"
                    >
                      {t("1k – 3k")}
                    </button>
                    <button
                      data-fu="1"
                      data-chip="budget"
                      data-single="1"
                      style={{
                        padding: "14px 22px",
                        background: "transparent",
                        border: "1px solid #3A3A3A",
                        color: "#F3F2F2",
                        cursor: "pointer",
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "16px",
                        fontWeight: "500",
                        transition: "background .35s ease,color .35s ease,border-color .35s ease",
                      }}
                      data-value="3k – 8k"
                    >
                      {t("3k – 8k")}
                    </button>
                    <button
                      data-fu="1"
                      data-chip="budget"
                      data-single="1"
                      style={{
                        padding: "14px 22px",
                        background: "transparent",
                        border: "1px solid #3A3A3A",
                        color: "#F3F2F2",
                        cursor: "pointer",
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "16px",
                        fontWeight: "500",
                        transition: "background .35s ease,color .35s ease,border-color .35s ease",
                      }}
                      data-value="8k+"
                    >
                      {t("8k+")}
                    </button>
                    <button
                      data-fu="1"
                      data-chip="budget"
                      data-single="1"
                      style={{
                        padding: "14px 22px",
                        background: "transparent",
                        border: "1px solid #3A3A3A",
                        color: "#F3F2F2",
                        cursor: "pointer",
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "16px",
                        fontWeight: "500",
                        transition: "background .35s ease,color .35s ease,border-color .35s ease",
                      }}
                      data-value="Let's talk"
                    >
                      {t("Let's talk")}
                    </button>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span
                    data-fu="1"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "#9B9797",
                    }}
                  >
                    {t("Launch")}
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    <button
                      data-fu="1"
                      data-chip="when"
                      data-single="1"
                      style={{
                        padding: "14px 22px",
                        background: "transparent",
                        border: "1px solid #3A3A3A",
                        color: "#F3F2F2",
                        cursor: "pointer",
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "16px",
                        fontWeight: "500",
                        transition: "background .35s ease,color .35s ease,border-color .35s ease",
                      }}
                      data-value="As soon as possible"
                    >
                      {t("As soon as possible")}
                    </button>
                    <button
                      data-fu="1"
                      data-chip="when"
                      data-single="1"
                      style={{
                        padding: "14px 22px",
                        background: "transparent",
                        border: "1px solid #3A3A3A",
                        color: "#F3F2F2",
                        cursor: "pointer",
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "16px",
                        fontWeight: "500",
                        transition: "background .35s ease,color .35s ease,border-color .35s ease",
                      }}
                      data-value="1 – 3 months"
                    >
                      {t("1 – 3 months")}
                    </button>
                    <button
                      data-fu="1"
                      data-chip="when"
                      data-single="1"
                      style={{
                        padding: "14px 22px",
                        background: "transparent",
                        border: "1px solid #3A3A3A",
                        color: "#F3F2F2",
                        cursor: "pointer",
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "16px",
                        fontWeight: "500",
                        transition: "background .35s ease,color .35s ease,border-color .35s ease",
                      }}
                      data-value="Flexible"
                    >
                      {t("Flexible")}
                    </button>
                  </div>
                </div>
              </div>
              <div
                data-fstep="2"
                style={{
                  gridArea: "1 / 1",
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(24px,calc(var(--svh) * 4),40px)",
                  visibility: "hidden",
                }}
              >
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "clamp(36px,min(6vw,calc(var(--svh) * 9)),96px)",
                    letterSpacing: "-.06em",
                    lineHeight: ".95",
                  }}
                >
                  <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                    <span data-fm="1" style={{ display: "block", fontWeight: "300" }}>
                      {t("Tell us")}
                    </span>
                  </span>
                  <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                    <span data-fm="1" style={{ display: "block", fontWeight: "600" }}>
                      {t("about it.")}
                    </span>
                  </span>
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                    gap: "24px",
                  }}
                >
                  <label data-fu="1" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        color: "#9B9797",
                      }}
                    >
                      {t("Name")}
                    </span>
                    <input
                      data-fin-name="1"
                      type="text"
                      autoComplete="name"
                      placeholder={t("Your name")}
                      style={{
                        padding: "12px 0",
                        background: "transparent",
                        border: "0",
                        borderBottom: "1px solid #3A3A3A",
                        color: "#F3F2F2",
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "20px",
                        outline: "none",
                        transition: "border-color .35s ease",
                      }}
                      className="fc7"
                    />
                  </label>
                  <label data-fu="1" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        color: "#9B9797",
                      }}
                    >
                      {t("Email")}
                    </span>
                    <input
                      data-fin-mail="1"
                      type="email"
                      autoComplete="email"
                      placeholder={t("you@company.com")}
                      style={{
                        padding: "12px 0",
                        background: "transparent",
                        border: "0",
                        borderBottom: "1px solid #3A3A3A",
                        color: "#F3F2F2",
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "20px",
                        outline: "none",
                        transition: "border-color .35s ease",
                      }}
                      className="fc7"
                    />
                  </label>
                </div>
                <label data-fu="1" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "#9B9797",
                    }}
                  >
                    {t("Your idea")}
                  </span>
                  <textarea
                    data-fin-msg="1"
                    rows={3}
                    placeholder={t("A few lines are enough.")}
                    style={{
                      padding: "12px 0",
                      background: "transparent",
                      border: "0",
                      borderBottom: "1px solid #3A3A3A",
                      color: "#F3F2F2",
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontSize: "20px",
                      lineHeight: "1.4",
                      outline: "none",
                      resize: "none",
                      transition: "border-color .35s ease",
                    }}
                    className="fc7"
                  ></textarea>
                </label>
                <span
                  data-fm-err="1"
                  role="alert"
                  style={{ display: "none", fontSize: "13px", lineHeight: "1.4", color: "#FFB59A" }}
                ></span>
              </div>
              <div
                data-fstep="3"
                style={{
                  gridArea: "1 / 1",
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(24px,calc(var(--svh) * 4),40px)",
                  visibility: "hidden",
                }}
              >
                <svg
                  data-fm-done="1"
                  viewBox="-3 -3 46 70"
                  style={{
                    display: "block",
                    height: "clamp(72px,calc(var(--svh) * 12),120px)",
                    width: "auto",
                    overflow: "visible",
                  }}
                  strokeLinejoin="round"
                >
                  <polygon
                    data-fd-a="1"
                    points="13,0 27,0 14,27 0,27"
                    fill="var(--acc)"
                    stroke="var(--acc)"
                    strokeWidth="5"
                  ></polygon>
                  <polygon
                    data-fd-b="1"
                    points="26,33 40,33 27,64 13,64"
                    fill="#F3F2F2"
                    stroke="#F3F2F2"
                    strokeWidth="5"
                  ></polygon>
                </svg>
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "clamp(36px,min(6vw,calc(var(--svh) * 9)),96px)",
                    letterSpacing: "-.06em",
                    lineHeight: ".95",
                  }}
                >
                  <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                    <span data-fm="1" style={{ display: "block", fontWeight: "300" }}>
                      {t("Got it.")}
                    </span>
                  </span>
                  <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                    <span data-fm="1" style={{ display: "block", fontWeight: "600" }}>
                      {t("Talk soon")}
                      <span style={{ color: "var(--acc)" }}>{"."}</span>
                    </span>
                  </span>
                </h3>
                <p
                  data-fu="1"
                  style={{
                    margin: "0",
                    maxWidth: "460px",
                    fontSize: "18px",
                    lineHeight: "1.5",
                    color: "#B5B2B0",
                  }}
                >
                  {t("Your message is on its way. We'll reply within 24 hours.")}
                </p>
              </div>
            </div>
            <div
              data-fm-nav="1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                marginTop: "clamp(36px,calc(var(--svh) * 7),64px)",
              }}
            >
              <button
                data-fu="1"
                data-fm-back="1"
                style={{
                  background: "transparent",
                  border: "0",
                  padding: "12px 0",
                  color: "#9B9797",
                  cursor: "pointer",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "14px",
                  fontWeight: "500",
                  visibility: "hidden",
                }}
                className="hv8"
              >
                {t("← Back")}
              </button>
              <button
                data-fu="1"
                data-fm-next="1"
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  height: "52px",
                  padding: "0 5px 0 22px",
                  background: "#F3F2F2",
                  color: "#0A0A0A",
                  border: "0",
                  cursor: "pointer",
                  overflow: "hidden",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "15px",
                  fontWeight: "600",
                  transition: "opacity .35s ease",
                  opacity: ".45",
                }}
              >
                <span
                  data-fm-wipe="1"
                  style={{
                    position: "absolute",
                    inset: "0",
                    background: "var(--acc)",
                    transform: "scaleX(0)",
                    transformOrigin: "0 50%",
                    transition: "transform .6s cubic-bezier(.16,1,.3,1)",
                  }}
                ></span>
                <span data-fm-label="1" style={{ position: "relative" }}></span>
                <span
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "42px",
                    height: "42px",
                    background: "#0A0A0A",
                    color: "#F3F2F2",
                  }}
                >
                  {"→"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        data-pre="1"
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: "0",
          zIndex: "400",
          color: "#F3F2F2",
          fontFamily: "var(--font-poppins), sans-serif",
          pointerEvents: "auto",
        }}
      >
        <div
          data-pre-top="1"
          style={{
            position: "absolute",
            inset: "0",
            background: "#0A0A0A",
            clipPath: "polygon(0 0,100% 0,100% 47.3%,0 53.3%)",
            willChange: "transform",
          }}
        ></div>
        <div
          data-pre-bot="1"
          style={{
            position: "absolute",
            inset: "0",
            background: "#0A0A0A",
            clipPath: "polygon(0 52.7%,100% 46.7%,100% 100%,0 100%)",
            willChange: "transform",
          }}
        ></div>
        <div data-pre-ui="1" style={{ position: "absolute", inset: "0" }}>
          <div
            style={{
              position: "absolute",
              left: "clamp(20px,4vw,56px)",
              right: "clamp(20px,4vw,56px)",
              top: "clamp(20px,calc(var(--svh) * 4),32px)",
              display: "flex",
              justifyContent: "space-between",
              gap: "24px",
              fontSize: "12px",
              fontWeight: "500",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "#8A8786",
            }}
          >
            <span data-pre-m="1" style={{ opacity: "0" }}>
              {t("Digital studio")}
            </span>
            <span data-pre-m="1" style={{ opacity: "0" }}>
              {"Santa Fe, AR"}
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <svg
              viewBox="-3 -3 46 70"
              style={{ display: "block", height: "52px", width: "34px", flex: "none", overflow: "visible" }}
              strokeLinejoin="round"
            >
              <polygon
                data-pre-a="1"
                points="13,0 27,0 14,27 0,27"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="5"
                style={{ opacity: "0" }}
              ></polygon>
              <polygon
                data-pre-b="1"
                points="26,33 40,33 27,64 13,64"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="5"
                style={{ opacity: "0" }}
              ></polygon>
            </svg>
            <span style={{ display: "block", overflow: "hidden", padding: ".1em 0" }}>
              <span
                data-pre-w="1"
                style={{
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: ".1em",
                  fontSize: "42px",
                  letterSpacing: "-.03em",
                  lineHeight: "1",
                  transform: "translateX(-110%)",
                }}
              >
                <span style={{ fontWeight: "600" }}>{"loom"}</span>
                <span style={{ fontWeight: "300" }}>{"IT"}</span>
              </span>
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              left: "clamp(20px,4vw,56px)",
              right: "clamp(20px,4vw,56px)",
              bottom: "clamp(20px,calc(var(--svh) * 4),40px)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px",
            }}
          >
            <span style={{ display: "block", overflow: "hidden" }}>
              <span
                data-pre-n="1"
                style={{
                  display: "block",
                  fontSize: "clamp(64px,10vw,168px)",
                  fontWeight: "300",
                  letterSpacing: "-.06em",
                  lineHeight: ".9",
                  paddingBottom: ".04em",
                  fontVariantNumeric: "tabular-nums",
                  transform: "translateY(105%)",
                }}
              ></span>
            </span>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "10px",
                paddingBottom: ".6em",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "12px",
                  fontWeight: "500",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#8A8786",
                }}
              >
                <span data-pre-m="1" style={{ opacity: "0" }}>
                  {t("We build")}
                </span>
                <span
                  style={{
                    display: "block",
                    overflow: "hidden",
                    height: "1.4em",
                    minWidth: "9em",
                    textAlign: "right",
                  }}
                >
                  <span
                    data-pre-word="1"
                    style={{ display: "block", color: "var(--acc)", lineHeight: "1.4em" }}
                  ></span>
                </span>
              </span>
              <span
                style={{
                  display: "block",
                  width: "clamp(140px,18vw,260px)",
                  height: "1px",
                  background: "#262626",
                }}
              >
                <span
                  data-pre-bar="1"
                  style={{
                    display: "block",
                    height: "100%",
                    background: "var(--acc)",
                    transform: "scaleX(0)",
                    transformOrigin: "0 50%",
                  }}
                ></span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
