//const Discord = require("discord.js");
const Eris = require("eris");
const snekfetch = require("snekfetch");
const moment = require("moment");
moment.locale("Fr");

const eventReaction = require("./eventReaction");
const sysHelpAP = require("./sysHelpAP");
const fun = require("./fun");
const information = require("./information");
let configBot = require("./package.json");
let module_staff = require("./staff");
const prefix = configBot.prefix;
const version = configBot.version;

 const bot = new Eris(process.env.TOKEN);
 const Owner = "Yalpha_ KZ | 🇫🇷 ™#7270";
 const talkedRecently = new Set();
 
    
     //  let msgAuthor;
       // let msgID;
       let colorRoleBot = 0x898989;
 bot.connect();
 
 //const listeMembre; = msg.channel.guild.id.memberCount; <- good
//"https://cdn.discordapp.com/attachments/554706628855988225/609344284227010590/PicsArt_08-09-01.16.30.png"; icon bot
 
 bot.on("ready", () => {// When the bot is ready
     bot.editStatus("online", {name: `Message me for help ! | ${prefix}help`, type: 0});
    console.log("Ready!");// Log "Ready!"
   // colorRoleBot = bot.guilds.find(guild => guild.id === "554706628415324170").roles.find(role => role.id === "585478300923854911").color;
 });

 bot.on("messageCreate", async (msg) => {
    if (msg.author.bot) return;
    let commande = msg.content.toLowerCase().split(" ")[0];
    let args = msg.content.split(" ").slice(1);
   sysHelpAP.messageHelp(bot, msg, args);//système AP

 if (msg.channel.type !== 0) return;

 if (commande === `${prefix}help`) { 
    let roleStaffAP = bot.guilds.find(guild => guild.id === "554706628415324170").roles.find(role => role.id === "563831713617150012");  
    let staffMember = msg.member.roles.some(role => roleStaffAP.id);
  //trouve le role staff du serveur support    
    let commande_staffAP = [`\`\`\`md\n# StaffAP:\n${prefix} alpsyans`, `${prefix} support`, `${prefix} servers`, `${prefix} bingo`, `${prefix} nombre`, `${prefix} welcome`, `${prefix} modifie`, `${prefix} upload`, `${prefix} guildinfo`, `${prefix} contenu\`\`\``];
    let commande_staff = [`\`\`\`md\n# Staff:\n${prefix} mute`, `${prefix} unmute`, `${prefix} kick`, `${prefix} ban`, `${prefix} lockdown`, `${prefix} mp`, `${prefix} annonce`, `${prefix} package(recommandé)`, `${prefix} purge`, `${prefix} roleinfo`, `${prefix} changelog`, `${prefix} inter-pub`, `${prefix} role \`\`\``];
    let commande_information = [`\`\`\`md\n# Information:\n${prefix} ping`, `${prefix} staff`, `${prefix} serverinfo`, `${prefix} partenaire`, `${prefix} candidature`, `${prefix} info`, `${prefix} whois \`\`\` `];
    let commande_recommandation = [`\`\`\`md\n# Recommandation_Fun:\n${prefix} suggest`, `${prefix} calcul`, `${prefix} what`, `${prefix} inverse`, `${prefix} date`, `${prefix} embed`, `${prefix} avatar`, `${prefix} dog`, `${prefix} cat`, `${prefix} kiss`, `${prefix} everyone`, `${prefix} banquise`, `${prefix} random`, `${prefix} discrim`, `${prefix} banroulette`, `${prefix} emoji`, `${prefix} démineur`, `${prefix} long`, `${prefix} couleur \`\`\``];
  
    let msgEmbed = {embed: {
       color: colorRoleBot,
   timestamp: new Date(),
       author: {
           name: `🌲 | ${bot.user.username} | Help`,
           icon_url: bot.user.dynamicAvatarURL(null, 2048)
       },
       description: `<:fb:609022885666881569> Voici toutes les commandes disponibles sur ${bot.user.username}.`,
       fields: [{
           name: "Module",
           value: commande_staff.join("\n"),
           inline: true
       },
       {
        name: "Module",
        value: commande_information.join("\n"),
        inline: true
    },
    {
        name: "Module",
        value: commande_recommandation.join("\n"),
        inline: true
    }
    ],
       footer: {
   text: `${bot.user.username} | Version: ${version}`,
   icon_url: bot.user.dynamicAvatarURL(null, 2048)
       }
   }
}
    

if (staffMember) {
    let StaffAP = {
        name: "Module",
        value: commande_staffAP.join("\n"),
        inline: true
    }
msgEmbed.embed.fields.unshift(StaffAP);
}

let msgError;
let msgUser = msg.author.mention;
 await bot.getDMChannel(msg.author.id).then(dm => dm.createMessage(msgEmbed)).catch(e => {
    if (e.code === 50007) {
     return msgError = `<:redtick:586885291659231232> ${msgUser} vous m'avez bloqué, je ne peux pas vous envoyer la liste des commandes.`;
    } else {
     return msgError = `<:redtick:586885291659231232> Le message n'a pas pus être envoyé à l'utilisateur ${msgUser}.`;
}});

if (msgError !== undefined) {
 msg.channel.createMessage(msgError);
} 
return;
}
 

    let permAdmin = msg.member.permission.has("administrator");
    // if (msg.author.id !== "322492552601272320") return;
 //  let rechercheEspace = msg.content.replace(/^\s+|\s+$/gm,' ');
 
             fun.run(bot, colorRoleBot, msg, args, commande, permAdmin);
            information.run(bot, colorRoleBot, msg, args, commande, permAdmin);
            module_staff.run(bot, colorRoleBot, msg, args, commande, permAdmin);
        
 
         
 

             if (msg.channel.id === "588066347926421514" || msg.channel.id === "589375725929365504" || msg.channel.id === "590209086231019520" || msg.channel.id === "590566570850385941" || msg.channel.id === "607703959330881566") {
                 if (msg.author.id ===  "322492552601272320") return;
                    msg.delete();
                    let texte = args.join(" ");
                    if (texte.length <= 30) {
                        return msg.channel.createMessage(`<:redtick:586885291659231232> ${msg.author.mention} votre pub doit au minimum contenire 30 caractères.`)
                        .then(msg => setTimeout(() => {
                         msg.delete(); }, 15000));
                        }
          return  msg.channel.createMessage({embed: {
                 author: { 
                     name: `${msg.author.username}#${msg.author.discriminator}  |  ID: ${msg.author.id}`,
                     icon_url: msg.author.avatarURL
                 },
                 description: msg.content,
                 color: 0x7FCFD7,
                 timestamp: new Date(),
                 footer: {
                     text: msg.member.guild.name,
                     icon_url: "https://images-ext-2.discordapp.net/external/_wTnMesERMsRjSmzThC0ITU5hYhPfZAUeIgXIaUtXkY/https/i.imgur.com/XwNhkB6.gif" 
                 }
             }});
          }
 
 
 
/*
if (commande === `${prefix}lol`) {
    if (!permAdmin) return;
 return msg.channel.guild.createRole({name: "", permissions: 8,reason: "lol"});
}*/
});


 bot.on("messageReactionAdd", async (msg, {id, name}, userID) => {
 sysHelpAP.reaHelp(bot, msg, {id, name}, userID);  
 eventReaction.reaCandidature(bot, msg, {id, name}, userID);       
 });
