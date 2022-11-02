async function sendData() {
    let messageelement = document.getElementById("composetextarea") 
    let senderelement = document.getElementById("sendertext") 
    let messagevalue = document.getElementById("composetextarea").value 
    let sendervalue = document.getElementById("sendertext").value 

    if(messagevalue.length == 0) {
        messageelement.setAttribute("placeholder", "No text provided")
        return
    }

    if(sendervalue == "") {
        sendervalue = null
    }

    const response = await fetch(`https://22widi.ssis.nu/api/v1/board/send`, {
        method: "PUT",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            "message": messagevalue,
            "sender": sendervalue
        })
    });

    messageelement.value = ""
    senderelement.value = ""

    let doc = document.getElementById("postslist")
    doc.innerHTML = ""

    start = 0
    loadData()
}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        start += 10;
        loadData();
    }
};

async function loadData() {
    const response = await fetch(`https://22widi.ssis.nu/api/v1/board/get?start=${start}`, {
        method: "GET",
        headers: {
            "Content-Type": 'application/json',
        }
    });
    let json = await response.json();

    let doc = document.getElementById("postslist")
    var newhtml = "";
    for(var i = 0; i < Object.keys(json).length; i++) {
        var date = new Date(parseInt(json[i]["posttime"])*1000);
        newhtml += "<div id=\"post\">"
        newhtml += "<div id=\"text\">"
        newhtml += json[i]["message"]
        newhtml += "</div>"
        newhtml += "<div id=\"header\">"
        newhtml += "<div id=\"user\">"
        newhtml += json[i]["sender"] == null ? "Anonymous" : json[i]["sender"];
        newhtml += "</div>"
        newhtml += "<div id=\"date\">"
        newhtml += `${date.getHours()}:${date.getMinutes()} ${date.getDate()} ${parseMonth(date.getMonth())} ${date.getFullYear()}`
        newhtml += "</div>"
        newhtml += "</div>"
        newhtml += "</div>"
    }
    doc.innerHTML += newhtml;
}

function parseMonth(monthnum) {
    switch(monthnum) {
        case 0:
            return "Jan"
        case 1:
            return "Feb"
        case 2:
            return "Mar"
        case 3:
            return "Apr"
        case 4: 
            return "May"
        case 5:
            return "Jun"
        case 6:
            return "Jul"
        case 7:
            return "Aug"
        case 8:
            return "Sep"
        case 9: 
            return "Oct"
        case 10:
            return "Nov"
        case 11:
            return "Dec"
    }
} 

loadData();