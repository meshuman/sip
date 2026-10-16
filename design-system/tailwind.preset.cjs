// Sīpa preset for Tailwind CSS v3. Load tokens.css first; every value points at its CSS variable,
// so light and dark switch automatically: no dark: variants needed for brand colours. Generated from tokens.json.
// tailwind.config.js:  module.exports = { presets: [require("./design-system/tailwind.preset.cjs")], content: [...] }
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "lokta": "var(--lokta)",
        "lokta-deep": "var(--lokta-deep)",
        "paper": "var(--paper)",
        "line": "var(--line)",
        "ink": "var(--ink)",
        "stone": "var(--stone)",
        "malachite": "var(--malachite)",
        "malachite-wash": "var(--malachite-wash)",
        "on-malachite": "var(--on-malachite)",
        "gilt": "var(--gilt)",
        "gilt-ink": "var(--gilt-ink)",
        "lapis": "var(--lapis)",
        "sindur": "var(--sindur)"
      },
      "spacing": {
        "sp-1": "var(--space-1)",
        "sp-2": "var(--space-2)",
        "sp-3": "var(--space-3)",
        "sp-4": "var(--space-4)",
        "sp-5": "var(--space-5)",
        "sp-6": "var(--space-6)",
        "sp-7": "var(--space-7)"
      },
      "borderRadius": {
        "none": "var(--radius-0)",
        "sp": "var(--radius-1)",
        "halo": "var(--radius-halo)"
      },
      "fontFamily": {
        "display": [
          "Hanken Grotesk",
          "Mukta",
          "Noto Sans Devanagari",
          "Segoe UI",
          "system-ui",
          "sans-serif"
        ],
        "text": [
          "Hanken Grotesk",
          "Mukta",
          "Noto Sans Devanagari",
          "Segoe UI",
          "system-ui",
          "sans-serif"
        ],
        "registry": [
          "Hanken Grotesk",
          "Mukta",
          "Noto Sans Devanagari",
          "Segoe UI",
          "system-ui",
          "sans-serif"
        ]
      },
      "fontSize": {
        "display-xl": [
          "72px",
          {
            "lineHeight": "76px",
            "letterSpacing": "-0.01em",
            "fontWeight": "400"
          }
        ],
        "display-l": [
          "48px",
          {
            "lineHeight": "54px",
            "fontWeight": "400"
          }
        ],
        "display-m": [
          "30px",
          {
            "lineHeight": "38px",
            "fontWeight": "400"
          }
        ],
        "lead": [
          "21px",
          {
            "lineHeight": "33px",
            "fontWeight": "300"
          }
        ],
        "body": [
          "17px",
          {
            "lineHeight": "28px",
            "fontWeight": "400"
          }
        ],
        "body-s": [
          "15px",
          {
            "lineHeight": "24px",
            "fontWeight": "400"
          }
        ],
        "label": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.12em",
            "fontWeight": "600"
          }
        ],
        "registry": [
          "Hanken Grotesk",
          "Mukta",
          "Noto Sans Devanagari",
          "Segoe UI",
          "system-ui",
          "sans-serif"
        ],
        "registry-s": [
          "11px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.06em",
            "fontWeight": "400"
          }
        ]
      },
      "boxShadow": {
        "lift": "var(--shadow-lift)"
      }
    }
  }
};
