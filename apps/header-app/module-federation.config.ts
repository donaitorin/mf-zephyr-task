export const mfConfig = {
	name: 'header',
	exposes: {
		'./Header': './src/Header.tsx',
	},
	shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
	manifest: true,
};
