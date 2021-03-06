module.exports = {
	content: [
		`components/**/*.{vue,js}`,
		`layouts/**/*.vue`,
		`pages/**/*.vue`,
		`plugins/**/*.{js,ts}`,
		`nuxt.config.{js,ts}`,
        `static/**/*.{js,ts}`
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Fira Sans", "sans-serif"],
				fira: ["Fira Sans", "sans-serif"],
				ibm: ["IBM Plex Mono", "monospace"],
				slab: ["Roboto Slab", "serif"],
				marker: ["Permanent Marker", "cursive"],
			},
			colors: {
				"picton-blue": {
					50: "#f2fbff",
					100: "#e6f8ff",
					200: "#bfedff",
					300: "#99e2ff",
					400: "#4dcdff",
					500: "#00b7ff",
					600: "#00a5e6",
					700: "#0089bf",
					800: "#006e99",
					900: "#005a7d",
				},
				"violet-red": {
					50: "#fff5f9",
					100: "#ffebf2",
					200: "#ffcde0",
					300: "#ffafcd",
					400: "#ff74a7",
					500: "#ff3881",
					600: "#e63274",
					700: "#bf2a61",
					800: "#99224d",
					900: "#7d1b3f",
				},
				sun: {
					50: "#fffbf3",
					100: "#fff7e8",
					200: "#ffebc5",
					300: "#ffdfa3",
					400: "#ffc75d",
					500: "#ffaf18",
					600: "#e69e16",
					700: "#bf8312",
					800: "#99690e",
					900: "#7d560c",
				},
				"electric-violet": {
					50: "#f9f4ff",
					100: "#f3e9ff",
					200: "#e1c7ff",
					300: "#cfa5ff",
					400: "#ab62ff",
					500: "#871EFF",
					600: "#7a1be6",
					700: "#6517bf",
					800: "#511299",
					900: "#420f7d",
				},
				aquamarine: {
					50: "#f4fffd",
					100: "#e9fffb",
					200: "#c7fff4",
					300: "#a5ffee",
					400: "#62ffe1",
					500: "#1EFFD4",
					600: "#1be6bf",
					700: "#17bf9f",
					800: "#12997f",
					900: "#0f7d68",
				},
				daisy: {
					50: "#fefcf6",
					100: "#fdfaec",
					200: "#faf2d0",
					300: "#f7e9b4",
					400: "#f1d97c",
					500: "#EBC944",
					600: "#d4b53d",
					700: "#b09733",
					800: "#8d7929",
					900: "#736221",
				},
				ruby: {
					50: "#faf4f3",
					100: "#f5e9e8",
					200: "#e6c9c5",
					300: "#d7a8a1",
					400: "#b8665b",
					500: "#9A2515",
					600: "#8b2113",
					700: "#741c10",
					800: "#5c160d",
					900: "#4b120a",
				},
				alice: {
					50: "#f3f8fa",
					100: "#e7f2f4",
					200: "#c3dde5",
					300: "#9fc9d5",
					400: "#58a1b5",
					500: "#107895",
					600: "#0e6c86",
					700: "#0c5a70",
					800: "#0a4859",
					900: "#083b49",
				},
				coral: {
					50: "#fef8f4",
					100: "#fef0e9",
					200: "#fcdbc8",
					300: "#fac5a6",
					400: "#f69964",
					500: "#F26D21",
					600: "#da621e",
					700: "#b65219",
					800: "#914114",
					900: "#773510",
				},
				kelly: {
					50: "#f9faf7",
					100: "#f3f4ee",
					200: "#e0e4d5",
					300: "#cdd4bb",
					400: "#a8b389",
					500: "#829356",
					600: "#75844d",
					700: "#626e41",
					800: "#4e5834",
					900: "#40482a",
				},
				slate: {
					50: "#f5f6f6",
					100: "#eaeded",
					200: "#ccd3d3",
					300: "#adb9b9",
					400: "#6f8484",
					500: "#314F4F",
					600: "#2c4747",
					700: "#253b3b",
					800: "#1d2f2f",
					900: "#182727",
				},
			},
			animation: {
				blob: "blob 7s infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -50px) scale(1.1)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.9)",
					},
					"100%": {
						transform: "tranlate(0px, 0px) scale(1)",
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
}
