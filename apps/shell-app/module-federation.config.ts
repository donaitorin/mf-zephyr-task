import { contentUrl, headerUrl } from '../../rspack.base';

export const mfConfig = {
	name: 'shell',
	remotes: {
		header: `header@${headerUrl}`,
		content: `content@${contentUrl}`,
	},
	shared: {
		react: { singleton: true },
		'react-dom': { singleton: true },
	},
	manifest: true,
};
