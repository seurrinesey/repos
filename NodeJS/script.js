var fs = require('fs');
var path = require('path');


var currentFolder = path.dirname(fs.realpathSync(__filename));

console.log('le dossier courant ==> ', currentFolder);

if (!fs.existsSync(currentFolder+'/monDossier')){
    fs.mkdirSync('./monDossier');
}



