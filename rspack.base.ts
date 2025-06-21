import * as path from 'node:path';
import { rspack } from '@rspack/core';
import * as RefreshPlugin from '@rspack/plugin-react-refresh';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { withZephyr } from 'zephyr-rspack-plugin';

export const isDev = process.env.NODE_ENV === 'development';
export const headerUrl = isDev
	? 'http://localhost:8082'
	: 'https://donai-torin-82-header-app-mf-zephyr-task-donaitor-c64672124-ze.zephyrcloud.app';

export const contentUrl = isDev
	? 'http://localhost:8081'
	: 'https://donai-torin-83-content-app-mf-zephyr-task-donaito-7ef37c7ea-ze.zephyrcloud.app';

const targets = ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'];

/**
 * Build an Rspack config for any MF app.
 */
export function makeConfig({
	context,
	entry,
	port,
	uniqueName,
	publicPath,
	mfConfig,
}: {
	context: string;
	entry: string;
	port: number;
	uniqueName: string;
	publicPath: string;
	mfConfig: any;
}) {
	return withZephyr()({
		context,
		entry: { main: entry },
		resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },

		devServer: {
			port,
			headers: { 'Access-Control-Allow-Origin': '*' },
			historyApiFallback: true,
		},

		output: { uniqueName, publicPath: !isDev ? 'auto' : `http://localhost:${port}/` },

		experiments: { css: true },

		module: {
			rules: [
				{ test: /\.svg$/, type: 'asset' },

				{
					test: /\.css$/,
					type: 'css',
					use: [
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									// one shared PostCSS/Tailwind config in the root
									config: path.resolve(__dirname, 'postcss.config.mjs'),
								},
							},
						},
					],
				},

				{
					test: /\.[jt]sx?$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'builtin:swc-loader',
							options: {
								jsc: {
									parser: { syntax: 'typescript', tsx: true },
									transform: {
										react: {
											runtime: 'automatic',
											development: isDev,
											refresh: isDev,
										},
									},
								},
								env: { targets },
							},
						},
					],
				},
			],
		},

		plugins: [
			new rspack.HtmlRspackPlugin({ template: './index.html' }),
			new ModuleFederationPlugin(mfConfig),
			isDev && new RefreshPlugin(),
		].filter(Boolean),

		optimization: {
			minimizer: [
				new rspack.SwcJsMinimizerRspackPlugin(),
				new rspack.LightningCssMinimizerRspackPlugin({
					minimizerOptions: { targets },
				}),
			],
		},
	});
}
