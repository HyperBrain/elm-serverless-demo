const elmServerless = require('elm-serverless');
const rc = require('strip-debug-loader!shebang-loader!rc');

const elm = require('./API.elm');

// Use AWS Lambda environment variables to override these values
// See the npm rc package README for more details
const config = rc('demoPipelines', {
  cors: {
    origin: '*',
    methods: 'get,post,options',
  },
});

module.exports.handler = elmServerless.httpApi({
  handler: elm.Pipelines.API,
  config,
});
