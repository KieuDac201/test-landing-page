module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial-red":
          "radial-gradient(circle, rgba(238,174,174,0.5) 0%, rgba(255,255,255,0) 50%)",
        "gradient-radial-blue":
          "radial-gradient(circle, rgba(36,199,246,0.3) 0%, rgba(255,255,255,0) 50%)",
      },
      width: {
        "120%": "120%",
        "150%": "150%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
