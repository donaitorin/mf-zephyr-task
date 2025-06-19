import { mfConfig } from './module-federation.config';
import { makeConfig } from '../../rspack.base';

export default makeConfig({
	context: __dirname,
	entry: './src/index.ts',
	port: 8081,
	uniqueName: 'content',
	publicPath: 'http://localhost:8081/',
	mfConfig,
});
