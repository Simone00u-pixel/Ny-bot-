const Discord = require("discord.js");
const client = new Discord.Client();
client.login('ODI2MjE3Mzk0NjkwMTk1NTI2.YGJQ6Q.kwKQpKlCyJ75puVGBfYeQM52Zf4')
client.on("message", (message) =>{
   
   
   //time
    if(message.content == "!time"){
        var data = new Date();
        var ora = data.getHours();
        var minuto = data.getMinutes();

        message.channel.send(ora + ":" + minuto);
}

    })

