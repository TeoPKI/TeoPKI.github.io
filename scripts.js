function openTab(tabId) {
    var tabs;
    tabs = document.getElementsByClassName("tab");

    for (let index = 0; index < tabs.length; index++) {
        const element = tabs[index];
        element.style.display = "none";
    }

    document.getElementById(tabId).style.display = "block";
    
    
    // refresh iframes...
    document.querySelectorAll('iframe').forEach((iframe) => {
        iframe.src = iframe.src
    });
}
