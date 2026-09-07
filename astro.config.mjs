// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Instrument Routine',
			description: 'A focused daily practice companion for musicians.',
			locales: {
				root: { label: 'English', lang: 'en' },
				fr: { label: 'Français', lang: 'fr' },
			},
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'meta',
					attrs: { name: 'theme-color', content: '#8b5cf6' },
				},
			],
			sidebar: [
				{
					label: 'Legal',
					translations: { fr: 'Informations légales' },
					items: [
						{
							label: 'Privacy Policy',
							translations: { fr: 'Politique de confidentialité' },
							slug: 'privacy-policy',
						},
						{
							label: 'Terms of Use',
							translations: { fr: "Conditions d’utilisation" },
							slug: 'terms-of-use',
						},
					],
				},
			],
		}),
	],
});
