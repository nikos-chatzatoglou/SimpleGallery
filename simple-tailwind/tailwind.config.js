/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],

	theme: {
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
		extend: {
			colors: {
				"persian-plum": "#7B2D26",
				"dutch-white": "#D7C9AA",
				"midnight-green": "#003844",
				"cultured-white": "#F0F3F5",
			},
			fontFamily: {
				metalMania: ["Metal Mania", "cursive"],
				monoton: ["Monoton", "cursive"],
				raleway: ["Raleway", "sans - serif"],
				ralewayDots: ["Raleway Dots", "cursive"],
				sedgwick: ["Sedgwick Ave Display", "cursive"],
				code: ["Source Code Pro", "monospace"],
			},
		},
	},
	plugins: [],
};
