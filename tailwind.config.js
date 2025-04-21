module.exports = {
  theme: {
    //
    fontFamily: {
      // Restaurant
      // header: ["Jost", "sans-serif"],
      sans: ["var(--font-sans)", "sans-serif"],

      // Modern
      header: ["var(--font-header)", "sans-serif"],
      // sans: ["Varta", "sans-serif"],

      // Fancy
      // header: ["Gistesy", "sans-serif"],
      // sans: ["Roxborough", "sans-serif"],

      serif: ["Quicksand", "serif"],
    },
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        marqueeReverse: "marqueeReverse 25s linear infinite",
        marquee2Reverse: "marquee2Reverse 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee2Reverse: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      colors: {
        primary: "var(--color-primary)",
        primaryDarkMode: "var(--color-primary-dark-mode)",
        secondary: "var(--color-secondary)",
        secondaryDarkMode: "var(--color-secondary-dark-mode)",
        light: "#f7f4f0",
        lightMuted: "#f7f4f0",
        dark: "#2c2c2c",
        darkMuted: "#373737",
        background: "var(--color-background)",
        backgroundDarkMode: "#110d17",
        backgroundAccent: "var(--color-background-accent)",
        backgroundAccentDarkMode: "#343633",
        backgroundHover: "#424242",
        border: "#c1c1c1",
        borderDarkMode: "#767975",
      },
    },
  },
};
