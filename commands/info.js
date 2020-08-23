module.exports = {
    name: 'info',
    description: 'Info',
    args: true,
    usage: '<user> <role>',
    execute(message, args) {
 if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArgument length: ${args.length}`);
    },
};