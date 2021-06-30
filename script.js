console.log("Alarm Clock");

const alarmSubmit = document.getElementById("alarmSubmit");
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
alarmSubmit.addEventListener('click', setAlarm);

function setAlarm(e) {
    e.preventDefault();
    console.log("Setting Alarm");

    const alarm = document.getElementById("alarm");
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}....`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if (timeToAlarm > 0) {
        setTimeout(() => {
            ringBell();
        }, timeToAlarm);
    }
}

function ringBell() {
    console.log("Ring Ring.....");
    
    audio.play();
}