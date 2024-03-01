import { neutral } from "tailwindcss/colors";

export const content = [
	"./pages/**/*.{js,ts,jsx,tsx}",
	"./components/**/*.{js,ts,jsx,tsx}",
	"node_modules/flowbite-react/lib/esm/**/*.js",
];
export const darkMode = "class";
export const theme = {
	extend: {
		colors: {
			// Light colors
			"primary-light": "#F7F8FC",
			"secondary-light": "#FFFFFF",
			"ternary-light": "#f6f7f8",

			// Dark colors
			"primary-dark": "#0D2438",
			"secondary-dark": "#102D44",
			"ternary-dark": "#1E3851",

			// Extended v3 color
			gray: neutral,
		},
		container: {
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "5rem",
				xl: "6rem",
				"2xl": "8rem",
			},
		},
	},
};
export const plugins = [require("flowbite/plugin"), require("@tailwindcss/forms")];
