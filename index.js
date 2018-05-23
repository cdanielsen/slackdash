const fs = require("fs");
const rp = require("request-promise");
const { randomGreeting } = require("./messages")
const { Server, DashButton } = require("win-node-dash-button");

// Get needed environment variables
const result = require("dotenv-safe").config();
if (result.error) {
  throw result.error;
}
const { BOT_MESSAGE, SLACK_URI, DASH_MAC_ADDRESS, WIRELESS_IP } = process.env;

// Post to slack on detection of a dash button
const callback = async () => {
  try {
    await rp({
      uri: SLACK_URI,
      method: "POST",
      json: true,
      body: {
        text: `${randomGreeting()} ${BOT_MESSAGE}`
      }
    });
  } catch (err) {
    const date = new Date();
    console.error(`Post to slack failed. Will log error message to error.log => ${err}`);
    fs.appendFileSync(
      "./error.log",
      `${date.toLocaleString()} | ErrorMessage: ${err}\n`
    );
  }
};

// Start the server
const svr = new Server();
const dash = new DashButton(DASH_MAC_ADDRESS, callback);

svr.register(dash).start(WIRELESS_IP);
