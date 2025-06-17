// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		preview: {
			allowedHosts: [
				'harmoney-of-taste-landing-wevnxj-900d6f-5-129-207-103.traefik.me',
			],
		},
	},

	integrations: [vue()],
})
