if(localStorage.getItem('theme') == undefined) {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = "dark";
    } else {
        theme = "light";
    }
} else {
    theme = localStorage.getItem('theme');
}

updateTheme();

function updateTheme() {
    document.getElementById('themebutton').setAttribute('src', `images/${theme}.svg`)
    if(document.getElementById('themecss') != undefined) {
        document.getElementById('themecss').remove();
    }
    var cssFile = document.createElement('link');
    cssFile.rel = 'stylesheet';

    cssFile.href = `styles/styles_${theme}.css`;  // or path for file {themes('/styles/mobile.css')}
    cssFile.id = "themecss";
    document.head.appendChild(cssFile); 

    localStorage.setItem('theme', theme);

    setTheme(theme);
}