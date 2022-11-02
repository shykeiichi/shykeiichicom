let sessioninfo;

window.onload = async function() {
    if(localStorage.getItem("sessionid") == undefined) {
        return;
    } 
    
    const response = await fetch(`https://22widi.ssis.nu/api/v1/user/validatesession`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            "sessionid": localStorage.getItem("sessionid")
        })
    });

    if(response.status == 400) {
        localStorage.setItem("sessionid", undefined);
        return;
    }
    
    let json = await response.json();

    sessioninfo = json;
    headerFunction();
}