const snekfetch = module.require("snekfetch");
const talkedRecently = new Set();
const moment = module.require("moment");
moment.locale("Fr");
let configBot = require("./package.json");
const cooldown = require("./cooldown");
const prefix = configBot.prefix;
const version = configBot.version;
const Owner = "Yalpha_ KZ | 🇫🇷 ™#7270";
function bingo () {
    let nombre = Math.floor(Math.random() *ici) + 1;
    return nombre;
}

module.exports.run = async (bot, prefix, colorRoleBot, msg, args, commande, permAdmin) => {
    if (commande === `${prefix}suggest`) {
        if (args.length === 0) {
          return msg.channel.createMessage({embed: {
               title: `Commande: ${prefix}suggest`,
          description: `**Description:** envoyez-nous vos idées pour de futures commandes sur AlPsyans !\n**Usage:** ${prefix}suggest [text]\n**Exemples:**\n${prefix}suggest une commande qui permet de recommander des futurs commandes, et qui s'intitulerait suggest.`
        }});

        } else {  
            cooldown.run(msg, 900000)

    let texte = args.join(" ");
    if (texte.length < 10) {
               return msg.channel.createMessage("<:redtick:586885291659231232> Veuillez reformuler votre suggestion dans le format demandé.");
           }
           let formatAuthor = msg.author.dynamicAvatarURL(null, 2048);
if (formatAuthor === msg.author.dynamicAvatarURL("jpg", 2048)) {
formatAuthor = msg.author.dynamicAvatarURL("png", 2048); 
}
   
               msg.delete();
       msg.channel.createMessage("<:greentick:586885261170966528> Recommandation envoyée.");
   return bot.createMessage("554706628855988225", {embed: {  
   title: "Nouvelle recommandation pour AlPsyans reçu !",
   color: colorRoleBot,//Math.floor(Math.random() * 16777214) + 1, 
   timestamp: new Date(),
   thumbnail: {
   url: formatAuthor
   },
   fields: [
       {
       name: "User:",
       value: `${msg.author.username}#${msg.author.discriminator}`,
       inline: true
   },
   {
   name: "ID",
   value: msg.author.id,
   inline: true
   },
   {
       name: "Serveur:",
       value: msg.member.guild.name,
       inline: false
   },
   {
       name: "Idée:",
       value: texte
   }
   ]
   }});
   }
  }

  if (commande === `${prefix}calcul`) {
    if (args.length === 0) {
   msg.channel.createMessage("**Mettez une expression à calculer !**");
    return msg.channel.createMessage({embed: {
       title: "Calculatrice:",
       description: "**Addition: `+`\nSoustraction: `-`\nDivision: `/`\nMultiplication: `*`\nVirgule: `.`\nPuissance: **`**`"
   }});
   } else {
    args = msg.content.split(" ").slice(1);
    let texte = args.join(" ");
       let calcul = texte
       if (calcul.length >= 1024) {
           return msg.channel.createMessage("<:redtick:586885291659231232> Votre calcul est bien trop long.");
       } try { 
       let resultat = eval(calcul);  
   } catch (e) {
     return msg.channel.createMessage("❱ **Veuillez insérer un calcul valide** <:redtick:586885291659231232>");
   }
   let resultat = eval(calcul);
   return msg.channel.createMessage({embed: {
       timestamp: new Date(),
       color: colorRoleBot,
       author: {
           name: `🔱 | ${bot.user.username} | Support`,
           icon_url: bot.user.dynamicAvatarURL(null, 2048)
       },
       fields: [
           {
               name: "<:fb:609022885666881569> Calcul:",
               value: "```glsl\n" + calcul + " ```" 
           },
           {
               name: "<:fbl:609022860987727874> Résultat:",
               value: "```glsl\n" + resultat + " ```" 
           }
       ],
       footer: {
           text: `${bot.user.username} | Version: ${version}`,
           icon_url: bot.user.dynamicAvatarURL(null, 2048)
       }
   
   }});
   }
}

if (commande === `${prefix}what`) {
    if (args.length === 0) {
  return msg.channel.createMessage({embed: {
        title: `**Commande:** ${prefix}what`,
        description: `**Description:** Posez une question au bot et il vous donnera son avis.\n**Usage:** ${prefix}what [question]\n**Exemples: *what AlPsyans, m'aimes-tu?**`
}});
} else {
   let texte = args.join(" ");
    if (texte.length < 5 || !texte.endsWith("?")) {
        return msg.channel.createMessage("<:jarvis:586885060578508810> Veuillez reformulé votre question.");
    } /*if (texte.startsWith("25 decembre 1990") || texte.endsWith("25 decembre 1990")) { 
            return bot.createMessage(msg.channel.id, "Entre ce nombre (25) dans la commande w..." );
        }*/
    Array.prototype.random = function () {
        return this[Math.floor((Math.random()*this.length))]
    }
    let reponse = ["Bien <:thx:586885825304723481>", "... <:whyno:588790944623755314>", "Oui", "Non", "Peut-être...", "Jamais !", "Ooh oui..<:pandalove:588788484777574458>", "T'arrêtes tes conneries..?", "Euh...<:oh:586885557397749789>", "Mais...<:fp:586885244322447405>"];
   let reponse_1 = reponse.random();
  return  msg.channel.createMessage(reponse_1);
}
}

if (commande === `${prefix}inverse`) {
    if (args.length === 0) {
    return  msg.channel.createMessage({embed: {
        title: `**Commande:** ${prefix}inverse`,
        description: `**Description:** Inverse le texte join (comme si vous regardiez dans un miroir).\n**Usage:** ${prefix}inverse [texte]\n**Exemples: ${prefix}inverse salut**`
}});
} else {
   let texte = args.join(" ");
     if (texte.length < 2) {
    return msg.channel.createMessage("<:jarvis:586885060578508810> Veuillez reformulé votre texte.");
} /*
String.prototype.reverse = function () {
    let n = texte;
    for (var i = this.length-1; i >= 0; i--) {
        n++ 
        this.charAt(i);
         return n;
    }
} let texte_inverse = texte.reverse();*/
return msg.channel.createMessage(texte.split("").reverse().join("")); // inverse les lettres + mots
}
}

if (commande === `${prefix}date`) {
    let date = new Date(msg.timestamp);
    return msg.channel.createMessage("Nous sommes le: `" + moment.utc(date).add().format('LL') +  "` à `" + date.getHours() + ":" +  date.getMinutes() + "`");
}

 if (commande === `${prefix}embed`) {
    if (args.length === 0) {
    return msg.channel.createMessage({embed: {
        title: `Commande: ${prefix}embed`,
   description: `**Description:** envoie un embed avec le texte de l'utilisateur.\n**Usage:** ${prefix}embed [texte]\n**Exemples:**\n${prefix}embed coucou`
 }});;

} else {
    msg.delete();
    let valueReturn = cooldown.run(msg, 8000, 5000);
            if (valueReturn !== undefined) return;

   args = msg.content.split(" ").slice(1);
   let findRoles = msg.member.roles.map(role => role);
   let roleColor;
   let Role;
if (findRoles.length !== 0) {
  let tabRoleUserGuild = []; //tab des rôles de la guild que le membre a
  findRoles.forEach(roleUser => {
  let roleGuildUser = msg.channel.guild.roles.find(role => role.id === roleUser); //trouve le rôle (propriété)
 tabRoleUserGuild.push(roleGuildUser.position);
 //ajoute le role de la guild que le membre a
   });
Array.max = function(array) {
return Math.max.apply(Math, array)
}
let Role1 = msg.channel.guild.roles.find(role => role.position === Array.max(tabRoleUserGuild));
roleColor = Role1.color;
Role = Role1.name
} else {
    roleColor = 0xFFFFFF;
    Role = "Membre";
}
let formatAuthor = msg.author.dynamicAvatarURL(null, 2048);
if (formatAuthor === msg.author.dynamicAvatarURL("jpg", 2048)) {
formatAuthor = msg.author.dynamicAvatarURL("png", 2048); 
}
    let texte = args.join(" ");
    return msg.channel.createMessage({embed: {
 color: roleColor === 0? 0xFFFF : roleColor,//Math.floor(Math.random() * 16777214) + 1,
 description: texte,
 author: { 
    name: `[${Role.length > 7 && Role !== "Membre"? Role.slice(0, 7) : Role}]${msg.member.nick === null? msg.member.username : msg.member.nick}` ,
    icon_url: formatAuthor
}, 
}});
}}

if (commande === `${prefix}avatar` || commande === `${prefix}av`) {
    //  return console.log(msg.channel.guild.members.find(member => member.nick === "Spooky AP"));
      let findUser;
      if (args.length === 0) {
  findUser = msg.author;
      } else {
          args = msg.content.toLowerCase().split(" ").slice(1);
          findMember = msg.channel.guild.members.find(member => member.mention === args.join(" ") || member.nick === msg.content.split(" ").slice(1).join(" "));
          if (findMember) {
      findUser = bot.users.find(user => user.id === findMember.id);
    } else if (!findUser) {
      findUser = bot.users.find(user => user.id === args.join(" ") || user.mention === args.join(" ") || user.username.toLowerCase().startsWith(args));
 if (!findUser) {
      return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas l'utilisateur.")
  }
}
}
      return msg.channel.createMessage({embed: {
          author: {
              name: `${findUser.username}#${findUser.discriminator}`,
              url: findUser.avatarURL,
              icon_url: findUser.dynamicAvatarURL("png", 2048)
          },
          title: "Clique sur le pseudo pour récupérer le lien de ton Avatar.",
          image: {
              url: findUser.dynamicAvatarURL("png", 2048)
          }
      }});
  }


  if (commande === `${prefix}dog`) {
    let valueReturn = cooldown.run(msg, 6000, 3000);
            if (valueReturn !== undefined) return;
 try {
    snekfetch.get("https://dog.ceo/api/breeds/image/random").then(res => { 
return msg.channel.createMessage({embed: {
color: 0x00A6D8,
     description: `:dog: **[Woof](${res.body.message}) !**`,
    image: {
        url: res.body.message
    } 
}});

});
} catch (e) {
    msg.channel.createMessage("<:redtick:586885291659231232> Une erreur est survenue, s'il vous plaît, contactez un administrateur.");
    }
   /* let a = msg.content.split(" ");
   for (i = -1; i <= a.length; i++) {
        if (a[i] === "") {
            a.splice(a[i] , 1);
        }
    }
    a.forEach(message => {
        if (message === "") {
a.pop(message);
        }
    })
    console.log(a);
    return bot.createMessage(msg.channel.id, String(a));*/

}

if (commande === `${prefix}cat`) {
    let valueReturn = cooldown.run(msg, 6000, 3000);
            if (valueReturn !== undefined) return;
try {
    snekfetch.get("https://aws.random.cat/meow").then(res => { 
return msg.channel.createMessage({embed: {
color: 0x00A6D8,
description: `:cat: **[Meowww..](${res.body.file})**`,
image: {
    url: res.body.file
} 
}});
}); 
} catch (e) {
msg.channel.createMessage("<:redtick:586885291659231232> Une erreur est survenue, s'il vous plaît, contactez un administrateur.");
}
}

if (commande === `${prefix}kiss`) {
    let valueReturn = cooldown.run(msg, 6000, 3000);
            if (valueReturn !== undefined) return;

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))]
}
args = msg.content.split(" ")[1];
let memberMention = msg.channel.guild.members.find(member => member.mention.includes(args));
let userMention = msg.mentions.find(user => user.mention.includes(args));

let userID = msg.channel.guild.members.find(member => member.id.includes(args));
if (args === "" || !args) {
args = bot.user.username;
} else if (memberMention) {
args = memberMention.username;
} else if (userID) {
args = userID.username;
} else if (userMention) {
args = userMention.username;
} else {
return msg.channel.createMessage("<:redtick:586885291659231232> Je ne trouve pas l'utilisateur.");
}
let tabKiss = ["https://cdn.weeb.sh/images/S1PCJWASf.gif", "https://cdn.weeb.sh/images/S1qZksSXG.gif", "https://cdn.weeb.sh/images/r1mcJlFVz.gif", "https://cdn.weeb.sh/images/rymvn6_wW.gif", "https://cdn.weeb.sh/images/SybPhp_wZ.gif", "https://cdn.weeb.sh/images/S1E1npuvb.gif", "https://cdn.weeb.sh/images/r10UnpOPZ.gif", "https://cdn.weeb.sh/images/Skc42pdv-.gif", "https://cdn.weeb.sh/images/B12g3TOPZ.gif", "https://cdn.weeb.sh/images/HklBtCvTZ.gif", "https://cdn.weeb.sh/images/Hy-oQl91z.gif", "https://cdn.weeb.sh/images/rJeB2aOP-.gif", "https://cdn.weeb.sh/images/SydfnauPb.gif", "https://cdn.weeb.sh/images/BJMX2TuPb.gif", "https://cdn.weeb.sh/images/B1yv36_PZ.gif", "https://cdn.weeb.sh/images/SJQRoTdDZ.gif"]
msg.channel.createMessage({embed: {
color: 0xE55201,
description: `:kissing_heart: **${msg.member.username}** embrasse **${args}**`,
image: {
    url: tabKiss.random()
}
}}); 
}

if (commande === `${prefix}banquise`) {
    let valueReturn = cooldown.run(msg, 6000, 3000);
            if (valueReturn !== undefined) return;

Array.prototype.random = function () {
return this[Math.floor((Math.random()*this.length))]
}
let tabBanquise = ["https://blog.66nord.com/wp-content/uploads/2015/05/raid-ski-spitzberg.J.DEGBE-7.jpg", "https://cdn.discordapp.com/attachments/586446064853319690/618553611181490219/banquise-svalbard-voyage.png", "https://cdn.discordapp.com/attachments/586446064853319690/618553479698317313/banquise-arctique-svalbard.png", "https://4.bp.blogspot.com/-w_2Hh_J9emc/WsE8eyOWpdI/AAAAAAAAAg4/8FxvvVZvocg_ZEOx2XXnVxhPlrBngvWLACLcBGAs/s1600/mountains-3173003_960_720.jpg", "https://blog.66nord.com/wp-content/uploads/2018/10/aurelie-trincal-voyage-svalbard.jpg", "https://4.bp.blogspot.com/-Ebuod7iVKxU/WsE8Ys1A-aI/AAAAAAAAAg0/923_2zYCLxACCLTo8gtl0q947QIKYyLCwCLcBGAs/s1600/iceberg-404966_960_720.jpg", "https://www.grands-espaces.com/app/uploads/2018/11/Ours-blanc-et-oursons.jpg", "https://watchesluxury.me/wp-content/uploads/2019/07/dessin-pingouin-banquise-mignon-cute-best-of-baby-penguins-penguin-baby-cute-meme-generator-of-dessin-pingouin-banquise-mignon-cute.jpg" ,"https://www.geeketbio.com/wp-content/uploads/2017/01/fonte-des-glaces-artique-1500x750.jpg"]
    return msg.channel.createMessage({embed: {
color: 0x95E6FF,
description: `:ship: **Voyager, c'est bien ! Protéger la banquise, c'est mieux !**`,
image: {
    url: tabBanquise.random()
} 
}}); 
}

if (commande === `${prefix}everyone`) {
    let valueReturn = cooldown.run(msg, 6000, 3000);
            if (valueReturn !== undefined) return;

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))]
}

let tabEveryone = ["https://cdn.weeb.sh/images/rkwHqNxdG.png", "https://cdn.weeb.sh/images/HJ__MinRZ.jpeg", "https://cdn.weeb.sh/images/SJr2Mv4jW.jpeg", "https://cdn.weeb.sh/images/ByAgbPVsb.jpeg", "https://cdn.weeb.sh/images/rkcFzv4ib.png", "https://cdn.weeb.sh/images/B1fpjEon-.png"]
msg.channel.createMessage({embed: {
color: 0xe54242,
description: `<:APping:618535675804909597> Qui a encore ping @everyone?!`,
image: {
    url: tabEveryone.random()
}
}}); 
}

if (commande === `${prefix}random`) {
    if (args.length === 0) {
            return msg.channel.createMessage({embed :{
                title: `Commande: ${prefix}random`,
                description: `**Description:** Génère un nombre aléatoire entre 2 valeurs comprises.\n**Cooldown:** 3 secondes\n**Usage:**${prefix}random [V.mini] [V.maxi]\n**Exemples:** \n${prefix}random 1 100`
            }});
        } else {
            let valueReturn = cooldown.run(msg, 5000, 3000);
            if (valueReturn !== undefined) return;
            if (msg.content.split(" ").length !== 3) {
                return msg.channel.createMessage("<:redtick:586885291659231232> Je n'ai pas compris. Réessayez avec **une valeur minimale** et **une maximale**.");
            }
            let  vMini = msg.content.split(" ")[1]; //V.1
            let vMax = msg.content.split(" ")[2];
            ici = vMax;
            if (isNaN(vMini && vMax) || vMini === vMax) {
                return msg.channel.createMessage("<:redtick:586885291659231232> Veuillez enter deux nombres différents.");
            }
    
           let nombre = bingo();
    while (nombre < vMini) {
        nombre = bingo();
    }
    return msg.channel.createMessage("`" + nombre + "`");
    
        }
     }
    
     if (commande === `${prefix}discriminator` || commande === `${prefix}discrim`) {
      let valueReturn = cooldown.run(msg, 5000, 3000);
        if (valueReturn !== undefined) return;
        let rechercheDiscri;
        if (args.length === 0) {
            rechercheDiscri = msg.author.discriminator
        } else {
            rechercheDiscri = String(args);
        }
        let usersDiscri = bot.users.filter(user => user.discriminator === rechercheDiscri);//tab filtre
        if (usersDiscri.length === 0) {
         msg.channel.createMessage("J'ai beau chercher... je ne trouve personne. <:youtried:586886171955691540>");
       return msg.addReaction("pandaaa:588788352027852879");
    }
        while (usersDiscri.size > 10) { //10 = nombre de personnes affichées max
        usersDiscri.pop()
    }
    let tabUsersDiscri = [];//tab users
    usersDiscri.forEach(user1 => {
    let userNameDiscri = bot.users.find(user => user === user1);
    tabUsersDiscri.push(`${userNameDiscri.username}#${userNameDiscri.discriminator}\n`)
    });
    
     let sendUsersDiscri = tabUsersDiscri.join(" "); //string users
     msg.channel.createMessage({embed: {
         description: sendUsersDiscri,
         color: 0x453ABF
     }});
    }
    if (commande === `${prefix}banroulette` || commande === `${prefix}br`) {
   let valueReturn = cooldown.run(msg, 10000, 6000)//valeur de retour
        if (valueReturn !== undefined) return;
    let allMember = msg.channel.guild.members.map(member => member.nick || member.username);
    Array.prototype.random = function () {
        return this[Math.floor((Math.random()*this.length))]
    }
    let reponse = allMember.random();
    msg.channel.createMessage(`${msg.member.mention} vous faites tourner la roue ...`).then(msg => {
        setTimeout(() => {
            msg.edit(`La roue atterit sur ... **${reponse}** a été banni. <:oh:586885557397749789>`)
            msg.addReaction("whyno:588790944623755314"); }, 2000); })
    }

    if (commande === `${prefix}emoji`) {
        if (args.length === 0) {
            return msg.channel.createMessage({embed :{
                title: `Commande: ${prefix}emoji`,
                description: `**Description:** Génère l'emoji que vous spécifiez (même les nitros !) s'il est répertorié sur le bot.\n**Cooldown:** 5 secondes\n**Usage:**${prefix}emoji [texte] [emojiName]\n**Exemples:** \n${prefix}emoji je veux une baguette: [saintebaguette]\n${prefix}emoji [redtick]\n${prefix}emoji Alpsyans [alpsyans]\n${prefix}emoji [hey] Salut !\n${prefix}emoji Ceci est un [exemple] d'emoji`
            }});
        } else {
            let serverSupport = bot.guilds.find(guild => guild.id === "554706628415324170");
            let findAuthor = serverSupport.members.find(member => member.id === msg.author.id);
            if (!findAuthor) return msg.channel.createMessage("<:redtick:586885291659231232> Pour utiliser cette commande, il faut avoir le rôle familier\nPlus d'information sur le serveur de support.");
            let findRoleFamilier = findAuthor.roles.find(role => role === "605449336846811177");
        if (!findRoleFamilier /*&& msg.author.id !== "322492552601272320"*/) return  msg.channel.createMessage("<:redtick:586885291659231232> Pour utiliser cette commande, il faut avoir le rôle familier\nPlus d'information sur le serveur de support"); 
        let valueReturn = cooldown.run(msg, 5000, 3000);
        if (valueReturn !== undefined) return;
        let searchCara1 = args.join(" ").indexOf("[");
        let searchCara2 = args.join(" ").indexOf("]");
        if (searchCara1 === -1 || searchCara2 === -1) {
            return msg.channel.createMessage("<:redtick:586885291659231232> Précisez le nom de votre emoji de cette façon: `[emojiName]`");
        }
       // return console.log(args.join(" ").slice(searchEmoji, searchEmoji2 + 1));
         let findGuildEmoji = bot.guilds.find(guild => guild.emojis.find(emoji => emoji.name.toLowerCase().startsWith(msg.content.toLowerCase().split(" ").slice(1).join(" ").slice(searchCara1 + 1, searchCara2))));//emoji entre crochet
         if (!findGuildEmoji) {
            return msg.channel.createMessage("<:redtick:586885291659231232> Emoji non répertorié.")
        }
         let findEmoji = findGuildEmoji.emojis.find(emoji => emoji.name.toLowerCase().startsWith(msg.content.toLowerCase().split(" ").slice(1).join(" ").slice(searchCara1 + 1, searchCara2)));
        return  msg.channel.createMessage(`${args.join(" ").replace(args.join(" ").slice(searchCara1, searchCara2 + 1), findEmoji.animated === true? `<a:${findEmoji.name}:${findEmoji.id}>` : `<:${findEmoji.name}:${findEmoji.id}>`)}`)
         // return console.log(findEmoji)
   // return msg.channel.createMessage("<:saintebaguette:637416048806592512>");
    }
    }

    if ((msg.channel.guild.id === "554706628415324170" || msg.author.id === "322492552601272320" || msg.author.id === "496396677020647424") && msg.content.toLowerCase().includes("baguette")) {
        if (msg.author.bot) return;
        msg.addReaction("a:saintebaguette:637416048806592512")
    }

    if ((msg.channel.guild.id === "554706628415324170" || msg.author.id === "322492552601272320" || msg.author.id === "496396677020647424") && msg.content.toLowerCase().includes("feu")) {
        if (msg.author.bot) return;
        msg.addReaction("a:ahhfire:637703948609912832")
    }
   
    if ((msg.channel.guild.id === "554706628415324170" || msg.author.id === "322492552601272320" || msg.author.id === "496396677020647424") && msg.content.toLowerCase().includes("bongo")) {
        if (msg.author.bot) return;
        msg.addReaction("a:BongoGin:637707090026037299")
    }

    if ((msg.channel.guild.id === "554706628415324170" || msg.author.id === "322492552601272320" || msg.author.id === "496396677020647424") && msg.content.toLowerCase().includes("développeur")) {
        if (msg.author.bot) return;
        msg.addReaction("a:developer:637709820778119188")
    }
    if (commande === `${prefix}demineur` || commande === `${prefix}démineur`) {
    cooldown.run(msg, 5000, 15000);
    
    let bombe = 0;
    let tabChoix = ["||:bomb:||", "||:one:||", "||:two:||", "||:three:||"];
    
    Array.prototype.random = function () {
        return this[Math.floor((Math.random()*this.length))]
    }
    let tabMineur = [];
    function demineur () {
        while (bombe < 8 || bombe > 17) {
        for (let i = 1; i <= 40; i++) {
           let reponse = tabChoix.random();
           if (tabMineur.length === 8 || tabMineur.length === 16 || tabMineur.length === 24 || tabMineur.length === 32) {
               tabMineur.push(`\n${reponse}`);
           } else {
               tabMineur.push(reponse);
           } 
         //  console.log(tabMineur)
           if (reponse === "||:bomb:||") {
            bombe ++;
        }}
        }
    
   //return console.log(mineur())
   return msg.channel.createMessage({embed: {
       title: "Démineur: Récupère tous les points sans toucher de bombe.\nNe touche aucune bombe sous peine d'exploser !",
       description: `Il y a ${40 - bombe} points et ${bombe} bombes:\n\n${tabMineur.join("")}`
   }});
        }

        demineur();
    }

    if (commande === `${prefix}long`) {
        cooldown.run(msg, 5000, 3000);
        if (args.length === 0) {
            return msg.channel.createMessage({embed :{
                title: `Commande: ${prefix}long`,
                description: `**Description:** Donne le nombre de mot dans le message.\n**Cooldown:** 5 secondes\n**Usage:** ${prefix}long [phrase]\n**Exemples:** \n${prefix}long coucou, hi.`
            }});
        } else {
            return msg.channel.createMessage("Votre phrase contient `" + args.length + "` mot(s).");
        }
    }

    if (commande === `${prefix}couleur`) {
        cooldown.run(msg, 5000, 3000);
        if (args.length === 0) {
            return msg.channel.createMessage({embed :{
                title: `Commande: ${prefix}couleur`,
                description: `**Description:** Convertit la couleur spécifié hexadécimal en décimale.\n**Cooldown:** 5 secondes\n**Usage:** ${prefix}couleur [couleur]\n**Exemples:** \n${prefix}couleur 556cc6.`
            }});
        } else {
            let couleur = msg.content.split(" ")[1];
            if (couleur.includes("#")) {
               couleur = couleur.replace("#", "")
            }
            return msg.channel.createMessage("Voici votre couleur encodée en décimale: " + Number.parseInt(couleur, 16))//méthode convertit hexa en décimal
            .catch(e => {
                return msg.channel.createMessage("La couleur spécifiée n'est pas valide.")
            });
        }
    }


}

