/** @type {import('next').NextConfig} */
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
		return config;
	},
	reactStrictMode: process.env.NODE_ENV === "development" ? false : true
};

module.exports = nextConfig;
