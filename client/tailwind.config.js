export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        border: '#ccc', // Custom border color
      },
      backgroundColor: {
        background: '#f5f5f5', // Custom background color for "bg-background"
      },
    },
  },
  plugins: [],
};
