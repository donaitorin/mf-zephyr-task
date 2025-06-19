import { mfConfig } from './module-federation.config';
import { headerUrl, makeConfig } from '../../rspack.base';

export default makeConfig({
	context: __dirname,
	entry: './src/index.ts',
	port: 8082,
	uniqueName: 'header',
	publicPath: headerUrl,
	mfConfig,
});
