function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
document.getElementById('mc_trigger').onclick = () => {
    let form = document.getElementById('secs_form');

    var startsIn = parseInt(form.secs.value);
    console.log(startsIn);

    var roundRange = getRndInteger(0, 30);

    setTimeout(() => {
        chrome.tabs.executeScript({ code: "var b = document.querySelector('button.ytp-play-button.ytp-button'); if(b){b.click();} console.log(() => {});" });
    }, (startsIn + roundRange) * 1000);

}

document.getElementById('close').onclick = () => { window.close(); };

document.getElementById('play_pause').onclick = () => {
    chrome.tabs.executeScript({ code: "var b = document.querySelector('button.ytp-play-button.ytp-button'); if(b){b.click();}" });
};

document.getElementById('reset').onclick = () => {
    let form = document.getElementById('secs_form');

    var startsIn = parseInt(form.secs.value);
    console.log(startsIn);

    var roundRange = getRndInteger(0, 30);

    setTimeout(() => {
        chrome.tabs.executeScript({ code: "var b = document.querySelector('button.ytp-play-button.ytp-button'); if(b){b.click();} console.log(() => {});" });
    }, (startsIn + roundRange) * 1000);
}