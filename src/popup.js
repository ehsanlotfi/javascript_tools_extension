/** 
 *  type : [
 * 1:"Web Frameworks",
 * 2:"Libraries",
 * 3:"Server script",
 * 4:"Desktop Freamworks",
 * 5:"Task Runner",
 * 6:"Pakage Manager",
 * 7:"Superset/Compiler/Transpiler"
 * 8:"Testing",
 * 9:"Module Loader/Bundler",
 * 10:"Game Engines",
 * 11:"Mobile Freamworks"
 * 12:"CMS"
 * 13:"Rest api"
 * ] 
 **/


$(function() {

    var repos = [];

    var urlGithub = [

        { releaseUrl: "https://api.github.com/repos/facebook/React/releases/latest", type: 1, url: "https://reactjs.org/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/vuejs/Vue/releases/latest", type: 1, url: "http://vuejs.org", logo: "" },
        { releaseUrl: "https://api.github.com/repos/Polymer/polymer/releases/latest", type: 1, url: "https://www.polymer-project.org/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/angular/angular/tags", type: 1, url: "https://angular.io/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/angular/angular.js/tags", type: 1, url: "https://angularjs.org/", logo: "" },

        { releaseUrl: "https://api.github.com/repos/d3/D3/releases/latest", type: 2, url: "https://d3js.org/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/madrobby/zepto/releases/latest", type: 2, url: "http://zeptojs.com/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/lodash/lodash/releases/latest", type: 2, url: "https://lodash.com/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/jquery/jquery/tags", type: 2, url: "https://jquery.com/", logo: "" },

        { releaseUrl: "https://api.github.com/repos/nodejs/Node/releases/latest", type: 3, url: "https://nodejs.org/en/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/expressjs/express/releases/latest", type: 3, url: "https://expressjs.com/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/balderdashy/sails/releases/latest", type: 3, url: "https://sailsjs.com/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/fastify/fastify/releases/latest", type: 3, url: "https://www.fastify.io/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/meanjs/mean/releases/latest", type: 3, url: "http://meanjs.org/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/hapijs/hapi/releases/latest", type: 3, url: "https://hapijs.com/", logo: "" },

        { releaseUrl: "https://api.github.com/repos/electron/electron/releases/latest", type: 4, url: "https://electronjs.org/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/nwjs/nw.js/tags", type: 4, url: "https://nwjs.io/", logo: "" },

        { releaseUrl: "https://api.github.com/repos/gulpjs/gulp/releases/latest", type: 5, url: "https://gulpjs.com/", logo: "" },

        { releaseUrl: "https://api.github.com/repos/npm/npm/releases/latest", type: 6, url: "https://www.npmjs.com", logo: "" },
        { releaseUrl: "https://api.github.com/repos/yarnpkg/yarn/releases/latest", type: 6, url: "https://yarnpkg.com/en/", logo: "" },

        { releaseUrl: "https://api.github.com/repos/Microsoft/TypeScript/releases/latest", type: 7, url: "https://www.typescriptlang.org/", logo: "" },

        { releaseUrl: "https://api.github.com/repos/mochajs/mocha/releases/latest", type: 8, url: "https://mochajs.org/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/qunitjs/qunit/releases/latest", type: 8, url: "http://qunitjs.com/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/jasmine/jasmine/releases/latest", type: 8, url: "https://jasmine.github.io/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/karma-runner/karma/releases/latest", type: 8, url: "https://karma-runner.github.io/2.0/index.html", logo: "" },
        { releaseUrl: "https://api.github.com/repos/avajs/ava/releases/latest", type: 8, url: "https://github.com/avajs", logo: "" },

        { releaseUrl: "https://api.github.com/repos/webpack/Webpack/releases/latest", type: 9, url: "https://webpack.js.org/", logo: "" },

        { releaseUrl: "https://api.github.com/repos/melonjs/melonjs/releases/latest", type: 10, url: "http://melonjs.org/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/craftyjs/Crafty/releases/latest", type: 10, url: "http://craftyjs.com/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/photonstorm/phaser/releases/latest", type: 10, url: "http://www.photonstorm.com/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/gamelab/kiwi.js/releases/latest", type: 10, url: "http://www.gamelab.com/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/ondras/rot.js/releases/latest", type: 10, url: "http://ondras.github.io/rot.js/hp/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/WhitestormJS/whs.js/releases/latest", type: 10, url: "https://whs.io/", logo: "" },

        { releaseUrl: "https://api.github.com/repos/facebook/React-native/releases/latest", type: 11, url: "https://facebook.github.io/react-native/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/NativeScript/NativeScript/releases/latest", type: 11, url: "https://www.nativescript.org/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/ionic-team/ionic/releases/latest", type: 11, url: "https://ionicframework.com/", logo: "" },

        { releaseUrl: "https://api.github.com/repos/TryGhost/Ghost/releases/latest", type: 12, url: "https://ghost.org/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/keystonejs/keystone/releases/latest", type: 12, url: "http://keystonejs.com/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/pencilblue/pencilblue/releases/latest", type: 12, url: "https://github.com/pencilblue/pencilblue", logo: "" },

        { releaseUrl: "https://api.github.com/repos/restify/node-restify/releases/latest", type: 13, url: "http://restify.com/", logo: "" },
        { releaseUrl: "https://api.github.com/repos/strongloop/loopback/releases/latest", type: 13, url: "https://loopback.io/", logo: "" },
    ];


    urlGithub.forEach(f => {
        if (f.releaseUrl.includes("tags")) {
            $.when($.ajax(f.releaseUrl)).then(d => {
                repos.push({
                    name: f.releaseUrl.split("/")[5],
                    url: f.url,
                    releaseUrl: f.url,
                    version: getVersion(d).replace("v", ""),
                    type: f.type
                });
            });
        } else {
            $.when($.ajax(f.releaseUrl)).then(d => {
                repos.push({
                    name: f.releaseUrl.split("/")[5],
                    url: f.url,
                    releaseUrl: d.html_url,
                    version: d.tag_name.replace("v", ""),
                    type: f.type
                });
            });
        }


    })



    function getVersion(tags) {
        return tags.map(f => f.name).filter(e => e.replace("v", "").split(".").filter(s => isNaN(+s)).length === 0)[0]
    }


    // Append To HTML
    setTimeout(function() {
        repos.forEach(f => {
            $("#type" + f.type).append(
                `<li>
                    <img src="">
                    <a href="${f.url}" target="_blank">${f.name}</a>
                    <a href="${f.releaseUrl}" target="_blank">${f.version}</a>
                </li>`);
        })
    }, 5000)


});