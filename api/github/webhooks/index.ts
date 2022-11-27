import {createNodeMiddleware, createProbot} from 'probot';
import {VercelRequest, VercelResponse} from '@vercel/node'
import app from '../../../src';

const middleware = createNodeMiddleware(app, {
    probot: createProbot(),
    webhooksPath: '/api/github/webhooks'
});

export = (request: VercelRequest, response: VercelResponse) => {
    if (request.method !== 'POST') {
        response.writeHead(302, {
            Location: '/ping'
        });
        response.end();
        return;
    }

    middleware(request, response);
};
