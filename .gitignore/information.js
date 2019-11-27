const moment = module.require("moment");
moment.locale("Fr");
let configBot = require("./package.json");
const cooldown = require("./cooldown");
const prefix = configBot.prefix;
const version = configBot.version;
const Owner = "Yalpha_ KZ | 🇫🇷 ™#7270";
const talkedRecently = new Set();

module.exports.run = async (bot, colorRoleBot, msg, args, commande, permAdmin) => {

    if (commande === `${prefix}info`) {
        let date = new Date(bot.uptime);
return  msg.channel.createMessage({embed: { 
title: "**Prefix du bot:**" + " `" + prefix + "` (inchangeable pour le moment)",
color: colorRoleBot,
fields: [
 {
name: "Version",
value: version,
inline: true
},
{
name: "Library",
value: `eris`,
inline: true
},
{ 
name: "Créateur",
value: Owner,
inline: true
},
{ 
    name: "Serveurs",
    value: bot.guilds.size,
    inline: true
 },
 { 
        name: "Utilisateurs",
        value: bot.users.size,
        inline: true
},
{
    name: "Support Discord",
value: "[AlPsyans](https://discord.gg/KTKvyZC)",
    inline: true
},
{
    name: "Invite",
    value: "[Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=585477543935868938&scope=bot&permissions=8)",
    inline: true
}],
author: {
    name: bot.user.username,
    icon_url: bot.user.dynamicAvatarURL(null, 2048)
},
 footer: {
    // icon_url: "https://images-ext-2.discordapp.net/external/ULm3u9cM2l7rWhcUxPsiYEJWg7WMTfwuEhj9WlWgpkE/%3Fsize%3D128/https/cdn.discordapp.com/avatars/322492552601272320/9141f0eb40ab3df0025a672825690646.png",
 text: `Shard (instance bot) ${bot.shards.size} | Uptime ${date.getDate() - 1} jrs, ${date.getHours() - 1} hrs, ${date.getMinutes()} mins, ${date.getSeconds()} secs`
 }
}
}
);
    }
    
    
if (commande === `${prefix}ping`) {
    let channel = msg.channel.id;
    let ping = msg;
   return msg.channel.createMessage("Pong !").then(msg1 => {
 msg1.edit("Pong ! `" + String(Date.now() - ping.timestamp) + "ms`")});
   }

   if (commande === `${prefix}staff`) {
    let mes_helpers = [];
    let mes_modos = [];
    let mes_admins = [];
let Helper = msg.channel.guild.roles.find(role => role.name.includes("Support"));
let Modo = msg.channel.guild.roles.find(role => role.name.includes("Modérateur"));
let Admin = msg.channel.guild.roles.find(role => role.name.includes("Administrateur"));
if (!Helper || !Modo || !Admin) {
return msg.channel.createMessage("<:redtick:586885291659231232> Le package n'a pas été installé correctement !");
}
    let helper = /*guild_alpsyans*/msg.channel.guild.members.filter(member => member.roles.includes(Helper.id));
   // let helper = /*guild_alpsyans*/msg.channel.guild.members.filter(member => member.roles.includes("598486232468684800"));
    let modo = /*guild_alpsyans*/msg.channel.guild.members.filter(member => member.roles.includes(Modo.id));
    let admin = /*guild_alpsyans*/msg.channel.guild.members.filter(member => member.roles.includes(Admin.id));

  let tabStaff = helper.forEach(mon_helper => {
   mes_helpers += `❱ ${mon_helper.mention}\n`; 
//   console.log(mon_helper.username);
});
modo.forEach(mon_modo => {
mes_modos += `❱ ${mon_modo.mention}\n`;
});
   admin.forEach(mon_admin => {
       mes_admins += `❱ ${mon_admin.mention}\n`;
});
// console.log(mes_helpers);
    return  msg.channel.createMessage({embed: {
        color: colorRoleBot,
        author: {
            name: `🔱 | ${bot.user.username} | Support`,
            icon_url: bot.user.dynamicAvatarURL(null, 2048)
        },
        description: `<:fb:609022885666881569>  **Voici la liste du staff de ${msg.channel.guild.name}.**`,
        fields: [
            {
                name: "<:fbl:609022860987727874> Administrateur:",
                value: `**${mes_admins.length === 0? "❱ Aucun" : mes_admins}**`
            },
           /* {
                name: "<:fbl:609022860987727874> Community Manager:",
                value: `❱ **Aucun (recrutement ON)**` 
            },*/
            {
                name: "<:fbl:609022860987727874> Modérateur:",
                value: `**${mes_modos.length === 0? "❱ Aucun\n" : mes_modos}**`
            },
            {
                name: "<:fbl:609022860987727874> Support:",
                value: `**${mes_helpers.length === 0? "❱ Aucun\n" : mes_helpers}**`
            }
        ],
        footer: {
            text: `${bot.user.username} | Version ${version}`,
            icon_url: bot.user.dynamicAvatarURL(null, 2048)
        },
        timestamp: new Date()

    }});
}

if (commande === `${prefix}serverinfo`) {
    let role = msg.channel.guild.roles.map(role => role.mention);
    let userBot = msg.channel.guild.members.filter(member => member.bot).length;
    let online = msg.channel.guild.members.filter(member => member.status !== "offline").length;
    
    let msgEmbed = {embed: {
       timestamp: new Date (msg.channel.guild.createdAt),
       color: colorRoleBot,
       author: { 
       name: msg.channel.guild.name,
       icon_url: msg.channel.guild.iconURL
       },
       fields: [
           {
               name: "Owner",
               value: `<@${msg.channel.guild.ownerID}>`,
               inline: true
           },
           {
               name: "Region",
               value: msg.channel.guild.region,
               inline: true
           },
           {
               name: "Channel Catégories",
               value: msg.channel.guild.channels.filter(textchannel => textchannel.type === 4).length,
               inline: true
           },
           {
               name: "Texte Channels",
               value: msg.channel.guild.channels.filter(textchannel => textchannel.type === 0).length,
               inline: true
           },
           {
               name: "Voice Channels",
               value: msg.channel.guild.channels.filter(textchannel => textchannel.type === 2).length,
               inline: true
           },
           {
               name: "Membres",
               value: msg.channel.guild.memberCount,
               inline: true
           },
           {
               name: "Humains",
               value: msg.channel.guild.memberCount - userBot, 
               inline: true
           },
           {
               name: "Bot",
               value: userBot,
               inline: true
           },
           {
               name: "Online",
               value: online,
               inline: true
           },
           {
               name: "Roles",
               value: role.length,
               inline: false
           },
       ],
       footer: {
           text: `ID: ${msg.channel.guild.id} | Serveur créé le`,
       }     
   }}
if (String(role).length <= 1024) {
let listeRole = {name: "Liste Role", value: role.join(" "), inline: false};
let pushListeRole = msgEmbed.embed.fields.push(listeRole);
}
return msg.channel.createMessage(msgEmbed);
}


 if (commande === `${prefix}partenaire`) {
     if (args.length === 0) {
        return  msg.channel.createMessage({embed: {
            color: 0x9900CC,
            thumbnail: {
             url: msg.author.avatarURL
            },
            author: {
              name:  `🔱 | ${bot.user.username} | Liste des Partenaires`,
            icon_url: msg.author.avatarURL
            },
            fields: [
                {
                    name: "<:discord:606591042476703751> Graphics Center's:",
                    value: "Pour plus d'informations: ❱ `" + prefix + "partenaire 1`" 
                 },
                 {
                    name: "<:discord:606591042476703751> Anarcube:",
                    value: "Pour plus d'informations: ❱ `" + prefix + "partenaire 2`" 
                 },
                 {
                    name: "<:discord:606591042476703751> Axanax:",
                    value: "Pour plus d'informations: ❱ `" + prefix + "partenaire 3`" 
                 },
                /* {
                    name: "<:discord:606591042476703751> CYCLON:",
                    value: "Pour plus d'informations: ❱ `" + prefix + "partenaire 4`" 
                 }*/
            ],
            footer: {
                text: `${bot.user.username} | Version ${version}`,
                icon_url: bot.user.dynamicAvatarURL(null, 2048)
            }
        }});
     } else {
     let texte = args.join(" ");
     switch (texte) {
case "1": 
msg.channel.createMessage({embed: {
 color: 0x00FFFF,
 author: {
     name:  `🔱 | ${bot.user.username} | Partenaire`,
   icon_url: msg.author.avatarURL
   },
   fields: [
     {
         name: ":crown: Partenaire :",
         value: "❱ FairyZipaf#0991"
     },
       {
           name: ":bust_in_silhouette: Nom du Serveur :",
           value: "❱ Graphics Center's"
       },
       {
         name: ":bar_chart: Serveur :",
         value: "❱ https://discord.gg/2FmxPgZ"
     },
     {
         name: "<:discord:606591042476703751> Description :",
         value: `❱ Salut à toi ! \nJe te présente le serveur Graphics Center's qui est un serveur de graphisme. \nDans ce serveur il y a :\n\n:anger_right:Des salons textuelles\n\n:mega:Des salons vocaux\n\n:art:Des salons pour postés ses créations \n\n:milky_way:Des:salons pour demander des effets\n\n:newspaper:2Des salons pubs\n\n:robot:Des bots à disposition\n\n:bulb:Des grades de tous types `
   },
   ]
}});
break;
case "2": 
msg.channel.createMessage({embed: {
 color: 0xFFCC33,
 author: {
     name:  `🔱 | ${bot.user.username} | Partenaire`,
   icon_url: msg.author.avatarURL
   },
   fields: [
     {
         name: ":crown: Partenaire :",
         value: "❱ Ravriel#3452" 
     },
       {
           name: ":bust_in_silhouette: Nom du serveur :",
           value: "❱ Anarcube"
       },
       {
         name: ":bar_chart: Serveur :",
         value: "❱ https://discord.gg/nksEwQ2"
     },
     {
         name: "<:discord:606591042476703751> Description :",
         value: "❱ Bonjour / Bonsoir\n\nSi tu est un joueur de Minecraft cette pub pourrais **t'intéresser**. Connais tu le serveur __**Anarcube**__ ? Si non, tu vas bientôt le connaître dans ses moindres __détails__.\n\n```C'est quoi Anarcube ? ```\n\nAnarcube c'est un serveur minecraft __mini-jeux 1.8+__ en cours de **développement**.\n\n```Anarcube a-t-il un avenir ?```\n**Bien évidemment !** Notre staff est __*à votre écoute*__ et __*compétent*__ ! Notre solution d'hébergement est fiable à __**100%**__ et notre équipe a une détermination **incroyable** ! \n\n```Vous avez des idées ?```\nNous en avons __plein__ ! Un shop va bientôt être mis en place ainsi que des **grades déjà présent**. Mais vous pouvez également nous proposer __**vos idées**__ afin que le serveur __vous convienne le mieux__.\n\n ```Vous recrutez dans quels postes ?```\nLes recrutement sont __**ouvert**__ pour les postes :\n-Guide\n-Buildeur\n-Développeur\n-Youtubeur\n-Graphiste\n -Animateur"   
     }
   ]
}});
break;
case "3": 
msg.channel.createMessage({embed: {
 color: 0xFF9933,
 author: {
     name:  `🔱 | ${bot.user.username} | Partenaire`,
   icon_url: msg.author.avatarURL
   },
   fields: [
     {
         name: ":crown: Partenaire :",
         value: "❱ Astrorio_#2466 " 
     },
       {
           name: ":bust_in_silhouette: Nom du serveur :",
           value: "❱ Axanax"
       },
       {
         name: ":bar_chart: Serveur :",
         value: "❱  https://discord.gg/XMfvZKj"
     },
     {
         name: "<:discord:606591042476703751> Description :",
         value: "❱ Bienvenue à toi sur :sparkles: Axanax :sparkles: \n\nCe serveur est un serveur publicitaire et communautaire\nTu peux discuter, te faire des connaissances ou des amis.\nCe serveur à ouvert ses portes depuis peu.\n\n:sparkling_heart: Tu y trouveras dessus:\n\n:card_box: Un serveur propre et très bien ranger pour ta visibilité.\n:pushpin: Des channels pour tes publicités\n:robot: De nombreux bots pour ton amusement et ta protection.\n:no_entry_sign: Une sécurité renforcer plus que présente.\n:page_facing_up: Une liberté d'expression assez libres (bien sur sous règlement :smiley: )\n:tada: De nombreux giveaways.\n:fire: Serveur très conviviale et chaleureux.\n :link: De nombreux rôles disponible pour votre divertissement.\n\n|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|\n\n:mag: On recherche :mag: \n\n:globe_with_meridians: Des partenaires\n(Pas de règles précises)\n:police_car: Du Staff\n (Marketing, Animateur, Helpeur)\n\n:bar_chart: Objectif Actuel :bar_chart:" 
     }
   ]
}});
/* break;
case "4": 
bot.createMessage(msg.channel.id, {embed: {
 color: 0x0666CC,
 author: {
     name:  `🔱 | ${bot.user.username} | Partenaire`,
   icon_url: msg.author.avatarURL
   },
   fields: [
     {
         name: ":crown: Partenaire :",
         value: "❱ ๖̶ζ͜͡Xentophis#1468 "
     },
       {
           name: ":bust_in_silhouette: Nom du Serveur :",
           value: "❱ CYCLON"
       },
       {
         name: ":bar_chart: Serveur :",
         value: "❱  https://discord.gg/aPwSAay"
     },
     {
         name: "<:discord:606591042476703751> Description :",
         value: "❱ ╔═════════════════════════╗\n**__CYCLON__**\n╚═════════════════════════╝\n**• Salut ! Je te présente un serveur Discord communautaire.**\n **• Le but du serveur est de rassembler tout type de communauté.**\n**• Le serveur a pour ambition de ne cesser de grandir.**\n**• Le serveur a à son actif plus de 100 membres.**```\n\n⟪📌⟫ Présentation du contenu du serveur :```\n\n**• Une communauté sympa.**\n**• Des bots tel que MEE6, Dyno, Koya...**\n**• Des grades pour les Youtubeurs, streameurs, développeurs, graphistes...**\n**• Un serveur sécurisé.**\n**• De nombreux salon bien rangés par catégories.**\n**• Des évents et giveaways réguliers.**\n**• Des sondages sympas.**\n**• Un système de levels pour les plus actifs.**\n**• Vous pouvez gagner des grades en invitant des personnes.**\n**• Un staff actif et à l'écoute.**\n**• Nous possédons un salon PUB !**```\n\n⟪🏹⟫ Autre chose :```\n\n**• Nous sommes ouverts aux partenariats et aux échanges publicitaires.**\n\n**Plus d'infos sur place !**\n**À bientôt sur le serveur 😁**"
     },
   ]
}});*/
break;
default:
msg.channel.createMessage("<:redtick:586885291659231232> Aucun partenariat répertorié à ce nom.");
     }
 }}


 if (msg.content.toLowerCase() === `${prefix}candidature`) {
    return msg.channel.createMessage({embed: {
         title: `**Commande:** ${prefix}candidatureoui`,
         description: `**Description:** Cette commande est utile si vous souhaitez faire une candidature pour rentrer dans le staff du serveur.\n**Usage:** ${prefix}candidatureoui \n**Exemples:** ${prefix}candidatureoui`
     }});
 } 
 if (commande === `${prefix}candidatureoui`) { 
 if (msg.author.id !== "322492552601272320") { 
     let Staff = msg.channel.guild.roles.find(role => role.name.includes("Staff"));
         let roleStaff = msg.member.roles.some(role => role.includes(Staff.id));
if (permAdmin || roleStaff) {
 return msg.channel.createMessage("<:redtick:586885291659231232> Cette commande est faîte pour poster sa candidature pour rentrer dans le staff. Si je ne m'abuse, tu en fais déjà partit ! <:dave:586885060578508810>");
}
 }
 let roleCandid = msg.channel.guild.roles.find(role => role.name.includes("Candidature"));
 let categorieCandid = msg.channel.guild.channels.find(channel => channel.type === 4 && channel.name === "Candidature");
 if (!roleCandid || !categorieCandid) {
     return msg.channel.createMessage('<:redtick:586885291659231232> Veuillez contacter un administrateur, je ne trouve pas le rôle/la catégorie "Candidature".')
 }
 let roleMembreCandid = msg.member.roles.some(role => role.includes(roleCandid.id));
 if (roleMembreCandid) {
     return msg.channel.createMessage("<:redtick:586885291659231232> Un salon a déjà été créé pour votre candidature. Pour le fermer, contactez un administrateur.");
 }
 let Channel = msg.channel.id;
 let User = msg.member.id;
 let server = msg.channel.guild.id;
 let userMention = msg.author.mention;
msg.channel.guild.createChannel(msg.member.username, 0, `${msg.member.name} a créé un salon pour faire sa candidature.`, {topic: msg.author.id ,parentID: categorieCandid.id}).then(channel => {
    bot.createMessage(channel.id, {content: userMention + " ```fix\nVoici le format demandé pour votre candidature:\n- Prénom, âge\n- Motivation (pourquoi voulez-vous postuler?)\n- Grade auquel vous postulez\n- Nombre de serveur ou vous êtes dans le staff en ce moment même\n- Une petite présentation qui vous résume vous et vôtre mentalité```", embed: {title: "Pour clôturer cette candidature (salon), cliquez sur la réaction <:redtick:586885291659231232>"}}).then(msg => {
        msg.addReaction("redtick:586885291659231232");
    }); 
    /*return optionnel*/ bot.editChannelPermission(channel.id, User, 1024, false, "member");
bot.editChannelPermission(channel.id, server, false, 1024, "role");
});
msg.channel.createMessage(`<:greentick:586885261170966528> ${msg.author.mention} un salon a été créé pour ta candidature.`);
msg.member.addRole(roleCandid.id, `${msg.member.mention} a bien reçu le rôle.`);
}


if (commande === `${prefix}whois`) {
    cooldown.run(msg, 5000, 3000);
    let findRoleStaff = msg.channel.guild.roles.find(role => role.name.toLowerCase().includes("staff"));
    let roleStaff = msg.member.roles.some(role => role.includes(findRoleStaff.id));

    let user1 = msg.content.toLowerCase().split(" ")[1];
    let findUserID = msg.channel.guild.members.find(member => member.id.includes(user1));
    let findUserMentions = msg.mentions.find(user => user.mention.includes(user1));
    let findUserMember = msg.channel.guild.members.find(member => member.mention.includes(user1));
    let findUserName = msg.channel.guild.members.find(member => member.username.toLowerCase().startsWith(user1));
   
    if (args.length === 0) { 
        user1 = msg.member;
    } else if (findUserID) {
        user1 = findUserID;
    } else if (findUserMentions) {
       findUserMentions = msg.channel.guild.members.find(member => member.id.includes(findUserMentions.id));
           user1 = findUserMentions;
       } else if (findUserMember) {
           user1 = findUserMember
       } else if (findUserName) {
           user1 = findUserName;
       } else { //sinon return error
        return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas l'utilisateur.")
    }

     let mes_roles = "";
    let userRoles = user1.roles;
    let tabRoles = userRoles.forEach(mon_role => {
         mes_roles += `<@&${mon_role}> `;
     });
   //  let ah = user.roles.map(roles => roles.mention); non valable car roles revois un tableau et non une collection
    // let joined = new Date(user1.joinedAt);
   //  let registered = new Date(user1.createdAt);
   let findMembreAuthor = bot.users.find(user => user.id.includes(user1.id));
   let formatAuthor = findMembreAuthor.dynamicAvatarURL(null, 2048);
   if (formatAuthor === findMembreAuthor.dynamicAvatarURL("jpg", 2048)) {
       formatAuthor = findMembreAuthor.dynamicAvatarURL("png", 2048); 
   }
   let msgEmbed = {embed: {
       timestamp: new Date (),
       thumbnail: {
           url:  formatAuthor
         }, 
       author: {
           name: `${user1.username}#${user1.discriminator}`,
           icon_url: formatAuthor
       },
       description: user1.mention,
       fields: [
          {
               name: "Status",
               value:  user1.status,
               inline: true
          },
           {
               name: "A rejoin le",
               value: moment.utc(user1.joinedAt).add("2", "hours").format('LL à HH:mm'),//.toUTCString(),//`${joined.toDateString()}, ${joined.getHours()}:${joined.getMinutes()} H`,
               inline: true
           },
           {
               name: "Enregistré le",
               value:  moment.utc(user1.createdAt).add("2", "hours").format('LL à HH:mm'),//`${registered.toDateString()}, ${registered.getHours()}:${registered.getMinutes()} H`,
               inline: false
           },
           {
               name: `Roles [${user1.roles.length}]`,
               value: user1.roles.length === 0? "Aucun" : mes_roles
           },
       ],
       footer: {
           text: `ID: ${user1.id}`
       }
   }};
   if (user1.roles.some(role => role.includes(findRoleStaff.id)) || user1.permission.has("administrator")) {
       let membreStaff = {name: "Staff", value: `Membre du Staff de ${msg.channel.guild.name}`};
       msgEmbed.embed.fields.push(membreStaff);
   } else if (user1.bot) {
       let membreBot = {name: "Bot", value: user1.bot};
       msgEmbed.embed.fields.push(membreBot);
   }
   return msg.channel.createMessage(msgEmbed);
}

}
