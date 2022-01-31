
const colors = require('colors');



/**
 * Start Discord Bot
*/
function StartBot(Client, Token) {
    try {
        Client.login(Token);
    }catch{
        console.log('Starting Bot ERROR'.red);
    }
}


/**
 * End Discord Bot
 */
function StopBot(Client) {
    try{
        Client.destroy();
    }catch{
        console.log('Ending Bot ERROR'.red);
    }
}



/**
 * Creates a Custom package.json
 */
function NPM_PKG_Creator(Name, Version, Description, Main_File, Author, License='ISC') {
    let Txt = `{
        "name": "${Name}",
        "version": "${Version}",
        "description": "${Description}",
        "main": "${Main_File}",
        "scripts": {
          "Bot": "clear && node ."
        },
        "keywords": [],
        "author": "${Author}",
        "license": "${License}",
        "dependencies": {
          "colors": "^1.4.0",
          "discord.js": "^13.6.0",
          "dotenv": "^15.0.0"
        }
      }
    `;

    return Txt;
}


module.exports = {
    StartBot,
    StopBot,
    NPM_PKG_Creator
}
