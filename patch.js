var fs = require('fs');

function patchPackageJSON() {
const packageJsonPath = "./package.json";
fs.readFile(packageJsonPath, (err, data) => {
    if(err) {
        console.log(err);
    }
    var json = JSON.parse(data);
    json.browser = { "fs": false, "tls": false, "net": false }
    fs.writeFileSync(packageJsonPath, JSON.stringify(json));
});

}

function patchWebPackConfig() {
    const webpackPath = "node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js";
     const webpackPatch = `
     node: {
         crypto: true,
         http: true,
         https: true,
         stream: true,
         ws: true
     }`;

    fs.readFile(webpackPath, (err, data) => {
        if(err) {
            console.log(err)
        }
        const dataStr = data.toString('utf8');
        var replace = dataStr.replace('node: false,', webpackPatch);
        fs.writeFileSync(webpackPath, replace);
    });

}

patchWebPackConfig();
patchPackageJSON();