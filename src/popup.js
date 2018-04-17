/** 
 *  type : [
 * 1:"Web Frameworks",
 * 2:"Libraries",
 * 3:"Server script",
 * 4:"Desktop Freamworks",
 * 5:"Task Runner",
 * 6:"Pakage Manager",
 * 7:"Superset and compiler"
 * 8:"Testing",
 * 9:"Module Loader/Bundler",
 * 10:"Game Engines",
 * 11:"Mobile Freamworks"
 * 12:"CMS"
 * 13: "Rest api"
 * ] 
 **/


$(function() {

    var repos = [];

    var urlGithub = [

        { releaseUrl: "https://api.github.com/repos/facebook/React/releases/latest", type: 1, url: "" },
        { releaseUrl: "https://api.github.com/repos/vuejs/Vue/releases/latest", type: 1, url: "" },
        { releaseUrl: "https://api.github.com/repos/Polymer/polymer/releases/latest", type: 1, url: "" },

        { releaseUrl: "https://api.github.com/repos/d3/D3/releases/latest", type: 2, url: "" },
        { releaseUrl: "https://api.github.com/repos/madrobby/zepto/releases/latest", type: 2, url: "" },
        { releaseUrl: "https://api.github.com/repos/lodash/lodash/releases/latest", type: 2, url: "" },

        { releaseUrl: "https://api.github.com/repos/nodejs/Node/releases/latest", type: 3, url: "" },
        { releaseUrl: "https://api.github.com/repos/expressjs/express/releases/latest", type: 3, url: "" },
        { releaseUrl: "https://api.github.com/repos/balderdashy/sails/releases/latest", type: 3, url: "" },
        { releaseUrl: "https://api.github.com/repos/fastify/fastify/releases/latest", type: 3, url: "" },
        { releaseUrl: "https://api.github.com/repos/meanjs/mean/releases/latest", type: 3, url: "" },
        { releaseUrl: "https://api.github.com/repos/hapijs/hapi/releases/latest", type: 3, url: "" },

        { releaseUrl: "https://api.github.com/repos/electron/electron/releases/latest", type: 4, url: "" },

        { releaseUrl: "https://api.github.com/repos/gulpjs/gulp/releases/latest", type: 5, url: "" },

        { releaseUrl: "https://api.github.com/repos/npm/npm/releases/latest", type: 6, url: "" },
        { releaseUrl: "https://api.github.com/repos/yarnpkg/yarn/releases/latest", type: 6, url: "" },

        { releaseUrl: "https://api.github.com/repos/Microsoft/TypeScript/releases/latest", type: 7, url: "" },

        { releaseUrl: "https://api.github.com/repos/mochajs/mocha/releases/latest", type: 8, url: "" },
        { releaseUrl: "https://api.github.com/repos/qunitjs/qunit/releases/latest", type: 8, url: "" },
        { releaseUrl: "https://api.github.com/repos/jasmine/jasmine/releases/latest", type: 8, url: "" },
        { releaseUrl: "https://api.github.com/repos/karma-runner/karma/releases/latest", type: 8, url: "" },
        { releaseUrl: "https://api.github.com/repos/avajs/ava/releases/latest", type: 8, url: "" },

        { releaseUrl: "https://api.github.com/repos/webpack/Webpack/releases/latest", type: 9, url: "" },

        { releaseUrl: "https://api.github.com/repos/melonjs/melonjs/releases/latest", type: 10, url: "" },
        { releaseUrl: "https://api.github.com/repos/craftyjs/Crafty/releases/latest", type: 10, url: "" },
        { releaseUrl: "https://api.github.com/repos/photonstorm/phaser/releases/latest", type: 10, url: "" },
        { releaseUrl: "https://api.github.com/repos/gamelab/kiwi.js/releases/latest", type: 10, url: "" },
        { releaseUrl: "https://api.github.com/repos/ondras/rot.js/releases/latest", type: 10, url: "" },
        { releaseUrl: "https://api.github.com/repos/WhitestormJS/whs.js/releases/latest", type: 10, url: "" },

        { releaseUrl: "https://api.github.com/repos/facebook/React-native/releases/latest", type: 11, url: "" },
        { releaseUrl: "https://api.github.com/repos/NativeScript/NativeScript/releases/latest", type: 11, url: "" },
        { releaseUrl: "https://api.github.com/repos/ionic-team/ionic/releases/latest", type: 11, url: "" },

        { releaseUrl: "https://api.github.com/repos/TryGhost/Ghost/releases/latest", type: 12, url: "" },
        { releaseUrl: "https://api.github.com/repos/keystonejs/keystone/releases/latest", type: 12, url: "" },
        { releaseUrl: "https://api.github.com/repos/pencilblue/pencilblue/releases/latest", type: 12, url: "" },

        { releaseUrl: "https://api.github.com/repos/restify/node-restify/releases/latest", type: 13, url: "" },
        { releaseUrl: "https://api.github.com/repos/strongloop/loopback/releases/latest", type: 13, url: "" },
    ];


    urlGithub.forEach(f => {
        $.when($.ajax(f.releaseUrl)).then(d => {
            repos.push({
                name: f.releaseUrl.split("/")[5],
                url: f.url,
                releaseUrl: d.html_url,
                version: d.tag_name.replace("v", ""),
                type: f.type
            });
        });
    })
    console.log(repos);

});