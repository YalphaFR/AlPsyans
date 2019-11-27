const discordapierror = require("discord.js").DiscordAPIError;
const snekfetch = module.require("snekfetch");
const talkedRecently = new Set();
const moment = module.require("moment");
moment.locale("Fr");
let configBot = require("./package.json");
const cooldown = require("./cooldown");
const prefix = configBot.prefix;
const version = configBot.version;
const Owner = "Yalpha_ KZ | 🇫🇷 ™#7270";

let ici; 
     function bingo () {
          let nombre = Math.floor(Math.random() *ici) + 1;
          return nombre;
      }
 let nombre;
      let recompense;
     let idChannel;
     let salon = "changelog-ap";
     let salonPub = "alpsyanspub";

module.exports.run = async (bot, colorRoleBot, msg, args, commande, permAdmin) => {

if (commande === `${prefix}mp`) {
    let roleStaff = msg.member.roles.some(role => ["563831713617150012"].includes(role));
    if (!permAdmin && !roleStaff) return;  
if (args.length === 0) {
     return msg.channel.createMessage({embed: {
        title: `Commande: ${prefix}mp`,
   description: `**Description:** envoie un message privé  à un utilisateur.\n**Usage:** ${prefix}mp [@user/userID] [texte]\n**Exemples:**\n${prefix}mp 322492552601272320 Uptade au sein du serveur, pour plus d'information....\n${prefix}mp @Yalpha#0001 Nous te surveillons, ne fais pas de bêtise !....`
 }});

} else { 
 args = msg.content.split(" ").slice(2);
 let texte = args.join(" ");  
let user = msg.content.split(" ")[1];
 let userId;
let user_1 = msg.channel.guild.members.find(member => user.includes(member.id));

/* if (user_1) {
   if (user.length === 21) {
userId = user.slice(2,20);
   } else if (user.length === 22) {
    userId = user.slice(3, 20);
    userId = user; 
} else {
    userId = user;
   }*/
   if (user_1) {
       userId = user_1;
} else {
 return msg.channel.createMessage(`<:redtick:586885291659231232> Je ne trouve pas l'utilisateur ${user}`);
} 
      if (texte.length <= 1) {
return msg.channel.createMessage("<:redtick:586885291659231232> Veuillez indiquer la raison de votre message");
} 
        msg.delete();
       // try {
           let msgError;
           //msg de l'utilisateur (utilisé pour ne pas dupliquer une variable)
        await  bot.getDMChannel(userId.id).then(dm => dm.createMessage({embed: {
             //   title: "Nouveau message reçu !",
             author: {
                 name: "Nouveau message reçu !",
                icon_url: "https://cdn.discordapp.com/emojis/602145291881283605.png?v=1"
             },
                color: 0xCCCCCC,
                thumbnail: {
                url: msg.member.guild.iconURL
                },
                fields: [
                    {
                    name: "Information:",
                    value: `**Staff**`,
                    inline: true
                },
                {
                    name: "En provenance du serveur:",
                    value: msg.member.guild.name,
                    inline: true
                },
                {
                    name: "Message:",
                    value: texte
                }
                ]
            }})).catch(e => {
                if (e.code === 50007) {
                 return msgError = "<:redtick:586885291659231232> Cet utilisateur a bloqué le bot.";
                } else {
                   return msgError = `<:redtick:586885291659231232> Le message n'a pas pus être envoyé à l'utilisateur ${user}`;
                }});
      
        if (msgError === undefined) {
    return msg.channel.createMessage("<:greentick:586885261170966528> Le message a bien été envoyé.");
    } else {
return msg.channel.createMessage(msgError);
    }
    }}
    if (commande === `${prefix}lockdown`) {
        let roleStaff = msg.member.roles.some(role => ["563831713617150012"].includes(role));
      if (!permAdmin && !roleStaff) {
             return; 
      } /*if (msg.channel.guild.id !== "554706628415324170") {
              return bot.createMessage(msg.channel.id, "<:redtick:586885291659231232> Valable dans le serveur AlPsyans  ");
           }*/
            msg.delete();
            try {
               const permMessage = msg.channel.permissionOverwrites.get(msg.channel.guild.id).has("sendMessages");
            } catch (e) {
                return msg.channel.createMessage("<:jarvis:588791018175070258> Veuillez modifier les permissions sendMessages du channel.");
            }
      const permMessage = msg.channel.permissionOverwrites.get(msg.channel.guild.id).has("sendMessages");
if (permMessage) {
           bot.editChannelPermission(msg.channel.id, msg.channel.guild.id, false, 2048, "role");
       } else {
           bot.editChannelPermission(msg.channel.id, msg.channel.guild.id, 2048, false, "role");
       }
         msg.channel.createMessage(`Channel **${msg.channel.name}** ${permMessage ? "vérouillé" : "dévérouillé"} avec succès. <:greenti:609029530157580298>`);
   }

   if (commande === `${prefix}bingo`) { 
        const guild_alpsyans = bot.guilds.find(guild => guild.id.includes("554706628415324170"));
        if (args.length === 0) {
        if (msg.channel.guild.id !== "554706628415324170") {
           return msg.channel.createMessage(`<:redtick:586885291659231232> Cette commande n'est valable que pour le staff de ${guild_alpsyans.name}`)
       }

        let permAdmin = msg.member.permission.has("administrator");
    let roleStaff = msg.member.roles.some(role => ["563831713617150012"].includes(role));
           
    if (!permAdmin && !roleStaff) {
        return;
        }

return msg.channel.createMessage({embed: {
    title: `Commande: ${prefix}bingo`,
    description: `**Description:** commence une partie de bingo.\n**Usage:** ${prefix}bingo [vMax] [récompense]\n**Exemples:**\n${prefix}bingo 150 Le rôle SUPREME`
}});
} else { 
        if (msg.channel.guild.id !== "554706628415324170") {
            if (msg.author.id !== "322492552601272320") {
               return msg.channel.createMessage(`<:redtick:586885291659231232> Cette commande n'est valable que pour le staff de ${guild_alpsyans.name}`)
      
            }
        }
        let permAdmin = msg.member.permission.has("administrator");
    let roleStaff = msg.member.roles.some(role => ["563831713617150012"].includes(role));

            if (!permAdmin && !roleStaff) {
               return;
     }

     let maximum = msg.content.split(" ")[1];
     ici = maximum;
      args = msg.content.split(" ").slice(2);
      let recomp = args.join(" ");  // .replace(/\s/g, "")

     if (isNaN(maximum) || maximum <= 0) {
return msg.channel.createMessage("<:redtick:586885291659231232> Nombre invalable");
        } else if (maximum > 1000000) {
        return msg.channel.createMessage("<:redtick:586885291659231232> Le chiffre doit être inférieur ou égal à **1M** !");
        }
idChannel = msg.channel.id;
    recompense = recomp;
    nombre = bingo();

    msg.channel.createMessage({embed: {
        color: colorRoleBot,//Math.floor(Math.random() * 16777214) + 1, 
                    timestamp: new Date(),
                   footer: {
                       text: msg.member.guild.name,
                       icon_url: "https://images-ext-2.discordapp.net/external/EVBGrbOZaxZySW-ke3w7K1gbwNxHSJYA8b_lyUZMfZE/https/cdn.discordapp.com/avatars/221498918943326208/a_07373fd60d410df0ccf7d7d391f4228c.gif",
                   },
                    thumbnail: {
                    url: "https://previews.123rf.com/images/imlydia/imlydia1710/imlydia171000024/87943766-bingo-de-vecteur-ensemble-de-boules-de-nombre-color%C3%A9-de-loterie.jpg"
                    },
                title: "Bingo",
                description: "Le premier joueur qui trouve le nombre mystère compris entre les valeures suivantes gagnera le rôle",
            fields: [
                { 
                name: "minimum",
                value: "0",
                inline: true
            },
            {
                name: "Maximum",
                value: maximum,
                inline: true

            }
        ]
 }});
}
}

if (Number(msg.content) === nombre) {
    if (msg.channel.id !== idChannel) {
         return; 
    }
msg.channel.createMessage({embed: {
color: colorRoleBot,//Math.floor(Math.random() * 16777214) + 1, 
timestamp: new Date(),
footer: {
   text: msg.member.guild.name,
   icon_url: "https://images-ext-2.discordapp.net/external/EVBGrbOZaxZySW-ke3w7K1gbwNxHSJYA8b_lyUZMfZE/https/cdn.discordapp.com/avatars/221498918943326208/a_07373fd60d410df0ccf7d7d391f4228c.gif",
},
thumbnail: {
url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS91mpZQHe_olPkcilb98rqYyXBkQC-dR-uDlFRoDbQqmvB6Ho"
},
fields: [
{
name: "Bingo:",
value: `**${msg.author.username}${msg.author.discriminator}** a trouvé le nombre mystère (${nombre}) !:tada:`
},
{
name: "Gagnant:",
value: `**${msg.author.username}${msg.author.discriminator}**`,
inline: true
},
{
name: "Récompense:",
value: `${recompense ? recompense : "aucune"}`,
inline: true
}
]
}})
bot.editChannelPermission(msg.channel.id, msg.channel.guild.id, 65536 /*+ 1024*/, 2048 + 1, "role");
return nombre = "";
}

if (commande === `${prefix}nombre`) {  
const guild_alpsyans = bot.guilds.find(guild => guild.id.includes("554706628415324170"));
if (msg.channel.guild.id !== "554706628415324170") {
   if (msg.author.id !== "322492552601272320") {
       return msg.channel.createMessage(`<:redtick:586885291659231232> Cette commande n'est valable que pour le staff de ${guild_alpsyans.name}`)
}}
let roleStaff = msg.member.roles.some(role => ["563831713617150012"].includes(role));//this  let roleStaff = msg.member.roles.some(role => role.includes("563831713617150012")); is good dans ce cas ci!
if (!permAdmin && !roleStaff) {
return;
}
//console.log(nombre);
if (isNaN(nombre) || (nombre <= 0) && (nombre <= 1000000)) {
//if ((nombre >= 0) && (nombre <= 1000000)) {
return msg.channel.createMessage("Il n'y a aucun bingo en cours ."); 
} else {
   return msg.channel.createMessage(`Le nombre à trouver est: **${nombre}** `);
}
}


    if (commande === `${prefix}upload`) {
        if (msg.channel.guild.id !== "554706628415324170") return; 
        if (!permAdmin) return;
        
        if (args.length === 0) {
        return msg.channel.createMessage({embed: {
            title: `**Commande:** ${prefix}upload`,
            description: `**Description:** Envois les mises à jours effectuées sur le bot le jour même dans le salon changelog.\n**Usage:** ${prefix}upload [texte]\n**Exemples: ${prefix}upload **`
    }});
    } else {
    const guild_alpsyans = bot.guilds.find(guild => guild.id.includes("554706628415324170"));
    let channel =  msg.channel.guild.channels.find(guildchannel => guildchannel.name.includes(salon.toLowerCase()));

        if (!channel) {
        return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas le salon `" + salon +"`");  
        } 
        args = msg.content.split(" ").slice(1);
        let texte = args.join(" ");
       msg.delete();
       msg.channel.createMessage("<:greentick:586885261170966528> Le message a bien été envoyé.");

       let guildSalon = bot.guilds.filter(guild => guild.channels.find(channel => channel.name.includes(salon)));
       let tabGuildSalon = [];

      await guildSalon.forEach(guild => {
tabGuildSalon.push(guild.channels.find(channel => channel.name.includes(salon)));
       });

       tabGuildSalon.forEach(channel => {
           return  bot.createMessage(channel.id, {embed: {     
               color: colorRoleBot,
               title: "<:greenti:609029530157580298> ❱ `Patch du " + moment.utc(msg.createdAt).add("2", "hours").format('LL')/*+ jour + "/" + mois + "/" + annee*/ + "`", 
               description: texte,
               timestamp: new Date(),
               footer: {
                   text: `${msg.channel.guild.name} | Version: ${version}`,
                   icon_url: bot.user.dynamicAvatarURL(null, 2048)
               }
           }});
       });
    }
   }

    


      

    if (commande === `${prefix}ban`) {
        let roleModo = msg.member.roles.find(role => ["563832473071648771"].includes(role));
    if (!permAdmin && !roleModo) return;

    if (args.length === 0) {
return msg.channel.createMessage({embed: {
    title: `**Commande:** ${prefix}ban`,
    description: `**Description:** Bannni un utilisateur, raison optionnelle.\n**Usage**: ${prefix}ban [user/userId] [raison]\n**Exemple:** ${prefix}ban Yalpha#0001 dégage !`
}});

} else {
let User = msg.content.toLowerCase().split(" ")[1];
let userId = msg.channel.guild.members.find(member => User.includes(member.id));

if (!userId) {
    return msg.channel.createMessage(`<:redtick:586885291659231232> Je n'ai pas trouvé l'utilisateur ${User}`);
} 

let UserRole = userId.roles.some(role => ["563831713617150012"].includes(role));
let UserPerm = userId.permission.has("administrator");
if (UserRole || UserPerm) {
    return msg.channel.createMessage(`<:redtick:586885291659231232> Je n'ai pas la permission de bannir cet utilisateur.`)
} 

/*else { 
if (User.length === 18) {
    User;
} else if (User.length === 22) {
    let userId = User.slice(3, 20);
    User = userId; 
} else { 
 let user = msg.content.toLowerCase().split(" ")[1];
 User = user.slice(2, 20);
}}*/

args = msg.content.toLowerCase().split(" ").slice(2);
let texte = args.join(" ");
let Guild = msg.channel.guild.id;
let findStaff = msg.channel.guild.channels.find(channel => channel.name.includes("staff"));
try { 
   msg.delete();
    bot.getDMChannel(userId.id).then(dm => dm.createMessage(`Tu as été banni du serveur **${msg.channel.guild.name}** ! Raison: ${!texte? "Inconnue" : `**${texte}**`}`)).then(msg => 
    bot.banGuildMember(Guild, userId.id, 0, texte));
    msg.channel.createMessage(`<:greentick:586885261170966528> ${userId.username}#${userId.discriminator} a été banni.`);
} catch (e) {
    return msg.channel.createMessage("<:redtick:586885291659231232> Je n'ai pas pu ban l'utilisateur.");
}
if (findStaff) {
return bot.createMessage(findStaff.id, {embed: {
   author: {
name: `Info | Ban | ${userId.username}#${userId.discriminator}`,
icon_url: userId.avatarURL
   },
   color: 0xFF0000,
   timestamp: new Date (),
   fields: [
       {
           name: "User",
           value: userId.mention,
           inline: true
       },
       {
           name: "Modérateur:",
           value: msg.member.mention,
           inline: true
       },
       {
           name: "Raison:",
           value: !texte? "Aucune" : texte,
           inline: true
       }
   ],
   footer: {
       text: `ID: ${userId.id}`
   }
}});
}
}}

if (commande === `${prefix}kick`) {
    let roleModo = msg.member.roles.find(role => ["563832473071648771"].includes(role));
 if (!permAdmin && !roleModo) return;
if (args.length === 0) {
return msg.channel.createMessage({embed: {
     title: `**Commande:** ${prefix}kick`,
     description: `**Description:** Kick un utilisateur du serveur, raison optionelle.\n**Usage:** ${prefix}kick [user] [raison]\n**Exemple:** ${prefix}kick @Yalpha#0001 Ne reviens pas !`
 }}); 
} else {
 let User = msg.content.toLowerCase().split(" ")[1];
 let findUser = msg.channel.guild.members.find(member => User.includes(member.id));
//  let findUser = "ah";
 if (!findUser) {
     return msg.channel.createMessage(`<:redtick:586885291659231232> Je ne trouve pas l'utilisateur ${User}`);
 }
 let RoleStaff = findUser.roles.some(role => ["563831713617150012"].includes(role));
 let UserPerm = findUser.permission.has("administrator");
 if (RoleStaff || UserPerm) {
     return msg.channel.createMessage("<:redtick:586885291659231232> Je n'ai pas la permission de kick cet utilisateur !")
 }
 args = msg.content.toLowerCase().split(" ").slice(2);
 let texte = args.join(" ");
 let Guild = msg.channel.guild.id
let findStaff = msg.channel.guild.channels.find(channel => channel.name.includes("staff"));
 try {
     msg.delete();
   bot.getDMChannel(findUser.id).then(dm => dm.createMessage(`Tu as été kick du serveur **${msg.channel.guild.name}** ! Raison: ${!texte? "Inconnue" : `**${texte}**`}`)).then(msg => 
   bot.kickGuildMember(Guild, findUser.id, 0, texte)); 
   msg.channel.createMessage(`<:greentick:586885261170966528> ${findUser.username}#${findUser.discriminator} a été kick.`); 
 } catch (e) {
     return msg.channel.createMessage("<:redtick:586885291659231232> Je n'arrive pas à kick l'utilisateur.")
 }
 if (findStaff) {
    bot.createMessage(findStaff.id, {embed: {
        author: {
    name: `Info | Kick | ${findUser.username}#${findUser.discriminator}`,
    icon_url: findUser.avatarURL
        },
        color: 0xFF0000,
        timestamp: new Date (),
        fields: [
            {
                name: "User",
                value: findUser.mention,
                inline: true
            },
            {
                name: "Modérateur:",
                value: msg.member.mention,
                inline: true
            },
            {
                name: "Raison:",
                value: !texte? "Aucune" : texte,
                inline: true
            }
        ],
        footer: {
            text: `ID: ${findUser.id}`
        }
    }}); 
 } 
}}



if (commande === `${prefix}welcome`) {
 if (msg.member.id !== "322492552601272320") return;
 if (args.length === 0) {
  return msg.channel.createMessage({embed: {
     title: `**Commande:** ${prefix}welcome`,
     description: `**Description:** Permet de faire une annonce avec le bot.\n**Usage:** ${prefix}welcome [channelName/channelID/ici] [msgObj]\n**Exemples:** ${prefix}welcome ici "fields": [{"name": "Blabla", "value": "blibli"}]`
 }});
} else {
  let channelID = msg.content.toLowerCase().split(" ")[1];
  let findChannel = msg.channel.guild.channels.find(channel => channelID.includes(channel.id));
  
  if (findChannel) {
     channelID = findChannel.id;
  } else if (!findChannel) {
      if (channelID === "ici") {
          channelID = msg.channel.id
      } else {
         return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas le salon1.");
      }
    }
  args = msg.content.split(" ").slice(2);
  let texte = args.join(" ");

 return bot.createMessage(channelID, JSON.parse(`${texte}`)).catch(e => {
    if (e.code === 50035) {
    return msg.channel.createMessage("<:redtick:586885291659231232> La couleur précisée n'est pas valable..\n\nErreur:" + e);
    } else {
  return msg.channel.createMessage("<:redtick:586885291659231232> Veuillez respecter le format demandé.\n\nErreur:" + e);
    }
});
}}


if (commande === `${prefix}modifie`) {
 if (msg.member.id !== "322492552601272320") return;
if (args.length === 0) {
  return msg.channel.createMessage({embed: {
     title: `**Commande:** ${prefix}modifie`,
     description: `**Description:** Permet de modifier un message avec le bot.\n**Usage:** ${prefix}modifie [channelName/channelID/ici] [messageID] [msgObj]\n**Exemples:** ${prefix}modifie 586446064853319690 604988788229275658 "fields": [{"name": "Blabla", "value": "blibli"}]`
 }});

} else {
  let channelID = msg.content.split(" ")[1];
  let messageID = msg.content.split(" ")[2];
 let findChannel = msg.channel.guild.channels.find(channel => channel.id.includes(channelID));

 if (findChannel) {
    channelID = findChannel.id;
} else if (!findChannel) {
 if (channelID === "ici") {
         channelID = msg.channel.id;
 } else {
         return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas le salon.");
     }
    }
    findChannel = msg.channel.guild.channels.find(channel => channel.id.includes(channelID));
   // let findMessage = findChannel.messages.find(message => message.id.includes("615600736235028495"));

  /*  if (!findMessage) {
        return bot.createMessage(msg.channel.id, "<:redtick:586885291659231232> Je ne trouve pas le message.");
    } */
    let findAuthor = [];
    let getMessage = await findChannel.getMessage(messageID).then(message => {
findAuthor.push(message.author.id);
    });

     if (findAuthor[0] !== "585477543935868938") {
        return bot.createMessage(msg.channel.id, "<:redtick:586885291659231232> Je ne peux modifier que mes messages.");
    }

  args = msg.content.split(" ").slice(3);
  let texte = args.join(" ");
  
  
/*  bot.editMessage("586444277891072013", "589508151326408706", {embed:{
   // bot.createMessage(channelID, {embed: { 
     color: 16776958,
     thumbnail: {
url: "https://cdn.discordapp.com/emojis/586884886242131980.png?v=1"
     },
     author: {
name: "Condition d'Utilisation du Discord",
icon_url: "https://images-ext-1.discordapp.net/external/pQztmCuqlpUKyUw_QyJCNiiQeN7hU-88Z1ToOr0_PSQ/https/cdn.discordapp.com/emojis/582473378183643137.gif"
     },
     description: "Toute **Demande d'Aide** ou **rapport d’utilisateur** doit être envoyé à <@585477543935868938>.\n\nToute **plainte du personnel** doit être envoyée à <@585477543935868938>.\nIls seront traités par <@&563831441725587486> ou <@&589867154694733836>.\n\n**__Ignorer les règles ne vous exclus pas à des sanctions.\n\nVous êtes censé avoir lu et compris toutes les règles énumérées ci-dessous:__**\n\n",
     fields: [
         {
             name: "• Tolérance zéro pour le contenu **NSFW/NSFL**.",
             value: "(Cela inclut les noms d'utilisateurs et les avatars.)\n\nCela inclut également les publications qui glorifient la violence telles que: Mort/Viol/Meurtre/Fusillade/Attentat et autres sujets inappropriés.",
             inline: false

         },
         {
             name: "• Pas de **spam**.",
             value: "Cela inclut les commandes, les émoticônes, le texte, les images, et les vidéos.\n//Exeption dans le salon <#586446553024299009> (**qui a ses propres règles à connaître !**)"
         },
         {
             name: "• Aucune **publicité** ou **promotion** non sollicitée sur le serveur ou les sous-ministres.",
             value: "Cela inclut les autres robots, les serveurs Discord, les réseaux sociaux.\n//Les salons pubs font exeption à cette règle."
         },
         {
             name: "• Le **respect** est une exigence.",
             value: "Il n'y a aucune tolérance pour les drames, le racisme, les discours de haine ou la haine envers tout utilisateur.\nNous sommes bras ouvert à chaque personne ici.\n**L'humour est aussi le bienvenue, l'humour noir aussi mais à consommer avec modération.**"
         },
         {
             name: "• Le **Français** est la langue principale de ce serveur.",
             value: "Toutes autres langues doivent passer par les canaux internationaux."
         },
         {
             name: "• Les **pings fantômes** ou les **mentions froides/aléatoires** ne sont pas autorisés.",
             value: "ping fantôme = Mentionner un utilisateur puis effacer votre message.\nping aléatoire = Mention d'un utilisateur qui n'a pas été actif sur le serveur ou le canal.\nCela inclut le personnel ping dans les canaux de support."
         },
         {
             name: "• Toute **usurpation d'identité** entraînera un bannissement.",
             value: "Cela inclut l'emprunt d'identité d'autres utilisateurs du personnel et de tout bot."
         },
         {
             name: "• Déclencher l'Automod n'est pas toléré.\n\n• Le déclenchement d'Automod à trois reprises entraînera un mute.\n\n• Contourner l'Automod entraînera un mute ou un ban après avoir été averti.\n\n• Les pseudos doivent être faciles à lire mentionnable/appropriés.",
             value: "Les noms seront changés à la discrétion du personnel."
         },
         {
             name: "<:DaveHammer:609024347419443230> Les **modérateurs** peuvent modérer comme bon leur semble, en toute discrétion.",
             value: "Rien n'est parfait, cela inclut notre liste de règles. Faîtes preuve de bon sens et ne vous plaignez pas lorsque l'équipe du staff veille à ce que le serveur reste calme et sécurisé."
         }
     ]
}});*/
bot.editMessage(channelID, messageID, JSON.parse(`${texte}`)).catch (e => {
    return msg.channel.createMessage("<:redtick:586885291659231232> Veuillez respecter le format demandé. " + e);
});
  return msg.channel.createMessage("<:greentick:586885261170966528> Le message a bien été modifié.");
}}


if (commande === `${prefix}annonce`) {
 if (!permAdmin) return; 
 if (args.length === 0) {
  return msg.channel.createMessage({embed: {
     title: `**Commande:** ${prefix}annonce`,
     description: `**Description:** Permet de faire une annonce avec le bot.\n**Usage:** ${prefix}annonce [channelName/channelID/ici] [texte]\n**Exemples:** ${prefix}annonce #annonce ceci est une annonce`
 }});

} else {
let channelID = msg.content.toLowerCase().split(" ")[1];
let findChannel = msg.channel.guild.channels.find(channel => channelID.includes(channel.id));
if (findChannel) {
  channelID = findChannel.id;
} else if (!findChannel) {
  if (channelID === "ici") {
      channelID = msg.channel.id;
  } else {
      return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas le salon3.");
  }
}
args = msg.content.split(" ").slice(2);
let texte = args.join(" ");

try {
 return bot.createMessage(channelID, {embed: {
     color: 0xddb1ff,
     timestamp: new Date(),
     description: texte
 }})
} catch (e) {
 return msg.channel.createMessage("<:redtick:586885291659231232> Veuillez respecter le format demandé.");
}
return msg.channel.createMessage("<:greentick:586885261170966528> L'annonce a bien été envoyée.");
}}

if (commande === `${prefix}package`) {
 if (msg.channel.guild.id === "554706628415324170") return;
 if (!permAdmin) return;

if (msg.channel.guild.id === "554706628415324170") {
     return msg.channel.createMessage("<:redtick:586885291659231232> Pas besoin d'installer le package sur ce serveur.")
 }
 let i = 0;
 let roleStaff = msg.channel.guild.roles.find(role => role.name.includes("Staff"));
 let roleModo = msg.channel.guild.roles.find(role => role.name.includes("Modérateur"));
 let roleHelper = msg.channel.guild.roles.find(role => role.name.includes("Support"));
 let roleAdmin = msg.channel.guild.roles.find(role => role.name.includes("Administrateur"));
 let roleCandid = msg.channel.guild.roles.find(role => role.name.includes("Candidature"));
 let categorieCandid = msg.channel.guild.channels.find(channel => channel.type === 4 && channel.name === "Candidature");
 let channelStaff = msg.channel.guild.channels.filter(channel => channel.type === 0);
let channelStaff1;
channelStaff.forEach(channel => {
channelStaff1 = channelStaff.find(channel => channel.name.toLowerCase().includes("staff"));
});
//console.log(channelStaff1);
 if (!roleStaff) {
     i ++;
     msg.channel.createMessage("<:greentick:586885261170966528> Rôle staff créé.");
 bot.createRole(msg.channel.guild.id, {name: "Staff", hoist: 1, mentionable: 0, reason: "package"});
} if (!roleModo) {
i ++;
msg.channel.createMessage("<:greentick:586885261170966528> Rôle Modérateur créé.");
bot.createRole(msg.channel.guild.id, {name: "Modérateur", hoist: 0, mentionable: 0, reason: "package"});
} if (!roleHelper) {
i ++;
msg.channel.createMessage("<:greentick:586885261170966528> Rôle Support créé.");
bot.createRole(msg.channel.guild.id, {name: "Support", hoist: 0, mentionable: 0, reason: "package"});
} if (!roleAdmin) {
i ++;
msg.channel.createMessage("<:greentick:586885261170966528> Rôle Administrateur créé.");
bot.createRole(msg.channel.guild.id, {name: "Administrateur", hoist: 1, mentionable: 0, reason: "package"});
} if (!roleCandid) {
i ++;
msg.channel.createMessage("<:greentick:586885261170966528> Rôle candidature créé.");
bot.createRole(msg.channel.guild.id, {name: "Candidature", hoist: 0, mentionable: 0, reason: "package"});
} if (!categorieCandid) {
i ++;
msg.channel.createMessage("<:greentick:586885261170966528> Catégorie Candidature créée.");
bot.createChannel(msg.channel.guild.id, "Candidature", 4, "package");
} if (!channelStaff1) {
i ++;
msg.channel.createMessage("<:greentick:586885261170966528> Channel Staff créée.");
bot.createChannel(msg.channel.guild.id, "Staff", 0, "package");
} 
return msg.channel.createMessage(i === 0? "<:redtick:586885291659231232> Le package est déjà installé." : "<:greentick:586885261170966528> Package installé.")
}


if (commande === `${prefix}alpsyans`) {
    let staffAp = bot.guilds.find(guild => guild.id === "554706628415324170").roles.find(role => role.id === "563831441725587486" || role.id === "586886742364389376" || role.id === "563832473071648771" || role.id === "598486232468684800");
      
    if (msg.member.id !== "322492552601272320" || !msg.member.roles.some(role => staffAp.id)) return;
     else if (msg.channel.guild.id === "554706628415324170") {
        return msg.channel.createMessage("<:redtick:586885291659231232> la commande n'est pas disponible ici");
    }
    let staffAlpsyans = msg.channel.guild.roles.find(role => role.name.includes("Staff AlPsyans"))
    if (staffAlpsyans) {
        if (msg.member.roles.some(role => role.includes(staffAlpsyans.id))) {
            return msg.channel.createMessage("<:redtick:586885291659231232> Tu as déjà été reconnu. :eyes:");
        }
    }
    let botStaff = msg.channel.guild.roles.find(role => role.name.includes("Staff AP"));
    if (!botStaff) {
      await  bot.createRole(msg.channel.guild.id, {name: "Staff AlPsyans", color: colorRoleBot, hoist: 1, mentionable: 0, reason: "package"}).then(role => {
            botStaff = role;
            //console.log(botStaff1);
        });
    }
    let roleAlspyans = msg.channel.guild.roles.find(role => role.name.includes("AlPsyans"));
   /*if (roleAlspyans.position < botStaff.position || !roleAlspyans.permissions.has("manageRoles") && !roleAlspyans.permissions.has("administrator")) {
        return msg.channel.createMessage("<:redtick:586885291659231232> Je ne peux pas mettre le rôle à cet utilisateur. S'il vous plait vérifiez mes permissions et la position de mon rôle.");
    }*/
  // console.log(roleAlspyans.position);
  let msgError;
 await  bot.editRolePosition(msg.channel.guild.id, botStaff? botStaff.id : botStaff1, roleAlspyans.position - 1)
   .catch(e => {
       return msgError = "<:redtick:586885291659231232> Erreur Position, contactez yalpha. Je ne peux pas vous mettre le rôle.";
   });
  await msg.member.addRole(botStaff.id, "un membre du staff de alpsyans est sur le serveur.")
   .catch(e => {
       return msgError = "<:greentick:586885261170966528 Erreur ADDROLE, contactez yalpha. Je ne peux pas mettre le rôle à l'utilisateur.";
   });

   if (msgError === undefined) {
    return bot.getDMChannel(msg.member.id).then(dm => dm.createMessage("<:greentick:586885261170966528> Vous avez bien été identifié. Je vous ai give le rôle."));
    } else {
return bot.getDMChannel(msg.member.id).then(dm => dm.createMessage(msgError));
    }
}


if (commande === `${prefix}support`) {
    if (msg.author.id !== "322492552601272320" || msg.channel.guild.id !== "554706628415324170")  return;
    if (args.length === 0) {
return msg.channel.createMessage({embed: {
     title: `**Commande:** ${prefix}support`,
     description: `**Description:** Permet de créer une invitation temporaire pour rejoindre un serveur répertorié.\n**Usage:** ${prefix}support [guildName/guildId]\n**Exemples:** \n${prefix}support AlPsyans`
 }});

} else {
        args = msg.content.toLowerCase().split(" ").slice(1).join(" ");
        let channelId = msg.channel.id;
    let serverId = bot.guilds.find(guild => guild.name.toLowerCase().startsWith(args) || guild.id.includes(args));
    if (!serverId) {
        return msg.channel.createMessage(`<:redtick:586885291659231232> Je ne trouve pas la guild ${args}`);
    }
    let channelInviteId = serverId.channels.find(channel => channel.type === 0);
//console.log(channelInviteId);
  bot.createChannelInvite(channelInviteId.id, {temporary: 1, maxUses: 1}).then(invite => {
       bot.createMessage(channelId, `<:discord:606591042476703751> Voici une invitation pour le serveur ${serverId.name}: https://discord.gg/${invite.code}`);
    });
}
}


if (commande === `${prefix}servers`) {
    if (msg.author.id !== "322492552601272320" || msg.channel.guild.id !== "554706628415324170") return;
let guildId = bot.guilds.map(guild => guild.name);
let Guild = [];
await guildId.forEach(guild => {
Guild += `${guild}\n`
});
return bot.getDMChannel(msg.author.id).then(dm => dm.createMessage({embed:{
color: colorRoleBot,   
description: Guild.length === 0? "Aucune" : Guild
}}));
}


if (commande === bot.user.mention || commande === msg.channel.guild.members.find(member => member.id.includes("585477543935868938")).mention) {
    return msg.channel.createMessage("Vous avez un problème avec mon utilisation? Alors contactez moi en message privé.")
}


if (commande === `${prefix}purge`) {
    let roleStaff = msg.channel.guild.roles.find(role => role.name.includes("Staff"));
    let roleMembreStaff = msg.member.roles.some(role => role.includes(roleStaff.id));
    if (!permAdmin && !roleMembreStaff) return;
    if (args.length === 0) {
    return msg.channel.createMessage({embed: {
        title: `**Commande:** ${prefix}purge`,
        description: `**Description:** Permet de supprimer des messages.\n**Usage:** \n${prefix}purge [nombre]\n**Exemples:** \n${prefix}purge 100`
    }});

} else {
    let findAlpsyans = msg.channel.guild.members.find(member => member.id.includes("585477543935868938"));
    if (!findAlpsyans.permission.has("manageMessages")) {
        return msg.channel.createMessage("<:redtick:586885291659231232> Je ne peux pas supprimer de message. S'il vous plaît, vérifiez mes permissions.");
    }
    let nombre = msg.content.split(" ")[1];
    nombre = Number(nombre);
    if (isNaN(nombre) || nombre <= 0 || nombre >= 100) {
        return msg.channel.createMessage("<:redtick:586885291659231232> Veuillez entrer un nombre de message à delete. (maximum 99).");
    }
    let ah = msg.member.id;
  msg.channel.purge(nombre + 1);

  //));//message => message.author.id.includes("585477543935868938");
 // return bot.createMessage(msg.channel.id, "yes");
 //  console.log(msg.channel.messages.map(message => message));/*.messages.map(message => message)*/
    /*if (!roleAlpsyans.permissions.has("administator") && !roleAlpsyans.permissions.has("manageMessages")) {
        return bot.createMessage(msg.channel.id, "<:redtick:586885291659231232> Je ne peux pas supprimer de message. S'il vous plaît, vérifiez mes permissions.");
    }

    if (msg.content.split(" ").length === 2) {
nombre = msg.content.split(" ")[1];
    } else if (msg.content.split(" ").length === 3) {
         findUser = msg.channel.guild.members.find(member => member.id.includes(msg.content.split(" ")[1]));
        if (!findUser) {
            return bot.createMessage(msg.channel.id, `<:redtick:586885291659231232> Je ne trouve pas l'utilisateur ${msg.content.split(" ")[1]}`);
        }
        userMessage = msg.content.split(" ")[1];
        nombre = msg.content.split(" ")[2];
    } else {
       // console.log(msg.channel.messages.map(msg => msg));
        return bot.createMessage(msg.channel.id, "<:redtick:586885291659231232> Je n'ai pas compris.")
    }
msg.delete();
    let findMessage;
   userMessage? findMessage = msg.channel.messages.find(msg => msg.includes(findUser))  : findMessage = msg.channel.messages.find(msg => msg);
   for (let compteur = 0; compteur <= nombre; compteur++) {
bot.deleteMessage(msg.channel.id, findMessage.id);
    }
   return bot.createMessage(msg.channel.id, `<:greentick:586885261170966528> ${nombre} message(s) supprimé(s)`);*/
}}

if (commande === `${prefix}roleinfo`) {
    let roleStaff = msg.channel.guild.roles.find(role => role.name.includes("Staff"));
    let roleMembreStaff = msg.member.roles.some(role => role.includes(roleStaff.id));
    if (!permAdmin && !roleMembreStaff) return;
if(args.length === 0) {
    return msg.channel.createMessage({embed: {
        title: `**Commande:** ${prefix}roleinfo`,
        description: `**Description:** Obtenir les informations d'un rôle.\n**Usage:** \n${prefix}roleinfo [roleName/ID/Mention]`
    }});

} else {
  //  args = msg.content.split(" ").slice(1);
  //  let texteRole = args.join(" ");
  let texteRole = msg.content.toLowerCase().split(" ")[1];
  let findRole;
let findRoleID = msg.channel.guild.roles.find(role => role.id.includes(texteRole));
let findRoleName = msg.channel.guild.roles.find(role => role.name.toLowerCase().startsWith(texteRole));
let findRoleMention = msg.channel.guild.roles.find(role => role.mention.includes(texteRole));
//let Name = msg.channel.guild.roles.find(role => role.name.includes(texteRole));

if (findRoleID) {
findRole = findRoleID;
} else if (findRoleName) {
findRole = findRoleName;
} else if (findRoleMention) {
findRole = findRoleMention;
}
else {
return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas le rôle.")
}
let findMemberRole = msg.channel.guild.members.filter(member => member.roles.includes(findRole.id));
//console.log(findMemberRole);

/*let findColor = snekfetch.get(`http://www.thecolorapi.com/id?hex=${findRole.color.toString(16)}`).then (res => {
//console.log(res.body.image.bare);
return res.body.image.bare
});

let imageColor = snekfetch.get("https://www.color-hex.com/color/e1c1c1").then(res => {
console.log(res);
});
return*/

let msgEmbed = {embed: {
color: findRole.color === 0? null : findRole.color,
fields: [{
name: "ID",
value:findRole.id,
inline: true
},
{
name: "Name",
value: findRole.name,
inline: true
},
{
name:  "Couleur",
value: findRole.color === 0? "Défaut" : `#${findRole.color.toString(16)}`,
inline: true
},
{
name: "Mention",
value: "`" + findRole.mention + "`",
inline: true
},
{
name: "Membres",
value: findMemberRole.length,
inline: true
},
{
name: "Hoisted",
value: findRole.hoist,
inline: true
},
{
name: "Position",
value: findRole.position,
inline: true
},
{
name: "Mentionnable",
value: findRole.mentionable,
inline: true
}
],

footer: {
text: `Role créé le`
},
timestamp: new Date(moment.utc(findRole.createdAt).add("2", "hours").calendar()),
/*thumbnail: {
url:  snekfetch.get(`http://www.thecolorapi.com/id?hex=${findRole.color.toString(16)}`).then (res => {
res.body.image.bare
})
}*/
}}
return msg.channel.createMessage(msgEmbed);
}}


if (commande === `${prefix}changelog`) {
  if (!permAdmin) return;
  return msg.channel.createMessage({embed: {
    title: `**Commande:** ${prefix}changelogoui`,
    description: `**Description:** Créer un channel pour se tenir au courant des changements du bot en temps réél.\n**Usage:** \n${prefix}changelogoui`
}});
}  

if (commande === `${prefix}changelogoui`) {
  let alpsyans = msg.channel.guild.members.find(member => member.id.includes("585477543935868938"));
  if (!alpsyans.permission.has("administrator") && !alpsyans.permission.has("manageChannels")) {
      return msg.channel.createMessage("<:redtick:586885291659231232> Veuillez vérifier que j'ai la permission de gérer les salons.")
  } 
  let findChannel = msg.channel.guild.channels.find(channel => channel.name.includes("changelog-ap"));
  if (findChannel) {
      return msg.channel.createMessage(`<:redtick:586885291659231232> Le salon ${salon} a déjà été créé.`);
  }
   bot.createChannel(msg.channel.guild.id, "『🔨』changelog-ap", "0", "Commande changelogoui faîte", {topic: "Voici les mise à jours sur AlPsyans qui ont été effectuées le jour même."}).then(channel => {
       bot.editChannelPermission(channel.id, msg.channel.guild.id, null, 2048, "role")
   });

return msg.channel.createMessage(`<:greentick:586885261170966528> Channel ${salon} créé.`);
}


if (commande === `${prefix}inter-pub`) {
if (!permAdmin) return;

return msg.channel.createMessage({embed: {
    title: `**Commande:** ${prefix}inter-create`,
    description: `**Description:** Créer un channel pour faire passer une pub dans tous les serveurs où le bot se trouve.\n**Usage:** \n${prefix}inter-create`
}})
}

if (commande === `${prefix}inter-create`) {
if (!permAdmin) return;
let findSalon = msg.channel.guild.channels.find(channel => channel.name.includes(salonPub));
if (findSalon) {
return msg.channel.createMessage(`<:redtick:586885291659231232> Le channel ${salonPub} est déjà créé.`)
}
let msgID;
let channelID = msg.channel.id;
await msg.channel.createMessage(`<a:chargementvert:615470974317625344> Channel en création.`).then(msg => {
 msgID = msg.id;
});
return bot.createChannel(msg.channel.guild.id, "『🏝』alpsyanspub", "0", "Commande inter-create effectuée.", {topic: "Channel pour poster ta pub dans tous les serveurs où se trouve AlPsyans."}).then(channel => {
bot.editMessage(channelID, msgID, "<:greentick:586885261170966528> Channel créé");
});
}

let findChannel = msg.channel.guild.channels.find(channel => channel.name.includes(salonPub));
if (msg.channel === findChannel) { 
if (msg.author.bot) {
    return;
}
/*  let permAdmin = msg.member.permission.has("administrator");
if (!permAdmin) {
return;
}*/
msg.delete();

let whiteListe = []
let findWhiteListe = whiteListe.find(id => id.includes(msg.author.id));
if (findWhiteListe) {
return msg.channel.createMessage(`<:redtick:586885291659231232> ${msg.member.mention} vous avez été banni du système inter-pub pour non respect de notre Charte. Pour contester ce bannissement, rendez-vous sur le serveur de support, et contacter un administrateur.`)
.then(msg => setTimeout(() => {
msg.delete(); }, 5000));

} else if (talkedRecently.has(msg.author.id)) {
return msg.channel.createMessage(`<:redtick:586885291659231232> ${msg.author.mention} veuillez attendre 2 heures avant de pouvoir renvoyer une nouvelle publicité.`)
.then(msg => setTimeout(() => {
    msg.delete(); }, 5000));  
}
         let texte = msg.content;
         if (!texte.includes("https://")) {
             return msg.channel.createMessage("<:redtick:586885291659231232> Vérifier que votre message contient bien votre lien **dans le texte**! " + msg.author.mention)
             .then(msg => setTimeout(() => {
                msg.delete(); }, 5000));
            }  else if (texte.length <= 30) {
                return msg.channel.createMessage(`<:redtick:586885291659231232> ${msg.member.mention} Ta pub dois contenir un minimum de 30 caractères.`)
                .then(msg => setTimeout(() => {
                    msg.delete(); }, 5000));
            }

        let guildSalon = bot.guilds.filter(guild => guild.channels.find(channel => channel.name.includes(salonPub)));
        let tabGuildSalon = [];

       await guildSalon.forEach(guild => {
tabGuildSalon.push(guild.channels.find(channel => channel.name.includes(salonPub)));
        });
       
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
            talkedRecently.delete(msg.author.id); }, 7200000);
            let Yalpha = msg.author.id === "322492552601272320";
           // let Auriane = msg.author.id === "603995046215286879";
            let findGuildAP = bot.guilds.find(guild => guild.roles.find(role => role.id.includes("563831713617150012")));
            let membreServeur = findGuildAP.members.find(member => member.id.includes(msg.author.id));
            let findRoleStaff;            
            let userStaff;
            let findRolePubeur;
            let userPubeur; 
            let findRoleJournaliste;
            let userJournaliste;
            let findRoleMarin;
            let userMarin;
            let findRoleVip;
            let userVip;
          if (membreServeur) {
            let findRoleStaff = findGuildAP.roles.find(role => role.id.includes("563831713617150012")); 
            userStaff = membreServeur.roles.some(role => role.includes(findRoleStaff.id));
            findRolePubeur = findGuildAP.roles.find(role => role.id.includes("605459405240008709"));
            userPubeur = membreServeur.roles.some(role => role.includes(findRolePubeur.id)); 
            findRoleJournaliste = findGuildAP.roles.find(role => role.id.includes("608066539823955969"));
            userJournaliste = membreServeur.roles.some(role => role.includes(findRoleJournaliste.id));
            findRoleMarin = findGuildAP.roles.find(role => role.id.includes("590599307330191391"));
            userMarin = membreServeur.roles.some(role => role.includes(findRoleMarin.id));
            findRoleVip = findGuildAP.roles.find(role => role.id.includes("590205550529085450"));
            userVip = membreServeur.roles.some(role => role.includes(findRoleVip.id));
          }
            tabGuildSalon.forEach(channel => {

                let formatAuthor = msg.author.dynamicAvatarURL(null, 2048);
if (formatAuthor === msg.author.dynamicAvatarURL("jpg", 2048)) {
formatAuthor = msg.author.dynamicAvatarURL("png", 2048); 
}
            return  bot.createMessage(channel.id, {embed: {     
                color: /*Auriane? 6159562 :*/ membreServeur? userStaff? 0xff4747 : userPubeur? 0xc777f7 : userJournaliste? 16631856 : userMarin? 0xff4747 : userVip? 644097 : 0x26ff94 : colorRoleBot,
                author: {
                    name: `${msg.author.username}#${msg.author.discriminator} | ID: ${msg.author.id}`,
                    icon_url: formatAuthor
                },
                thumbnail: {
                    url: Yalpha ? "https://cdn.discordapp.com/attachments/586446064853319690/616918080668565534/20190830_105204.jpg" : /*Auriane? "https://cdn.discordapp.com/emojis/468993358497579009.gif?v=1" :*/ membreServeur? userStaff? "https://cdn.discordapp.com/emojis/483676111776120852.gif?v=1" : userPubeur? "https://cdn.discordapp.com/emojis/483676111776120852.gif?v=1" : userJournaliste? "https://cdn.discordapp.com/emojis/567088298061725726.png?v=1" : userMarin? "https://cdn.discordapp.com/emojis/609025540464181263.png?v=1" : userVip? "https://cdn.discordapp.com/attachments/586446064853319690/617461211281227787/93wickzysdp21.png" : null : null
                },
                description: texte,
                timestamp: new Date(),
                footer: {
                    text:  membreServeur? userStaff? `Membre du staff de ${bot.user.username}` : userPubeur? `Pubeur de ${bot.user.username}` : userJournaliste ? `Journaliste de ${bot.user.username}` : userMarin? `Marin de ${bot.user.username}` : userVip? `Vip de ${bot.user.username}` :  bot.user.username : bot.user.username,
                    icon_url: Yalpha? "https://cdn.discordapp.com/emojis/580593586266046466.gif?v=1" : "https://images-ext-1.discordapp.net/external/Z6S_gvJuUNmGHXKausOUV47Hi_S6QldAwrXV4GFk3hQ/https/images-ext-2.discordapp.net/external/_wTnMesERMsRjSmzThC0ITU5hYhPfZAUeIgXIaUtXkY/https/i.imgur.com/XwNhkB6.gif"
                }
            }});
            });
        }

if (commande === `${prefix}guildinfo`) {
if (msg.channel.guild.id !== "554706628415324170") return;
if (!permAdmin) return;
if (args.length === 0) {
return msg.channel.createMessage({embed: {
    title: `**Commande:** ${prefix}guildinfo`,
    description: `**Description:** Donne plusieurs informations sur une guild.\n**Usage:** \n${prefix}guildinfo [guildID]\n**Example:**\n${prefix}guildinfo 554706628415324170`
}});

} else { 
args = msg.content.toLowerCase().split(" ").slice(1);
let findGuild = bot.guilds.find(guild => guild.id.includes === args.join(" ") || guild.name.toLowerCase() === args.join(" "));
if (!findGuild) {
return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas la guild `" + args.join(" ") + "`.");
}
let ownerGuild = findGuild.members.find(member => member.id.includes(findGuild.ownerID));
return msg.channel.createMessage({embed: {
timestamp: new Date(findGuild.createdAt),
author: {
    name: `Owner: ${ownerGuild.username}#${ownerGuild.discriminator}`,
    icon_url: ownerGuild.avatarURL
},
thumbnail: {
    url: findGuild.iconURL
},
fields: [
    {
        name: "Guild Name",
        value: findGuild.name,
        inline: true
    },
    {
        name: "Region",
        value: findGuild.region,
        inline: true
    },
    {
        name: "Langage",
        value: findGuild.preferredLocale? findGuild.preferredLocale : "Aucun" ,
        inline: true

    },
    {
        name: "Membres",
        value: findGuild.memberCount,
        inline: true
    },
    {
        name: "Nitro boost level",
        value: findGuild.premiumTier? findGuild.premiumTier : "0",
        inline: true
    },
    {
        name: "Indisponible",
        value: findGuild.unavailable,
        inline: true
    }
],
footer: {
    text: `ID: ${findGuild.id} | Serveur créé le`
}
}});
}}

if (commande === `${prefix}mute`) {
let roleMod = msg.channel.guild.roles.find(role => role.name.toLowerCase().includes("moderateur"));
let mod;
if (roleMod) {
    mod = msg.member.roles.some(role => role.includes(roleMod.id))
}
if (!permAdmin && !mod) return;
if (args.length < 2) {
return msg.channel.createMessage({embed: {
    title: `**Commande:** ${prefix}mute`,
    description: `**Description:** Mute un membre sans qu'il puisse parler ou écrire, temps en minutes.\n**Usage:** \n${prefix}mute [user] [limite] [raison]\n**Example:**\n${prefix}mute ${Owner} 10 Shitposting \n${prefix}mute ${Owner} 10m Spamming\n${prefix}mute ${Owner} 1d reste cool \n${prefix}mute ${Owner} 5h vulgaire`
}})

} else {
let userID = msg.content.toLowerCase().split(" ")[1];
let findUserID = msg.channel.guild.members.find(member => member.id.includes(userID));
let findUserName = msg.channel.guild.members.find(member => member.username.toLowerCase().startsWith(userID));
let findUserMentions = msg.mentions.find(user => user.mention.includes(userID));
let findUserGuildMention = msg.channel.guild.members.find(member => member.mention.includes(userID));

if (!findUserID) {
    if (findUserName) {
findUserID = findUserName;
    } else if (findUserMentions) {
        findUserMentions = msg.channel.guild.members.find(member => member.id.includes(findUserMentions.id));
        findUserID = findUserMentions;
    } else if (findUserGuildMention) {
    findUserID = findUserGuildMention;
    } else {
        return msg.channel.createMessage(`<:redtick:586885291659231232> Je ne trouve pas l'utilisateur ${userID}.`);
    }
} 

let roleMute = msg.channel.guild.roles.find(role => role.name.toLowerCase().includes("mute"));
 if(!roleMute) {
     return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas le rôle mute.");
 } else if (findUserID.roles.find(role => role.includes(roleMute.id))) {
     return msg.channel.createMessage("<:redtick:586885291659231232> Cet utilisateur est déjà mute.");
 } else if (findUserID.permission.has("administrator")) {
return msg.channel.createMessage("<:redtick:586885291659231232> Je ne peux pas mute cet utilisateur.");
} 

 let alpsyans = msg.channel.guild.members.find(member => member.username.toLowerCase().includes("alpsyans"));
 let roleAlpsyans = msg.channel.guild.roles.find(role => role.name.toLowerCase().includes("alpsyans"));
 if (!alpsyans.permission.has("manageRoles") && !roleAlpsyans.position < roleMute.position) {
     return msg.channel.createMessage("<:redtick:586885291659231232> Je n'ai pas la permission de mute cet utilisateur. Vérifiez mes permissions, puis réessayez.");
 }

 let time;
 let valeurTemps = msg.content.toLowerCase().split(" ")[2];
 if (!valeurTemps) {
    return msg.channel.createMessage("<:redtick:586885291659231232> Veuillez péciser le temps du mute.");
 }
 let valeurTemps1 = valeurTemps.split(""); //dernière valeur time
    let valeurTemps2 = valeurTemps1.length - 1;//longueur de la chzine time
 if (isNaN(valeurTemps)) {//si time est différent d'un nombre
    valeurTemps2 = valeurTemps1[valeurTemps2];
     valeurTemps1.pop();
 } 
 //return console.log(valeurTemps2);
 let valeurTemps3;// = temps:m/h/j
 valeurTemps1 = valeurTemps1.join("");

 if (valeurTemps1.length <= 0 || isNaN(valeurTemps1)) {
    // console.log(valeurTemps1);
     return msg.channel.createMessage("<:redtick:586885291659231232> Veuillez mettre une valeur valable en guise de temps.");
 } else if (valeurTemps2 === "m") {
time = Number(valeurTemps1)*60000;
valeurTemps3 = "Minute(s)";
 } else if (valeurTemps2 === "h") {
    time = Number(valeurTemps1)*3.6e+6;
    valeurTemps3 = "Heure(s)";
 } else if (valeurTemps2 === "j") {
    time = Number(valeurTemps1)*8.64e+7
    valeurTemps3 = "Jour(s)";
 } else {
    time = Number(valeurTemps1)*60000;
    valeurTemps3 = "Minute(s)";
 }

if (time > 6.048e+8) {
return msg.channel.createMessage("<:redtick:586885291659231232> S'il vous plait, utilisez une valeur valable. La limite est de 7 jours. Ex: 3m, 2h, 1d");
}
 msg.delete();
let Modérateur = msg.member.mention;
let messageChannel = msg.channel.id;
let guildChannel = msg.channel.guild.channels.filter(channel => channel.type === 0);
let findStaff = guildChannel.find(channel => channel.name.toLowerCase().includes("staff"));
args = msg.content.toLowerCase().split(" ").slice(3);
texte = args.join(" ");


 findUserID.addRole(roleMute.id, texte).then(msg => {
    bot.createMessage(messageChannel, `**<:greentick:586885261170966528> ${findUserID.username}#${findUserID.discriminator} a été mute**`);
   if (findStaff) { 
    bot.createMessage(findStaff.id, {embed: {
        author: {
    name: `Info | Mute | ${findUserID.username}#${findUserID.discriminator}`,
    icon_url: findUserID.avatarURL
        },
        color: 0xFF0000,
        timestamp: new Date (),
        fields: [
            {
                name: "User",
                value: findUserID.mention,
                inline: true
            },
            {
                name: "Modérateur:",
                value: Modérateur,
                inline: true
            },
            {
                name: "Temps",
                value: valeurTemps1 + " " + valeurTemps3,
                inline: true
            },
            {
                name: "Raison:",
                value: !texte? "Aucune" : texte,
                inline: true
            }
        ],
        footer: {
            text: `ID: ${findUserID.id}`
        }
    }});
}
}).then(msg => {
    setTimeout(() => {
        if (findUserID.roles.find(role => role === roleMute.id)) {
    findUserID.removeRole(roleMute.id, texte);
  if (findStaff) {
    return bot.createMessage(findStaff.id, {embed: {
        author: {
    name: `Info | Unmute [Auto] | ${findUserID.username}#${findUserID.discriminator}`,
    icon_url: findUserID.avatarURL
        },
        color: 2555796,
        timestamp: new Date (),
        fields: [
            {
                name: "User",
                value: findUserID.mention,
                inline: true
            },
            {
                name: "Modérateur:",
                value: alpsyans.mention,
                inline: true
            },
        ],
        footer: {
            text: `ID: ${findUserID.id}`
        }
    }})}}; }, time)});
}}


if (commande === `${prefix}unmute`) {
let roleMod = msg.channel.guild.roles.find(role => role.name.toLowerCase().includes("modérateur"));
let mod;
if (roleMod) {
    mod = msg.member.roles.some(role => role.includes(roleMod.id))
}
if (!permAdmin && !mod) return;
if (args.length === 0) {
return msg.channel.createMessage({embed: {
    title: `**Commande:** ${prefix}unmute`,
    description: `**Description:** Unmute un membre.\n**Usage:** \n${prefix}unmute [user] [limite] (raison optionnelle)\n**Example:**\n${prefix}unmute ${Owner} trompé de personne, sorry`
}});

} else {
let userID = msg.content.split(" ")[1];
let findUserID = msg.channel.guild.members.find(member => member.id.includes(userID));
let findUserName = msg.channel.guild.members.find(member => member.username.toLowerCase().startsWith(userID));
let findUserMentions = msg.mentions.find(user => user.mention.includes(userID));
let findUserGuildMention = msg.channel.guild.members.find(member => member.mention.includes(userID));

if (!findUserID) {
    if (findUserName) {
findUserID = findUserName;
    } else if (findUserMentions) {
        findUserMentions = msg.channel.guild.members.find(member => member.id.includes(findUserMentions.id));
        findUserID = findUserMentions;
    } else if (findUserGuildMention) {
    findUserID = findUserGuildMention;
    } else {
        return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas l'utilisateur.");
    }
}

let roleMute = msg.channel.guild.roles.find(role => role.name.toLowerCase().includes("mute"));
 if(!roleMute) {
     return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas le rôle mute.");
 } else if (!findUserID.roles.find(role => role.includes(roleMute.id))) {
     return msg.channel.createMessage("<:redtick:586885291659231232> Cet utilisateur n'est pas mute.");
 } else if (findUserID.permission.has("administrator")) {
return msg.channel.createMessage("<:redtick:586885291659231232> Je ne peux pas unmute cet utilisateur.");
} 

 let alpsyans = msg.channel.guild.members.find(member => member.username.toLowerCase().includes("alpsyans"));
 let roleAlpsyans = msg.channel.guild.roles.find(role => role.name.toLowerCase().includes("alpsyans"));
 if (!alpsyans.permission.has("manageRoles") && !roleAlpsyans.position < roleMute.position) {
     return msg.channel.createMessage("<:redtick:586885291659231232> Je n'ai pas la permission d'unmute cet utilisateur. Vérifiez mes permissions, puis réessayez.");
 }
 msg.delete();
  args = msg.content.toLowerCase().split(" ").slice(2);
 let texte = args.join(" ");
let messageChannel = msg.channel.id;
let Moderateur = msg.member.mention;
let guildChannel = msg.channel.guild.channels.filter(channel => channel.type === 0);
let findStaff = guildChannel.find(channel => channel.name.toLowerCase().includes("staff"));

 findUserID.removeRole(roleMute.id, texte).then(msg => {
    bot.createMessage(messageChannel, `**<:greentick:586885261170966528> ${findUserID.username}#${findUserID.discriminator} a été unmute**`)
    if (findStaff) {
    return bot.createMessage(findStaff.id, {embed: {
          author: {
      name: `Info | Unmute | ${findUserID.username}#${findUserID.discriminator}`,
      icon_url: findUserID.avatarURL
          },
          color: 2555796,
          timestamp: new Date (),
          fields: [
              {
                  name: "User",
                  value: findUserID.mention,
                  inline: true
              },
              {
                  name: "Modérateur:",
                  value: Moderateur,
                  inline: true
              },
              {
                  name: "Raison",
                  value: texte? texte : "Aucun",
                  inline: true
              }
          ],
          footer: {
              text: `ID: ${findUserID.id}`
          }
      }});
    }
 });
}}




if (commande === `${prefix}role`) {
let roleStaff = msg.channel.guild.roles.find(role => role.name.toLowerCase().includes("staff"));
let membreStaff;
              if (roleStaff) {
                membreStaff = msg.member.roles.some(role => role.includes(roleStaff.id));
             }
            if (!permAdmin && !membreStaff) return;
if (args.length === 0) {
            return msg.channel.createMessage({embed :{
                title: `Commande: ${prefix}role`,
                description: `**Description:** Ajoute/enlève à un utilisateur un rôle.\n**Cooldown:** 5 secondes\n**Usage:**${prefix}role [user] [role]\n**Exemples:** \n${prefix}role Yalpha staff`
            }});
        } else {
            if (msg.author.id !== "322492552601272320") {  
                if (talkedRecently.has(msg.author.id)) {
                    return msg.channel.createMessage(`<:redtick:586885291659231232> ${msg.author.mention} veuillez attendre 5 secondes avant de pouvoir réutiliser la commande.`)
                    .then(msg => setTimeout(() => {
                       msg.delete(); }, 5000)); 
                } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
           talkedRecently.delete(msg.author.id); }, 5000); }}

            args = msg.content.split(" ")[1];
           let findUserName = msg.channel.guild.members.find(member => member.username.includes(args));
           let findUserID = msg.channel.guild.members.find(member => member.id.includes(args));
           let findMemberMention = msg.channel.guild.members.find(member => member.mention.includes(args));
           let findUserMention = msg.mentions.find(user => user.username.includes(args));
    
  if (findUserName) {
args = findUserName;
} else if (findUserID) {
    args = findUserID;
} else if (findMemberMention) {
    args = findMemberMention
} else if (findUserMention) {
args = findUserMention;
} else {
    return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas l'utilisateur.");
}
let msgRole = msg.content.toLowerCase().split(" ")[2];
let findRoleName = msg.channel.guild.roles.find(role => role.name.toLowerCase().includes(msgRole));
let findRoleID = msg.channel.guild.roles.find(role => role.id.includes(msgRole));
let findRoleMention = msg.channel.guild.roles.find(role => role.mention.includes(msgRole));

if (findRoleName) {
msgRole = findRoleName;
} else if (findRoleID) {
msgRole = findRoleID;
} else if (findRoleMention) {
msgRole = msg.channel.guild.members.find(member => member.id.includes(findRoleMention.id));
} else {
return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas le rôle.");
}
let userBot = msg.channel.guild.members.find(member => member.id.includes("585477543935868938"));
if (!userBot.permission.has('manageRoles') ||  msg.channel.guild.roles.find(role => role.name.toLowerCase().includes("alpsyans")).position < msgRole.position || msgRole.permissions.has('administrator')) {
return msg.channel.createMessage("<:redtick:586885291659231232> Je ne peux pas changer le rôle de cet utilisateur. S'il vous plaît vérifiez mes permissions ansi que la position de mon rôle.");
}


if (!args.roles.some(role => role.includes(msgRole.id))) { //si utilisateur a déjà le rôle
args.addRole(msgRole.id);
} else {
args.removeRole(msgRole.id);
}
return msg.channel.createMessage(`<:greentick:586885261170966528> Role changé pour ${args.username}#${args.discriminator} ${!args.roles.some(role => role.includes(msgRole.id))? `+${msgRole.name}` : `-${msgRole.name}` }`);
}}

if (commande === `${prefix}contenu`) {
    if (msg.author.id !== "322492552601272320" || msg.channel.guild.id !== "554706628415324170") return;
    let msgChannel = msg.content.split(" ")[1]//id du channel
    let msgContenu = msg.content.split(" ")[2];//id du message
    let findChannel = msg.channel.guild.channels.find(channel => channel.id === msgChannel);
    if (!findChannel) {
        return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas le salon.");
    }
   
    let msgCatched; //msg catched
   await bot.getMessage(msgChannel, msgContenu).then(msg => {
        msgCatched = msg;
    }).catch(e => {
       if (e.code === 10008) {
        return msgCatched = "error" 
       }
   });
 //console.log(/*msgCatched.embeds.description*/  msgCatched.embeds[0].fields[0].name);
if (msgCatched === "error") {
    return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas le message.");
} else if (msgCatched.length === 0) {
    return msg.channel.createMessage("<:redtick:586885291659231232> Le message ne contient aucun contenu.");
}
function parcourEmbed(embed) {
    if (embed.embeds[0].color) {
        msg.channel.createMessage("```css\nDescription:" + embed.embeds[0].color + "```");
    } if (embed.embeds[0].thumbnail.url) {
        msg.channel.createMessage("```css\nThumbnail:" + embed.embeds[0].thumbnail.url + "```");
    }  if (embed.embeds[0].author) {
        msg.channel.createMessage("```css\nAuthor:" + "\n#name:" + embed.embeds[0].author.name + "(value:" + embed.embeds[0].author.icon_url + ")```");
    }
for (let i = 0; i <= embed.embeds[0].fields.length - 1; i++) {
 //   console.log(i)
     msg.channel.createMessage("```css\nFields: " + (i+1) + "\n#name:" + embed.embeds[0].fields[i].name + "(value:" + embed.embeds[0].fields[i].value + ")```");
}}

if (msgCatched.content) {
    return msg.channel.createMessage("```\n" + msgCatched.content + "```");
} else {
  return  parcourEmbed(msgCatched);
}

}



}
