function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
document.getElementById('mc_trigger').onclick = () => {
    chrome.tabs.executeScript({ code: "var b = document.querySelector('video'); if(b){b.play();}" });
    let form = document.getElementById('secs_form');
    let btn = document.getElementById('mc_trigger');
    let prev = btn.innerHTML
    btn.innerHTML = "Wait for it...";

    var startsIn = parseInt(form.secs.value);
    var roundRange = getRndInteger(1000, startsIn*1000);
    chrome.tabs.executeScript({ code: "console.log("+roundRange+");" });


    setTimeout(() => {
      btn.innerHTML = prev;
      chrome.tabs.executeScript({ code: "var b = document.querySelector('video'); if(b){b.pause();}" });
    }, roundRange);

}
