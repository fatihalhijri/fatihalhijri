  import type { Config } from "tailwindcss";

  const config: Config = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          logo: ["Oleo Script", "cursive"],
          primary: ["Poppins", "sans-serif"],
        },
        colors: {
          primary: "#14b8a6",
          secoundary: '#64748b',
          dark: "#191D34",
          darkTua:'#2A3052',
          PutihTua:'#E5E7EB',

        },

      },
    },
    plugins: [],
    darkMode: "class"
  };
  export default config;
