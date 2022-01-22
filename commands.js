module.exports = {
    lurk: function (client, message, args, user, channel, self) {
        client.say(channel, `${user['display-name']} found a nearby passing comet to sit on and watch from a distance. Thanks for the lurk!`)
    },

    twitter: function (client, message, args, user, channel, self) {
        client.say(channel, 'https://twitter.com/quazarxx')
    },

    so: function (client, message, args, user, channel, self) {
        if(!user.badges.moderator || !user.badges.broadcaster) return 

        let param = message.split(' ').filter(n => n)

        if (!param[1]) return

        if (param[1].startsWith('@')) {
            return client.say(channel, `Make sure to give ${param[1].substring(1)} a follow! Give ${param[1].substring(1)} a follow at https://twitch.tv/${param[1].substring(1)}`)
        } else {
            return client.say(channel, `Make sure to give ${param[1]} a follow! Give ${param[1]} a follow at https://twitch.tv/${param[1]}`)
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
    }
}