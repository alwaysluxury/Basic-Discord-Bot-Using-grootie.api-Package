const express = require("express")
const app = express()
const { MessageEmbed } = require("discord.js")
const api = require("grootie.api")
const grootie = new api();

app.get("/", (req, res) => {
 res.send("Im using Grootie Api!")
});

app.listen(3000, () => {
 console.log("Website Running!");
}) ;


const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [
    'GUILDS',
    'GUILD_MESSAGES'
  ]
});
 

client.once('ready', async () => {
  console.log(`Logged On As ${client.user.tag}!`);
  client.user.setActivity(`Im using grootie api! | https://api.grootie.ml`, { type: 'WATCHING' });
});
  const prefix = 't.'; //Put Your Prefix.

  
client.on('messageCreate', async (message) => {


  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();
  let memes = await grootie.memes();

  

  
  if(command === 'meme') {
    
const memee = new MessageEmbed()
    .setTitle(memes.title)
    .setDescription(memes.url)
    .setImage(memes.image)
    .setFooter(`${memes.upvotes} upvotes and ${memes.comments} comments`)


      
    message.channel.send({ embeds: [memee] })
    //Or You Can Use messsge.reply
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();
  const fact = await grootie.facts();

  if(command === 'fact') {

    const facte = new MessageEmbed()
    .setTitle('Here is your fact')
    .setDescription(fact.message)
    message.channel.send({ embeds: [facte] })
  }

});

//NOTW THAT COMMAND BELOW ARE NSFW, PLEASE ADD AN NSFW CHANNEL ONLY SYSTEM SINCE THIS IS JUST AN SHOWCASE ON HOW TO USE THE API AND DOESN'T HAVE ANY OTHER SYSTEMS

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const rhgif = await grootie.rpgif();

  if(command ==='randomnsfwgif'){
    const rhgife = new MessageEmbed()
    .setTitle('Here is your random nsfw gif')
    .setImage(rhgif.url)
    message.channel.send({ embeds: [rhgife] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const panties = await grootie.panties();
  if(command ==='panties'){
    const pantiese = new MessageEmbed()
    .setTitle('Here is your panties')
    .setImage(panties.url)
    message.channel.send({ embeds: [pantiese] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const paizuri = await grootie.paizuri();

  if(command ==='paizuri'){
    const paizurie = new MessageEmbed()
    .setTitle('Here is your paizuri')
    .setImage(paizuri.url)
    message.channel.send({ embeds: [paizurie] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const netorare = await grootie.netorare();
  if(command ==='netorare'){
    const netoraree = new MessageEmbed()
    .setTitle('Here is your netorare')
    .setImage(netorare.url)
    message.channel.send({ embeds: [netoraree] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const maid = await grootie.maid();

  if(command ==='maid'){
    const maide = new MessageEmbed()
    .setTitle('Here is your random nsfw gif')
    .setImage(maid.url)
    message.channel.send({ embeds: [maide] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const milf = await grootie.milf();
  
  if(command ==='milf'){
    const milfe = new MessageEmbed()
    .setTitle('Here is your milf')
    .setImage(milf.url)
    message.channel.send({ embeds: [milfe] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const hentaiass = await grootie.hentaiass();

  if(command ==='hentaiass'){
    const hentaiasse = new MessageEmbed()
    .setTitle('Here is your hentai ass')
    .setImage(hentaiass.url)
    message.channel.send({ embeds: [hentaiasse] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const hentai = await grootie.hentai();

  if(command ==='hentai'){
    const hentaie = new MessageEmbed()
    .setTitle('Here is your hentai')
    .setImage(hentai.url)
    message.channel.send({ embeds: [hentaie] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const glasses = await grootie.glasses();

  if(command ==='glasses'){
    const glassese = new MessageEmbed()
    .setTitle('Here is your glasses')
    .setImage(glasses.url)
    message.channel.send({ embeds: [glassese] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const feet = await grootie.feet();

  if(command ==='feet'){
    const feete = new MessageEmbed()
    .setTitle('Here is your feet')
    .setImage(feet.url)
    message.channel.send({ embeds: [feete] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const doujin = await grootie.doujin();

  if(command ==='doujin'){
    const doujine = new MessageEmbed()
    .setTitle('Here is your doujin')
    .setImage(doujin.url)
    message.channel.send({ embeds: [doujine] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const boobs = await grootie.boobs();

  if(command ==='boobs'){
    const boobse = new MessageEmbed()
    .setTitle('Here is your boobs')
    .setImage(boobs.url)
    message.channel.send({ embeds: [boobse] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const anal = await grootie.anal();

  if(command ==='anal'){
    const anale = new MessageEmbed()
    .setTitle('Here is your anal')
    .setImage(anal.url)
    message.channel.send({ embeds: [anale] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const blowjob = await grootie.blowjob();

  if(command ==='blowjob'){
    const blowjobe = new MessageEmbed()
    .setTitle('Here is your blowjob')
    .setImage(blowjob.url)
    message.channel.send({ embeds: [blowjobe] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const trap = await grootie.trap();

  if(command ==='trap'){
    const trape = new MessageEmbed()
    .setTitle('Here is your trap')
    .setImage(trap.url)
    message.channel.send({ embeds: [trape] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const neko = await grootie.neko();

  if(command ==='neko'){
    const nekoe = new MessageEmbed()
    .setTitle('Here is your neko')
    .setImage(neko.url)
    message.channel.send({ embeds: [nekoe] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  let waifu = await grootie.waifu();
  
  

  if(command ==='waifu'){
    const waifue = new MessageEmbed()
    .setTitle('Here is your waifu')
    .setImage(waifu.url)
    message.channel.send({ embeds: [waifue] })
  }
});

//Go To Secret Tab And Make A New Secret Named "TOKEN" and Put The Bot's Token In The Value Then Hit Enter.
client.login(process.env.TOKEN).catch((err) => {
  console.log(`The Bot's Token Is Empty Or Invalid!`);
});
