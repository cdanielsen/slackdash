# slackdash
An app for linking an Amazon Dash button to a Slack incoming webhook. Designed for Windows.

## Implicit Dependencies
[Npcap](https://nmap.org/npcap/) installed with WinPcap compatibility:

```cmd
npcap-<version>.exe /winpcap_mode=yes
```

If on Windows, you'll need a way to compile the C++ native modules in the `cap` package. npm uses `node-gyp`, which depends on your machine having the tooling to build C++. If you don't have Visual Studio 2015 installed, [this method](https://github.com/nodejs/node-gyp#option-1) seems promising.

## App level config

You'll need...
- A [Slack webhook](https://api.slack.com/incoming-webhooks) to send the message to
- The MAC address of your dash button
- The IP address of your wireless adapter
- A sweet, sweet message to send

## Setup

`npm install`

If install was successful, edit the generated `.env` file with the appropriate values based on the .env.example file. slackdash uses [dotenv-safe](https://www.npmjs.com/package/dotenv-safe) and will error/bail without them.

`npm start`

Click your dash button. You should see your message in the Slack channel the webhook points to!

// TODO:
 - Test dumping stderr to a file with NSSM. Test slack errors / syntax errors on startup for better debugging
