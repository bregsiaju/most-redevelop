import defaultMeta from './config/defaultMeta'
import sitemapConfig from './config/sitemapConfig'

const listENVS = {
	HOST_URL: process.env.HOST_URL,
	BASE_URL: process.env.BASE_URL,
	API_BASE_URL: process.env.API_URL
}
/*
 ** Axios Instance
 */
const AxiosInstance = {
	baseURL: process.env.BASE_URL,
	withCredentials: false,
	retry: true,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
}

/*
 ** Cache Busting
 */
const version = process.env.npm_package_version.split('.').join('')

export default {
	target: 'server',
	// Duplicate .env
	env: listENVS,
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'MOST: Aplikasi Investasi Terpercaya',
		meta: defaultMeta,
		link: [
			{ rel: 'apple-touch-icon', href: '/site-icon.svg' },
			{ rel: 'icon', type: 'image/svg', href: '/site-icon.svg' }
		]
	},

	render: {
		bundleRenderer: {
			shouldPreload: (file, type) => {
				return ['script', 'style', 'font'].includes(type)
			}
		}
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ['~/assets/scss/main.scss'],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		{ src: './plugins/vue-slick-carousel.js' },
		{ src: '~/plugins/helpers.js' },
		{ src: '~/plugins/vuelidate' },
		{ src: '~/plugins/jsonld' },
		{ src: '~/plugins/vue-chartjs.js', mode: 'client' }
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/auth',
		'@nuxtjs/style-resources',
		['nuxt-lazy-load', { directiveOnly: true }],
		'@nuxtjs/sitemap'
	],
	sitemap: sitemapConfig,

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {
		proxy: true,
		AxiosInstance
	},

	publicRuntimeConfig: listENVS,

	privateRuntimeConfig: {
		axios: {
			baseURL: process.env.HOST_URL
		}
	},

	proxy: {
		'/base': {
			target: process.env.BASE_URL,
			pathRewrite: { '^/base/': '' },
			changeOrigin: true,
			onProxyReq(request) {
				request.setHeader('origin', process.env.BASE_URL)
			}
		}
	},

	// AUTH
	auth: {
		strategies: {
			local: {
				endpoints: {
					login: { url: '/auth/login', method: 'post' },
					logout: { url: '/auth/logout', method: 'post' },
					user: {
						url: '/current-user/profile',
						method: 'get',
						propertyName: false
					}
				},
				tokenType: 'Bearer'
			}
		}
	},

	styleResources: {
		scss: ['./assets/scss/partials/_variables.scss']
	},

	router: {
		middleware: ['redirection']
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		extend(config, ctx) {},
		postcss: {
			preset: {
				autoprefixer: {
					overrideBrowserslist: ['last 2 versions']
				}
			}
		},
		optimizecss: true,
		optimization: {
			splitChunks: {
				minSize: 20000,
				maxSize: 500000
			}
		},
		filenames: {
			app: ({ isDev, isModern }) =>
				isDev
					? `[name]${isModern ? '.modern' : ''}.js`
					: `[contenthash:7]${isModern ? '.modern' : ''}v${version}.js`,
			chunk: ({ isDev, isModern }) =>
				isDev
					? `[name]${isModern ? '.modern' : ''}.js`
					: `[contenthash:7]${isModern ? '.modern' : ''}v${version}.js`,
			css: ({ isDev }) =>
				isDev ? '[name].css' : `css/[contenthash:7]v${version}.css`,
			img: ({ isDev }) =>
				isDev
					? '[path][name].[ext]'
					: `img/[name].[contenthash:7]v${version}.[ext]`,
			font: ({ isDev }) =>
				isDev
					? '[path][name].[ext]'
					: `fonts/[name].[contenthash:7]v${version}.[ext]`,
			video: ({ isDev }) =>
				isDev
					? '[path][name].[ext]'
					: `videos/[name].[contenthash:7]v${version}.[ext]`
		}
	}
}
