"use client";

import { useEffect, useState } from "react";

type TextSize = "100" | "112" | "125";

const sizes: { value: TextSize; label: string; description: string }[] = [
  { value: "100", label: "A−", description: "Standard text" },
  { value: "112", label: "A", description: "Comfort text" },
  { value: "125", label: "A+", description: "Large text" },
];

export function ReadabilityControls() {
  const [open, setOpen] = useState(false);
  const [textSize, setTextSize] = useState<TextSize>("112");
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const savedSize = localStorage.getItem("jj-text-size") as TextSize | null;
    const savedContrast = localStorage.getItem("jj-high-contrast") === "true";
    const nextSize = savedSize && ["100", "112", "125"].includes(savedSize) ? savedSize : "112";

    setTextSize(nextSize);
    setHighContrast(savedContrast);
    document.documentElement.dataset.textSize = nextSize;
    document.documentElement.dataset.contrast = savedContrast ? "high" : "standard";
  }, []);

  const changeTextSize = (value: TextSize) => {
    setTextSize(value);
    document.documentElement.dataset.textSize = value;
    localStorage.setItem("jj-text-size", value);
  };

  const toggleContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    document.documentElement.dataset.contrast = next ? "high" : "standard";
    localStorage.setItem("jj-high-contrast", String(next));
  };

  return (
    <div className="readability-controls">
      <button
        type="button"
        className="readability-trigger"
        aria-expanded={open}
        aria-controls="readability-panel"
        aria-label="Readability settings"
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">Aa</span>
      </button>

      {open && (
        <div id="readability-panel" className="readability-panel">
          <div className="readability-heading">
            <strong>Readability</strong>
            <span>Saved on this device</span>
          </div>

          <div className="text-size-options" role="group" aria-label="Text size">
            {sizes.map((size) => (
              <button
                type="button"
                key={size.value}
                className={textSize === size.value ? "is-active" : ""}
                aria-pressed={textSize === size.value}
                aria-label={size.description}
                onClick={() => changeTextSize(size.value)}
              >
                {size.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="contrast-toggle"
            aria-pressed={highContrast}
            onClick={toggleContrast}
          >
            <span>High contrast</span>
            <i aria-hidden="true" className={highContrast ? "is-on" : ""} />
          </button>
        </div>
      )}
    </div>
  );
}
