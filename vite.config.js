import { defineConfig } from 'vite';
import path from 'path';
import esbuild from 'esbuild';
import postcss from 'postcss';
import cssnano from 'cssnano';
import fs from 'fs';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				quietDeps: true,
				silenceDeprecations: [
					"mixed-decls",
					"import",
					"color-functions",
					"global-builtin",
				],
				verbose: false,
				api: 'modern',
			}
		}
	},
	build: {
        watch: { // adding this ratehr than using the (unsupported) --watch flag
            chokidar: {
                usePolling: true,
                interval: 1000,
            }
        },
		rollupOptions: {
			input: {
				app: path.resolve(__dirname, 'src/js/app.js'), // Entry point for JS
				theme: path.resolve(__dirname, 'src/scss/theme.scss'), // Entry point for CSS
			},
			output: {
				entryFileNames: '[name].js', // Name JS output
				assetFileNames: '[name].[ext]', // Name CSS and other asset outputs
			},
		},
		emptyOutDir: true, // Clear dist before building
		minify: false, // Avoid Rollup's default minification,
	},
	plugins: [
		{
			name: 'dual-output',
			apply: 'build',
			writeBundle: async (options, bundle) => {
				// Iterate over all generated files in the bundle
				for (const [fileName, file] of Object.entries(bundle)) {
					const filePath = path.resolve(__dirname, 'dist', fileName);

					// Process JavaScript files
					if (fileName.endsWith('.js')) {
						const minifiedPath = filePath.replace(/\.js$/, '.min.js');
						const { code: minifiedCode } = await esbuild.transform(file.code, {
							minify: true,
						});
						fs.writeFileSync(minifiedPath, minifiedCode);
					}

					// Process CSS files
					if (fileName.endsWith('.css')) {
						const minifiedPath = filePath.replace(/\.css$/, '.min.css');
						const minifiedResult = await postcss([cssnano()]).process(file.source, {
							from: undefined,
						});
						fs.writeFileSync(minifiedPath, minifiedResult.css);
					}
				}
			},
		},
	],
	server: {
		port: 8000,
		host: '0.0.0.0',
	},
});
