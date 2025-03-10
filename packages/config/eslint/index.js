module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "warn",
    "react/jsx-no-undef": "error",
  },
}; 