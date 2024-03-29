const commandList = require('./commandList.json')

module.exports = {
    lurk: function (client, message, args, user, channel, self) {
        client.say(channel, `${user['display-name']} found a nearby passing comet to sit on and watch from a distance. Thanks for the lurk!`)
    },

    twitter: function (client, message, args, user, channel, self) {
        client.say(channel, 'https://twitter.com/quazarxx')
    },

    so: function (client, message, args, user, channel, self) {
        if (!(user.badges.moderator) && !(user.badges.broadcaster)) return client.say(channel, `${user['display-name']}, you\'re not a mod!`)

        let param = message.split(' ').filter(n => n)

        if (!param[1]) return client.say(channel, 'You forgot to tag someone!')

        if (param[1].startsWith('@')) {
            return client.say(channel, `${param[1].substring(1)} is a wonderful being that you should follow at https://twitch.tv/${param[1].substring(1)}!`)
        } else {
            return client.say(channel, `${param[1]} is a wonderful being that you should follow at https://twitch.tv/${param[1]}!`)
        }
    },

    hug: function (client, message, args, user, channel, self) {
        let param = message.split(' ').filter(n => n)

        if (!param[1]) return client.say(channel, `It's hard to hug the air unless you're hugging yourself! Tag someone after the command to hug them.`)

        if (param[1].startsWith('@')) {
            return client.say(channel, `${user['display-name']} gave a big ol' hug to ${param[1].substring(1)}!`)
        } else {
            return client.say(channel, `${user['display-name']} gave a big ol' hug to ${param[1]}!`)
        }
    },

    hugall: function (client, message, args, user, channel, self) {
        client.say(channel, `Group hug with ${user['display-name']}!`)
    },

    help: function (client, message, args, user, channel, self) {
        let param = message.split(' ').filter(n =>n)

        if (param[1] == 'mods') {
            if (user.badges.moderator || user.badges.broadcaster) {
                client.say(channel, `Commands for Mods: ${commandList.mods}`)
            } else {
                client.say(channel, 'You don\'t have permission to do that.')
            }
        } else {
            client.say(channel, `Commands for everyone: ${commandList.everyone}`)
        }
    },

    razer: function (client, message, args, user, channel, self) {
        client.say(channel, 'Mouse: Mamba Elite - https://razer.a9yw.net/x9mxN3\n Keyboard (Main): Blackwidow Elite (Yellow Switch) - https://razer.a9yw.net/Zdmky0\n Keyboard (Competitive): Huntsman Tournament Edition - https://razer.a9yw.net/qn0Ryq\n Headset: Nari Ultimate Wireless - https://razer.a9yw.net/6bxaEE')
    },

    deathCount: 10,
    died: function (client, message, args, user, channel, self) {
        this.deathCount++
        client.say(channel, `Quaz died again(what a surprise) and is now at ${this.deathCount} deaths`)
    },

    deaths: function (client, message, args, user, channel, self) {
        client.say(channel, `Quaz died ${this.deathCount} times`)
    },
}