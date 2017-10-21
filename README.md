# Central Intelligence - Slack client

This is a Slack client implementation for the [Central Intelligence system](https://github.com/mikko/CentralIntelligence-server).

## Running the bot

`.env.sample` includes all the environment variables required / used by the bot.
Copy the sample file in to a file called `.env` and fill in the blanks or use
environment variables for configuration.

To compile the TypeScript code in to JavaScript code (NOTE: current compilation
target is `es2017` which means Node 8.x or newer is required), run the build command
`npm run build`. All compiled JavaScript files should be located in the `dist`
folder.

To run the application itself, use the command `node dist/index.js`
