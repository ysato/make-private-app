# make-private-app

> A GitHub App built with [Probot](https://github.com/probot/probot) that A Probot app

<a href="https://stats.uptimerobot.com/AgLmRUZoEP" rel="nofollow"><img alt="Uptime Robot status" src="https://img.shields.io/uptimerobot/status/m793136036-fe40d9eebcd3ab412cd6910e"></a>

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t make-private-app .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> make-private-app
```

## Contributing

If you have suggestions for how make-private-app could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2022 ysato
