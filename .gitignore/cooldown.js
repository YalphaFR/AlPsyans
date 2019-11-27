const talkedRecently = new Set();
module.exports.run = (msg, cooldown, deleteMessageError) => {
    if (msg.author.id !== "322492552601272320") {  
        if (talkedRecently.has(msg.author.id)) {
            if (talkedRecently.has(msg.author.name)) return "";
            talkedRecently.add(msg.author.name);
            return msg.channel.createMessage(`<:redtick:586885291659231232> ${msg.author.mention} veuillez attendre ${String(cooldown).slice(0, String(cooldown).length - 3)} secondes avant de pouvoir réutiliser la commande.`)
            .then(msg => setTimeout(() => {
               msg.delete(); }, deleteMessageError)); 
        } else {
talkedRecently.add(msg.author.id);
setTimeout(() => {
   talkedRecently.delete(msg.author.id); 
talkedRecently.delete(msg.author.name);
}, cooldown); }
}
}
