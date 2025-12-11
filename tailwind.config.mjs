/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				
				yeti: {
					dark: '#111827',   
					card: '#1F2937',  
					teal: '#22d3ee',   
					yellow: '#facc15',
					red: '#ef4444',   
				}
			}
		},
	},
	plugins: [],
}