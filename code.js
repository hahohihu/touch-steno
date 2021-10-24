function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;
  
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
  
    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    }
    else {
        cancelFullScreen.call(doc);
    }
}

function update_background(ev) {
    switch (ev.targetTouches.length) {
        case 1:
            ev.target.style.background = "grey";
            break;
        default:
            ev.target.style.background = "white";
    }
}

let key_translations = {
    "left-s": "q",
    "left-t": "w",
    "left-k": "s",
    "left-w": "d",
    "left-p": "e",
    "left-h": "r",
    "left-r": "f",
    "star": "t",
    "right-f": "u",
    "right-r": "j",
    "right-p": "i",
    "right-b": "k",
    "right-l": "o",
    "right-g": "l",
    "right-t": "p",
    "right-s": ";",
    "right-d": "[",
    "right-z": "'",
    "a": "c",
    "o": "v",
    "e": "n",
    "u": "m",
};

window.onload = (e) => {
    document.getElementById("goFS").onclick = (e) => {
        toggleFullScreen();
    }
    let keys = document.getElementsByClassName("key");
    for (let key of keys) {
        key.ontouchstart = (e) => {
            update_background(e);
        };
        key.ontouchmove = (e) => {};    
        key.ontouchend = (e) => { 
            update_background(e);
        };
    }
};