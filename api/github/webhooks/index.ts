const {createNodeMiddleware, createProbot} = require('probot');

const app = require('../../../src/index');

export = createNodeMiddleware(app, {
    probot: createProbot(),
    webhooksPath: '/api/github/webhooks'
});
