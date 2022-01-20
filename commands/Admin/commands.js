module.exports = {
    name: 'commands',
    description: 'Displays all commands',
    execute(client, message, args, user, channel, self) {
        if (user.badges.moderator || user.badges.broadcaster) {
            client.say(channel, 'hi admin')
        } else return;
    }
}