const talkedRecently = new Set();
let configBot = require("./package.json");
const prefix = configBot.prefix;
const version = configBot.version;

module.exports.messageHelp = async (bot, msg, args) => {
    if (msg.channel.type === 1) {
        if (msg.author.bot) {
            return;
        } 
        let whiteListe = []
       let findWhiteListe = whiteListe.find(id => id.includes(msg.author.id));
       if (findWhiteListe) {
           return msg.channel.createMessage("<:redtick:586885291659231232> Je ne peux pas envoyer votre message, vous avez surement du être banni pour non respect de l'utilisation du système.\n**Pour contester ce bannissement, rejoignez le serveur de support et contactez un administrateur.**")
       }
let findGuildAp = bot.guilds.find(guild => guild.id.includes("554706628415324170"));
     let findChannel = findGuildAp.channels.find(channel => channel.name.includes(msg.author.id));
     if (findChannel) {
      return bot.createMessage(findChannel.id, msg.content);
      }
      msg.channel.createMessage("Merci de votre message ! Un membre du staff vous réponds dès que possible.");
  //  msgAuthor = msg.author;
    msgID = msg.id;
        let texte = msg.content.toLowerCase();
      await bot.createMessage("611216606588043274", {embed: {
         footer: {
          text: msg.author.id
          },
       title: "Un utilisateur a besoin d'aide.\nPour prendre en charge la demande d'aide, cliquez sur la réaction <:greentick:586885261170966528>",
            description: texte
        }}).then(msg => {
            bot.addMessageReaction("611216606588043274", msg.id, "greentick:586885261170966528");
        }); 
    }



    if (msg.channel.parentID === "616999164198518806") {
        let nomSalon = msg.channel.name;
        let findUserSalon = bot.users.find(user => user.id.includes(nomSalon));
        let helperID = msg.channel.topic;
        
         if (findUserSalon) {
            if (helperID !== msg.author.id) {
                return;
            }
            let texte = msg.content;
return  bot.getDMChannel(nomSalon).then(dm => dm.createMessage(`**Support Team:** ${texte}`));
        } else {
            return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas l'utilisateur.");
        }
    }
}


module.exports.reaHelp = async (bot, msg, {id, name}, userID) => {
    if (msg.channel.type === 0 && msg.channel.id === "611216606588043274" && name === "greentick" && userID !== bot.user.id) {
        let findBotReaction;
   let msgCatched;
   await bot.getMessage(msg.channel.id, msg.id).then(msg => {
                       msgCatched = msg;
                });
             //   return console.log(msgCatched);
   await msgCatched.getReaction("greentick:586885261170966528").then(user => {
                    findBotReaction = user.find(listeUser => listeUser.id.includes(bot.user.id));
                });
   
if (!findBotReaction) {
    return;
            } else {
                let msgContent = msgCatched.embeds.find(embed => embed).description;
             let authorMsgID = msgCatched.embeds.find(embed => embed).footer.text;
                bot.createChannel("554706628415324170", authorMsgID, "0", "Help en cours !", {topic: userID, parentID: "616999164198518806"}).then(channel => {
                   channel.editPermission(userID, 1024, null, "member");
                 bot.createMessage(channel.id, {content:`<@${userID}> vous avez prit en charge cette demande.`,embed: {
                     title: `Pour clôturer celle-ci, cliquez sur la réaction <:redtick:586885291659231232>`,
                     description: msgContent
                    }}).then(msg => {
                        msg.addReaction("redtick:586885291659231232");
                    })
                });
                msgCatched.delete();
             return msg.channel.createMessage(`<:greentick:586885261170966528> <@${userID}> a prit la demande d'aide.`);
                
            }
            }
            let categorieHelpAp = msg.channel.guild.channels.find(channel => channel.type === 4 && channel.name === "help alpsyans");
            if (msg.channel.type === 0 && msg.channel.guild.id === "554706628415324170" && name === "redtick"  && msg.channel.parentID === categorieHelpAp.id && userID !== bot.user.id) {
               
              let msgAuthorTopic = msg.channel.topic;
                if (userID === msgAuthorTopic) {
                    let findBotReaction;
                    let msgCatched;
                   await bot.getMessage(msg.channel.id, msg.id).then(msg => {//catch le message
                       msgCatched = msg;
                });

                await msgCatched.getReaction("redtick:586885291659231232").then(user => { //s'il n'y a pas la réaction du bot, return le message
                    findBotReaction = user.find(listeUser => listeUser.id.includes(bot.user.id));
                });
                    if (!findBotReaction) {
                 return;
                    } else {
                        return msg.channel.delete("Fin de la demande d'aide !");
                    }
                }
            }
}
