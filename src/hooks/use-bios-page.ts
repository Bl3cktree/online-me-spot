import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const BIOS_EMAIL = "contact@bakkali.io";

export const isTypingTarget = (el: EventTarget | null) => {
  if (!(el instanceof HTMLElement)) return false;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
};

export const useBiosBackground = () => {
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.backgroundColor;
    html.style.backgroundColor = "#1000C8";
    return () => {
      html.style.backgroundColor = prev;
    };
  }, []);
};

export const useBiosSubpageKeys = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey || isTypingTarget(e.target)) return;
      if (e.key === "Escape") {
        e.preventDefault();
        navigate("/");
      } else if (e.key === "F10") {
        e.preventDefault();
        window.location.href = `mailto:${BIOS_EMAIL}`;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);
};
