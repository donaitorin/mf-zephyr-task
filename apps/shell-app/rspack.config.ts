import { mfConfig } from './module-federation.config';
import { makeConfig } from '../../rspack.base';

export default makeConfig({
	context: __dirname,
	entry: './src/index.ts', // note .tsx
	port: 8080,
	uniqueName: 'shell',
	publicPath: 'http://localhost:8080/',
	mfConfig,
});
