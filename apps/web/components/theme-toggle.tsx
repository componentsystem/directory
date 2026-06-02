"use client";

import { useSyncExternalStore } from "react";

const themeChangeEvent = "themechange";
type ThemeName = "dark" | "light";

const DEFAULT_THEME: ThemeName = "dark";

function getStoredTheme(): ThemeName {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  const stored = localStorage.getItem("theme");
  return stored === "light" ? "light" : "dark";
}

function getDarkSnapshot() {
  if (typeof window === "undefined") {
    return DEFAULT_THEME === "dark";
  }

  return getStoredTheme() === "dark";
}

function subscribeToTheme(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const handleChange = () => {
    document.documentElement.classList.toggle("dark", getDarkSnapshot());
    callback();
  };

  window.addEventListener("storage", handleChange);
  window.addEventListener(themeChangeEvent, handleChange);
  media.addEventListener("change", handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(themeChangeEvent, handleChange);
    media.removeEventListener("change", handleChange);
  };
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribeToTheme,
    getDarkSnapshot,
    () => false
  );

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new Event(themeChangeEvent));
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-button-secondary flex h-9 w-9 items-center justify-center rounded-full"
    >
      {dark ? (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
