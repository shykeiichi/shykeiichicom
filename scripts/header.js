var headerFunction = function() {
    if(window.innerWidth < 530) {
        let doc = document.getElementById("header").innerHTML = `<i id="header-menu" class="material-icons">menu</i>
                                                                <div style="width: 100%; height: 20px;"></div>
                                                                <a href="./index.html">shykeiichi</a>
                                                                <div style="width: 100%; height: 20px;"></div>
                                                                <img src="images/light.svg" alt="theme switcher" id="themebutton"/>`;
    } else {
        let doc = document.getElementById("header").innerHTML = `<a href="./index.html">shykeiichi</a>
                                                                <div class="headerlinks">  
                                                                    <a href="./board.html">board</a>  
                                                                    <a href="./medialog.html">medialog</a>
                                                                </div>
                                                                <div style="width: 100%; height: 20px;"></div>
                                                                <div class="headerlinks">  
                                                                    <a style="width: 100px" href="./login.html">Log in</a>
                                                                </div>
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
}

window.addEventListener("resize", headerFunction);
window.addEventListener("onload", headerFunction);

headerFunction();