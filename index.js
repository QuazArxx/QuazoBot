const tmi = require('tmi.js');
const channelName = 'quazarxx';
const { prefix, token } = require('./config.json');

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'QuazoBot',
        password: token
    },
    channels: [channelName],
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action(channelName, 'reporting for duty.')
});

client.on('chat', (channel, user, message, self) => {
    if (self) return;

    // if (message == 'Make sure you remind Quasi how much he sucks!') {
    //     //client.say(channel, 'Tell Daddy that SHE sucks')
    // }
    const args = message.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();

    let userCommand = require(`./commands/Everyone/${cmd}.js`)
    let modCommand = require(`./commands/Admin/${cmd}.js`)

    try {
        userCommand.execute(client, message, args, user, channel, self)
        modCommand.execute(client, message, args, user, channel, self)
    } catch (err) {
        return;
    } 
})