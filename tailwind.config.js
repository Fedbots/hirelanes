module.exports = {
	purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true
		},
		fontFamily: {
			serif: ['Arvo', 'serif']
		},
		extend: {
			colors: {
				'primary-400': '#9588F6', // Lighter than primary
				'primary-500': '#7362F3', // Primary
				'primary-600': '#4D37F0', // Darker than primary
				'primary-700': '#2B12E8',
				'primary-800': '#230EBD',
				'primary-900': '#1B0B92' // Darkest shade
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
