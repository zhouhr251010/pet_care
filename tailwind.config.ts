import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17211f",
        muted: "#63706c",
        line: "#dce5df",
        paper: "#fbfaf4",
        mint: "#b7dfcf",
        green: "#2f725d",
        coral: "#e86f54",
        sky: "#d8edf4",
        yellow: "#f4ca64"
      },
      boxShadow: {
        soft: "0 18px 42px rgba(33, 55, 48, .13)"
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Microsoft YaHei",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
