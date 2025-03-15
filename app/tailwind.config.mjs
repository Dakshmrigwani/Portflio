export default {
    content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"], // Adjust paths as needed
    theme: {
      extend: {
        animation: {
          marquee: "marquee var(--duration, 20s) linear infinite",
          "marquee-vertical": "marquee-vertical var(--duration, 20s) linear infinite",
        },
        keyframes: {
          marquee: {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(calc(-100% - var(--gap, 1rem)))" },
          },
          "marquee-vertical": {
            from: { transform: "translateY(0)" },
            to: { transform: "translateY(calc(-100% - var(--gap, 1rem)))" },
          },
        },
      },
    },
    plugins: [],
  };
  