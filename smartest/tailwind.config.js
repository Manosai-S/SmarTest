module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          spacing: {
              '4': '1rem', // default is 1rem
          },
          maxWidth: {
              'md': '28rem', // default is 28rem
          },
          borderRadius: {
              'xl': '0.75rem', // default is 0.75rem
          },
          boxShadow: {
              'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }
      },
  },
  plugins: [],
};
