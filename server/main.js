import Koa from 'koa';
import session from 'koa-session'
import convert from 'koa-convert';
import historyApiFallback from 'koa-connect-history-api-fallback';
import serve from 'koa-static';
import proxy from 'koa-proxy';
import _debug from 'debug';
import config from '../config';
import webpack from 'webpack';
import webpackConfig from '../build/webpack.config';
import webpackDevMiddleware from './middleware/webpack-dev';
import webpackHMRMiddleware from './middleware/webpack-hmr';

const debug = _debug('app:server')
const paths = config.utils_paths
const app = new Koa()

// ------------------------------------
// Mongo DB Connect
// ------------------------------------
import db from './db';
import db_config from './db_config';
import assert from 'assert';

db.connect(db_config.database, function(err) {
  if (err) {
    console.log('Unable to connect to Mongo ! ! ! ! !')
    process.exit(1)
  } else {
    assert.equal(null, err);
    console.log("~~~ > > > Connected correctly to MongoDB boyyÿÿÿÿÿÿ < < < ~~~");
  }
});

// ------------------------------------
// Middleware
// ------------------------------------
// Enable koa-proxy if it has been enabled in the config.
if (config.proxy && config.proxy.enabled) {
  app.use(convert(proxy(config.proxy.options)))
}

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement isomorphic
// rendering, you'll want to remove this middleware.
app.use(convert(historyApiFallback({
  verbose: false
})))

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (config.env === 'development') {
  const compiler = webpack(webpackConfig)

  // Enable webpack-dev and webpack-hot middleware
  const { publicPath } = webpackConfig.output

  app.use(webpackDevMiddleware(compiler, publicPath))
  app.use(webpackHMRMiddleware(compiler))

  // Serve static assets from ~/src/static since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(convert(serve(paths.client('static'))))
} else {
  debug(
    'Server is being run outside of live development mode. This starter kit ' +
    'does not provide any production-ready server functionality. To learn ' +
    'more about deployment strategies, check out the "deployment" section ' +
    'in the README.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(convert(serve(paths.base(config.dir_dist))))
}

// ------------------------------------
// Routes
// ------------------------------------



export default app