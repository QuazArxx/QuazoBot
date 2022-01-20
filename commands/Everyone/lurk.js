module.exports = {
    name: 'lurk',
    description: 'Simple',
    execute(client, message, args, user, channel, self) {
        client.say(channel, `${user['display-name']} wanted to sit on a passing comet and just watch from a distance. Thank you for hanging around!`);
    }
}