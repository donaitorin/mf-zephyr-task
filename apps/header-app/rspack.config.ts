import { mfConfig } from './module-federation.config';
import { makeConfig } from '../../rspack.base';

export default makeConfig({
	context: __dirname,
	entry: './src/index.ts',
	port: 8082,
	uniqueName: 'header',
	publicPath: 'http://localhost:8082/',
	mfConfig,
});
