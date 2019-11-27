const talkedRecently = new Set();

module.exports.reaCandidature = async (bot, msg, {id, name}, userID) => {
    let categorieCandid = msg.channel.guild.channels.find(channel => channel.type === 4 && channel.name === "Candidature");
            if (msg.channel.type === 0 && name === "redtick" && msg.channel.parentID === categorieCandid.id && userID !== bot.user.id) { 
               
                let findBotReaction;
                let  msgCatched;
                await bot.getMessage(msg.channel.id, msg.id).then(msg => {
                    msgCatched = msg;
             });

             await msgCatched.getReaction("redtick:586885291659231232").then(user => {
                 findBotReaction = user.find(listeUser => listeUser.id.includes(bot.user.id));
             });
             
             if (!findBotReaction) {
                 return;
             } else {
                let findUserID = msg.channel.guild.members.find(member => member.id === userID);
                let permAdmin = findUserID.permission.has("administrator");
            let channelTopic = msg.channel.topic;
            if (!permAdmin && channelTopic !== userID) {
                return;
            }
            let roleCandid = msg.channel.guild.roles.find(role => role.name.toLowerCase() === "candidature");
            let findUserTopic = msg.channel.guild.members.find(member => member.id === msg.channel.topic);
            if (!findUserTopic) {
             return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas l'utilisateur. Veuillez supprimer le channel manuellement.")   
            }
            let membreRoleCandid = findUserTopic.roles.find(role => role.includes(roleCandid.id));
            if (!membreRoleCandid) {
             return msg.channel.createMessage(`<:redtick:586885291659231232> Cet utilisateur n'a pas le rôle ${roleCandid.name}. Veuillez supprimer le channel manuellement.`);
            }
            msg.channel.delete();
            findUserTopic.removeRole(roleCandid.id);
        }
    }
}
