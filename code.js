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
// Change background color based on the number simultaneous touches
// in the event's targetTouches list:
//   yellow - one tap (or hold)
//   pink - two taps
//   lightblue - more than two taps
switch (ev.targetTouches.length) {
    case 1:
    // Single tap`
    ev.target.style.background = "yellow";
    break;
    case 2:
    // Two simultaneous touches
    ev.target.style.background = "pink";
    break;
    default:
    // More than two simultaneous touches
    ev.target.style.background = "lightblue";
}
}

window.onload = (e) => {
    document.getElementById("goFS").onclick = (e) => {
        toggleFullScreen();
    }
    let keys = document.getElementsByClassName("key");
    for (let key of keys) {
        key.ontouchstart = (e) => {
            update_background(e);
        };
        key.ontouchmove = update_background;
        key.ontouchend = (e) => {};
    }
};