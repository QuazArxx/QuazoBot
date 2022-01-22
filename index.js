const tmi = require('tmi.js');
const { prefix, token } = require('./config.json');

const commands = require('./commands')

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'quazobot',
        password: token
    },
    channels: ['quazarxx']
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action('quazarxx', 'reporting for duty.')
});

client.on('chat', (channel, user, message, self) => {
    if (self || !message.startsWith(prefix)) return;

    const args = message.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();

    if (!commands.hasOwnProperty(cmd)) {
        return
    } else {
        commands[cmd](client, message, args, user, channel, self)
    }
})