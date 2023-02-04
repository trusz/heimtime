import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server:{
		port: 62866,
		proxy:{
			'/api': {
				target: 'https://heimat.sprinteins.com',
				changeOrigin: true,
				secure: false,      
				ws: false,
			}
		},
	},
};
// 
export default config;
