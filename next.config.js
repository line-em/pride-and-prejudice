/** @type {import('next').NextConfig} */

const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

const nextConfig = {
	transpilePackages: ["@package/bug"],
	experimental: {
		appDir: true,
		serverComponentsExternalPackages: ["mongoose"]
	},
	webpack: (config) => {
		Object.assign(config.resolve.alias, {
			"@mongodb-js/zstd": false,
			"@aws-sdk/credential-providers": false,
			snappy: false,
			aws4: false,
			"mongodb-client-encryption": false,
			kerberos: false,
			"supports-color": false
		});
		config.plugins.push(
			new FilterWarningsPlugin({
				exclude: [/the request of a dependency is an expression/]
			})
		);
		return config;
	},
	reactStrictMode: process.env.NODE_ENV === "development" ? false : true
};

module.exports = nextConfig;

// TEMP FILTER WARNING PLUGIN FOR MONGOOSE
// https://github.com/Automattic/mongoose/issues/13212
