const tmi = require('tmi.js')
const { prefix, token } = require('./config.json')

const commands = require('./commands')
const timers = require('./timers.json')

let x = 0
let messageCount = 0

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
}

const client = new tmi.client(options)

client.connect()

client.on('connected', (address, port) => {
    client.action('quazarxx', 'reporting for duty.')
})

client.on("subscription", function (channel, username, methods) {
    client.say(channel, `${username} joined Planet Q! Welcome friend!`)
})

client.on("resub", function (channel, username, months, message, userstate, methods) {
    let cumulativeMonths = userstate['msg-param-cumulative-months']

    client.say(channel, `${username} renewed their residency to Planet Q! They've lived here for ${cumulativeMonths} months!`)
})

client.on('chat', (channel, user, message, self) => {
    if (!self){
        messageCount++
    }

    if (self || !message.startsWith(prefix)) return;

    const args = message.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();

    if (!commands.hasOwnProperty(cmd)) {
        return
    } else {
        commands[cmd](client, message, args, user, channel, self)
    }
})

setInterval(() => {
    if (messageCount >= 5){
        timer()
        messageCount = 0
    } else return
}, 900000)

function timer() {
    client.say('quazarxx', timers[x])
    x++

    if (x == timers.length) {
        x = 0
    }
}