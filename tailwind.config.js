/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ["'Roboto Mono'", "monospace"], // Thêm font vào Tailwind
      },
      backgroundImage: {
        banner: "url('/src/assets/images/Banner.jpeg')",
      },
    },
  },
  plugins: [],
};
