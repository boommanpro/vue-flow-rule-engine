/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    // daisyUI 配置（可选）
    daisyui: {
        themes: true, // 启用所有主题
        darkTheme: "dark", // 黑暗模式主题
    },
}
