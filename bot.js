const Discord = require("discord.js");
const myid = ['640524047452471306']
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();




client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);
client7.login(process.env.TOKEN7); 
client8.login(process.env.TOKEN8); 
client9.login(process.env.TOKEN9); 
client10.login(process.env.TOKEN10); 



client.on('message', message => {
  if (message.content === '$d') {
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client2.on('message', message => {
  if(message.content === '$d'){
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client3.on('message', message => {
  if(message.content === '$d'){
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client4.on('message', message => {
  if (message.content === '$d') {
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client5.on('message', message => {
  if(message.content === '$d'){
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
  if(message.content === '$d'){
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client7.on('message', message => {
  if (message.content === '$d') {
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client8.on('message', message => {
  if(message.content === '$d'){
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client9.on('message', message => {
  if(message.content === '$d'){
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client10.on('message', message => {
  if (message.content === '$d') {
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});



client.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client6.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client7.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client8.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client9.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client10.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message' , message =>{
  if(message.content.startsWith("$1")){
    var x = message.content.split(' ').slice(1).join(' ')
      message.channel.send("#credits "+"<@" + myid + ">"+  x )
 };
})

client2.on('message' , message =>{
  if(message.content.startsWith("$1")){
    var x = message.content.split(' ').slice(1).join(' ')
      message.channel.send("#credits "+"<@" + myid + ">"+  x )
 };
})

client3.on('message' , message =>{
  if(message.content.startsWith("$1")){
    var x = message.content.split(' ').slice(1).join(' ')
      message.channel.send("#credits "+"<@" + myid + ">"+  x )
 };
})

client4.on('message' , message =>{
  if(message.content.startsWith("$1")){
    var x = message.content.split(' ').slice(1).join(' ')
      message.channel.send("#credits "+"<@" + myid + ">"+  x )
 };
})

client5.on('message' , message =>{
  if(message.content.startsWith("$1")){
    var x = message.content.split(' ').slice(1).join(' ')
      message.channel.send("#credits "+"<@" + myid + ">"+  x )
 };
})

client6.on('message' , message =>{
  if(message.content.startsWith("$1")){
    var x = message.content.split(' ').slice(1).join(' ')
      message.channel.send("#credits "+"<@" + myid + ">"+  x )
 };
})

client7.on('message' , message =>{
  if(message.content.startsWith("$1")){
    var x = message.content.split(' ').slice(1).join(' ')
      message.channel.send("#credits "+"<@" + myid + ">"+  x )
 };
})

client8.on('message' , message =>{
  if(message.content.startsWith("$1")){
    var x = message.content.split(' ').slice(1).join(' ')
      message.channel.send("#credits "+"<@" + myid + ">"+  x )
 };
})

client9.on('message' , message =>{
  if(message.content.startsWith("$1")){
    var x = message.content.split(' ').slice(1).join(' ')
      message.channel.send("#credits "+"<@" + myid + ">"+  x )
 };
})

client10.on('message' , message =>{
  if(message.content.startsWith("$1")){
    var x = message.content.split(' ').slice(1).join(' ')
      message.channel.send("#credits "+"<@" + myid + ">"+  x )
 };
})
