/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "500px",
      },
      colors: {
        "brand-1": "#1C2134",
        "brand-2": "#377DFF",
      },
      fontFamily: {
        sans: ["Pretendard"],
      },
      fontSize: {
        "heading/h1": ["40px", { lineHeight: "140%", fontWeight: "700" }],
        "heading/h6": ["16px", { lineHeight: "140%", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};
