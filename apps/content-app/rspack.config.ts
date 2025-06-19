import { mfConfig } from './module-federation.config';
import { contentUrl, makeConfig } from '../../rspack.base';

export default makeConfig({
	context: __dirname,
	entry: './src/index.ts',
	port: 8081,
	uniqueName: 'content',
	publicPath: contentUrl,
	mfConfig,
});
