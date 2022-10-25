function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
  
function hexToRgb(hex, result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)) {
    return result ? result.map(i => parseInt(i, 16)).slice(1) : null
    //returns [23, 14, 45] -> reformat if needed
}

String.prototype.hashCode = function() {
    var hash = 0,
      i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
}  

function addToRGB(rgbColor, add=-40) {
    let splitColor = rgbColor.split(",");
    for(var i = 0; i < 3; i ++) {
        splitColor[i] = parseInt(splitColor[i]) + add;
        splitColor[i] = splitColor[i].toString()
    }
    return splitColor.join(",");
}

function generateButtons() {
    let buttons = document.getElementsByTagName("CButton");
    var newCSS = "";
    for(var i = 0; i < buttons.length; i++) {
        let button = buttons[i];

        var color = button.getAttribute("color");
        var fixedColor;

        if(color == null) {
            color = "#7FBCD2"
        }
        if(color[0] != "#" && color.length != 11) { 
            console.error("Button color doesn't match the rgb format '255,255,255'");
            color = "#7FBCD2"
        } else {
            fixedColor = color;
        }
        if(color[0] == "#" && color.length != 7) {
            console.error("Button color doesn't match the hex format '#FFFFFF'");
            color = "#7FBCD2"
        } else {
            fixedColor = hexToRgb(color).join(",");
        }
        color = fixedColor;
        
        let styleName = "cl-" + `cl${i}`.hashCode() + "-light";
        newCSS += `.${styleName} { background-color: rgb(${color}); box-shadow: 0 5px 0 rgb(${addToRGB(fixedColor)}); }`;
        newCSS += `.${styleName}:hover { box-shadow: 0 8px 0 rgb(${addToRGB(fixedColor)}); }`;
        newCSS += `.${styleName}:active { box-shadow: 0 0 0 rgb(${addToRGB(fixedColor)}); }`;
       
        styleName = "cl-" + `cl${i}`.hashCode() + "-dark";
        newCSS += `.${styleName} { background-color: rgb(${addToRGB(fixedColor, -70)}); box-shadow: 0 5px 0 rgb(${addToRGB(fixedColor, -100)}); }`;
        newCSS += `.${styleName}:hover { box-shadow: 0 8px 0 rgb(${addToRGB(fixedColor, -100)}); }`;
        newCSS += `.${styleName}:active { box-shadow: 0 0 0 rgb(${addToRGB(fixedColor, -100)}); }`;

        button.classList.add(`button`);

        // Add listeners

        if(button.getAttribute("on:click") != null) {
            button.addEventListener("click", function() {
                eval(button.getAttribute("on:click"));
            });
        }

        if(button.getAttribute("on:redirect") != null) {
            button.addEventListener("click", function() {
                window.location.replace(button.getAttribute("on:redirect"));
            });
        }
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(newCSS));
    }

    head.appendChild(style);

    for(var i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        let styleName = "cl-" + `cl${i}`.hashCode() + "-light";
        button.classList.add(styleName)
    }
}
generateButtons();

function setTheme(theme) {
    if(theme != "dark" && theme != "light") {
        console.error(`Invalid theme ${theme}`);
    }

    let buttons = document.getElementsByTagName("CButton");
    for(var i = 0; i < buttons.length; i++) {
        let button = buttons[i];

        button.className = "";
        button.classList.add("button");
        let styleName = "cl-" + `cl${i}`.hashCode() + "-" + theme;
        button.classList.add(styleName)
    }
}