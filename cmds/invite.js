const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.RichEmbed()
 .setDescription("[Invite](https://discordapp.com/api/oauth2/authorize?client_id=621078731854970890&permissions=0&scope=bot)")
 .setColor("#00ff00")
 .setThumbnail(bicon)
 .addField("Use this invite to invite the bot in your server!", "[Here](https://discordapp.com/api/oauth2/authorize?client_id=621078731854970890&permissions=0&scope=bot)")

 message.channel.send(inviteEmbed);

        message.delete();

}
      module.exports.help = {
        name: "invite",
               aliases: [] 
      }