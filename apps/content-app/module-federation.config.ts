export const mfConfig = {
	name: 'content',
	exposes: {
		'./Content': './src/Content.tsx',
	},
	shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
	manifest: true,
};
