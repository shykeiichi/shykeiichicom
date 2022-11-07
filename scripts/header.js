let headerFunctionRun = 0;
let lastWindowInner = 0;

var headerFunction = function() {
    if(window.innerWidth < 530) {

        document.getElementById("header").innerHTML = `<i id="header-menu" class="material-icons">menu</i>
                                                                <div style="width: 100%; height: 20px;"></div>
                                                                <a href="./index.html">shykeiichi</a>
                                                                <div style="width: 100%; height: 20px;"></div>
                                                                <img src="images/light.svg" alt="theme switcher" id="themebutton"/>`;
        
        if(lastWindowInner > 530) {
            let button = document.getElementById("header-menu")
            button.addEventListener("click", function() {
                console.log(document.getElementById("burger-menu-dropdown"))
                if(document.getElementById("header-menu").innerHTML == "menu") {
                    var div = document.createElement('div');
                    div.id = "burger-menu-dropdown"
                    div.className = "burgermenu"
                    div.innerHTML = `<div>
                                        Home
                                    </div>`;
                    document.getElementById('header').outerHTML += div.outerHTML

                    document.getElementById("header-menu").innerHTML = "close"
                } else {
                    document.getElementById("burger-menu-dropdown").outerHTML = ""
                    document.getElementById("header-menu").innerHTML = "menu"
                }
            });
        }
    } else {
        document.getElementById("header").innerHTML = `<a href="./index.html">shykeiichi</a>
                                                                <div style="width: 100%; height: 20px;"></div>
                                                                <img src="images/light.svg" alt="theme switcher" id="themebutton"/>`;
    }
    if(theme == undefined) {
        theme = "light";
    }
    let themebutton = document.getElementById('themebutton')
    if(themebutton != null) {
        themebutton.setAttribute('src', `images/${theme}.svg`)
    }
    
    document.getElementById('themebutton').addEventListener('click', function (event) {
        if(theme == "light") {
            theme = "dark";
        } else {
            theme = "light";
        }
        updateTheme();
    });

    lastWindowInner = window.innerWidth;
}

window.addEventListener("resize", headerFunction);
window.addEventListener("onload", headerFunction);

headerFunction();