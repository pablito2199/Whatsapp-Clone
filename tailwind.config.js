module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class",
	mode: "jit",
	purge: {
		content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	},
	plugins: [],
	theme: {
		extend: {
			colors: {
				'app-background': '#111b21',
				'intro-background': '#222e35',
				'message-dark': '#008069',
				'message-light': '#c0ffb0',
				'unread-dark': '#00a884',
				'unread-light': '#25d366'
			},
			scrollbar: {
				width: '6px',
			}
		}
	},
	variants: {
		extend: {},
	},
};
