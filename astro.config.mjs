import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://reymyriam.github.io',
  	base: '/LabVeilTech_AstroBlog',
	integrations: [mdx(), sitemap()],
});
