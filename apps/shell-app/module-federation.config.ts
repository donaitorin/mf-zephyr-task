import { contentUrl, headerUrl } from '../../rspack.base';

export const mfConfig = {
	name: 'shell',
	remotes: {
		header: `header@${headerUrl}/mf-manifest.json`,
		content: `content@${contentUrl}/mf-manifest.json`,
	},
	shared: {
		react: { singleton: true },
		'react-dom': { singleton: true },
	},
	manifest: true,
};
