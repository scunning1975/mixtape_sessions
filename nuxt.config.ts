import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	buildModules: ["@nuxtjs/tailwindcss"],
	meta: {
		link: [
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap",
			},
		],
	},
})
