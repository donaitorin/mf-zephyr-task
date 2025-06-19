export const mfConfig = {
	name: 'shell',
	remotes: {
		header: 'header@http://localhost:8082/mf-manifest.json',
		content: 'content@http://localhost:8081/mf-manifest.json',
	},
	shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
	manifest: true,
};
