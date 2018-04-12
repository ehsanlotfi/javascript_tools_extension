$(function() {
    var url = [
        "https://api.github.com/repos/nodejs/Node/releases/latest",
        "https://api.github.com/repos/Microsoft/TypeScript/releases/latest",
        "https://api.github.com/repos/facebook/React/releases/latest",
        "https://api.github.com/repos/facebook/React-native/releases/latest",
        "https://api.github.com/repos/webpack/Webpack/releases/latest",
        "https://api.github.com/repos/vuejs/Vue/releases/latest",
        "https://api.github.com/repos/d3/D3/releases/latest"
    ];

    url.forEach(f => {
        $.when($.ajax(f)).then(d => {
            $("ul").append(`<li><a target="_blank" href="${d.html_url}">${f.split("/")[5]} : <span>${d.tag_name.replace("v","")}</span></a></li>`)
        });
    })


});