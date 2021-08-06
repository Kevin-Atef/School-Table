let date, hour, minute, day, time;
let cancelled = false;
const sunday = 0, monday = 1, tuesday = 2, wednesday = 3, thursday = 4, friday = 5, saturday = 6;
period1 = ["8:00", "8:01", "8:02", "8:03", "8:04", "8:05", "8:06", "8:07", "8:08", "8:09", "8:10", "8:11", "8:12", "8:13", "8:14", "8:15", "8:16", "8:17", "8:18", "8:19", "8:20", "8:21", "8:22", "8:23", "8:24", "8:25", "8:26", "8:27", "8:28", "8:29", "8:30", "8:31", "8:32", "8:33", "8:34", "8:35", "8:36", "8:37", "8:38", "8:39", "8:40", "8:41", "8:42", "8:43", "8:44", "8:45", "08:00", "08:01", "08:02", "08:03", "08:04", "08:05", "08:06", "08:07", "08:08", "08:09", "08:10", "08:11", "08:12", "08:13", "08:14", "08:15", "08:16", "08:17", "08:18", "08:19", "08:20", "08:21", "08:22", "08:23", "08:24", "08:25", "08:26", "08:27", "08:28", "08:29", "08:30", "08:31", "08:32", "08:33", "08:34", "08:35", "08:36", "08:37", "08:38", "08:39", "08:40", "08:41", "08:42", "08:43", "08:44", "08:45"];
period2 = ["8:46", "8:47", "8:48", "8:49", "8:50", "8:51", "8:52", "8:53", "8:54", "8:55", "8:56", "8:57", "8:58", "8:59", "9:00", "9:01", "9:02", "9:03", "9:04", "9:05", "9:06", "9:07", "9:08", "9:09", "9:10", "9:11", "9:12", "9:13", "9:14", "9:15", "9:16", "9:17", "9:18", "9:19", "9:20", "9:21", "9:22", "9:23", "9:24", "9:25", "9:26", "9:27", "9:28", "9:29", "9:30", "08:46", "08:47", "08:48", "08:49", "08:50", "08:51", "08:52", "08:53", "08:54", "08:55", "08:56", "08:57", "08:58", "08:59", "09:00", "09:01", "09:02", "09:03", "09:04", "09:05", "09:06", "09:07", "09:08", "09:09", "09:10", "09:11", "09:12", "09:13", "09:14", "09:15", "09:16", "09:17", "09:18", "09:19", "09:20", "09:21", "09:22", "09:23", "09:24", "09:25", "09:26", "09:27", "09:28", "09:29", "09:30"];
period3 = ["9:30", "9:31", "9:32", "9:33", "9:34", "9:35", "9:36", "9:37", "9:38", "9:39", "9:40", "9:41", "9:42", "9:43", "9:44", "9:45", "9:46", "9:47", "9:48", "9:49", "9:50", "9:51", "9:52", "9:53", "9:54", "9:55", "9:56", "9:57", "9:58", "9:59", "10:00", "10:01", "10:02", "10:03", "10:04", "10:05", "10:06", "10:07", "10:08", "10:09", "10:10", "10:11", "10:12", "10:13", "10:14", "10:15", "09:30", "09:31", "09:32", "09:33", "09:34", "09:35", "09:36", "09:37", "09:38", "09:39", "09:40", "09:41", "09:42", "09:43", "09:44", "09:45", "09:46", "09:47", "09:48", "09:49", "09:50", "09:51", "09:52", "09:53", "09:54", "09:55", "09:56", "09:57", "09:58", "09:59"];
period4 = ["10:16", "10:17", "10:18", "10:19", "10:20", "10:21", "10:22", "10:23", "10:24", "10:25", "10:26", "10:27", "10:28", "10:29", "10:30", "10:31", "10:32", "10:33", "10:34", "10:35", "10:36", "10:37", "10:38", "10:39", "10:40", "10:41", "10:42", "10:43", "10:44", "10:45", "10:46", "10:47", "10:48", "10:49", "10:50", "10:51", "10:52", "10:53", "10:54", "10:55", "10:56", "10:57", "10:58", "10:59", "11:00"];
period5 = ["11:01", "11:02", "11:03", "11:04", "11:05", "11:06", "11:07", "11:08", "11:09", "11:10", "11:11", "11:12", "11:13", "11:14", "11:15", "11:16", "11:17", "11:18", "11:19", "11:20", "11:21", "11:22", "11:23", "11:24", "11:25", "11:26", "11:27", "11:28", "11:29", "11:30", "11:31", "11:32", "11:33", "11:34", "11:35", "11:36", "11:37", "11:38", "11:39", "11:40", "11:41", "11:42", "11:43", "11:44", "11:45"];
breakPeriod = ["11:46", "11:47", "11:48", "11:49", "11:50", "11:51", "11:52", "11:53", "11:54", "11:55", "11:56", "11:57", "11:58", "11:59", "12:00", "12:01", "12:02", "12:03", "12:04", "12:05"];
period6 = ["12:06", "12:07", "12:08", "12:09", "12:10", "12:11", "12:12", "12:13", "12:14", "12:15", "12:16", "12:17", "12:18", "12:19", "12:20", "12:21", "12:22", "12:23", "12:24", "12:25", "12:26", "12:27", "12:28", "12:29", "12:30", "12:31", "12:32", "12:33", "12:34", "12:35", "12:36", "12:37", "12:38", "12:39", "12:40", "12:41", "12:42", "12:43", "12:44", "12:45", "12:46", "12:47", "12:48", "12:49", "12:50"];
period7 = ["12:51", "12:52", "12:53", "12:54", "12:55", "12:56", "12:57", "12:58", "12:59", "13:00", "13:01", "13:02", "13:03", "13:04", "13:05", "13:06", "13:07", "13:08", "13:09", "13:10", "13:11", "13:12", "13:13", "13:14", "13:15", "13:16", "13:17", "13:18", "13:19", "13:20", "13:21", "13:22", "13:23", "13:24", "13:25", "13:26", "13:27", "13:28", "13:29", "13:30", "13:31", "13:32", "13:33", "13:34", "13:35", "01:00", "01:01", "01:02", "01:03", "01:04", "01:05", "01:06", "01:07", "01:08", "01:09", "01:10", "01:11", "01:12", "01:13", "01:14", "01:15", "01:16", "01:17", "01:18", "01:19", "01:20", "01:21", "01:22", "01:23", "01:24", "01:25", "01:26", "01:27", "01:28", "01:29", "01:30", "01:31", "01:32", "01:33", "01:34", "01:35"];
period8 = ["13:36", "13:37", "13:38", "13:39", "13:40", "13:41", "13:42", "13:43", "13:44", "13:45", "13:46", "13:47", "13:48", "13:49", "13:50", "13:51", "13:52", "13:53", "13:54", "13:55", "13:56", "13:57", "13:58", "13:59", "14:00", "14:01", "14:02", "14:03", "14:04", "14:05", "14:06", "14:07", "14:08", "14:09", "14:10", "14:11", "14:12", "14:13", "14:14", "14:15", "14:16", "14:17", "14:18", "14:19", "14:20", "01:36", "01:37", "01:38", "01:39", "01:40", "01:41", "01:42", "01:43", "01:44", "01:45", "01:46", "01:47", "01:48", "01:49", "01:50", "01:51", "01:52", "01:53", "01:54", "01:55", "01:56", "01:57", "01:58", "01:59", "02:00", "2:01", "2:02", "2:03", "2:04", "2:05", "2:06", "2:07", "2:08", "2:09", "2:10", "2:11", "2:12", "2:13", "2:14", "2:15", "2:16", "2:17", "2:18", "2:19", "2:20"];

function updateDayTime() {
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    if(minute < 10) {
        minute = "0" + minute;
    }
    day = date.getDay();
    time = `${hour}:${minute}`
    document.getElementById('time').innerHTML = `The time is: ${time}`;
}


function breakF() {
    document.getElementById('subject').setAttribute("src", "images/Break.png");
    document.getElementById('subject').setAttribute("title", "Break");
    document.getElementById('subject').setAttribute("alt", "Break");
    document.getElementById('main').className = "break";
    document.getElementById('period-text').className = "break";
    document.getElementById('period-text').innerHTML = `Break Time, go have fun !`;
    cancelled = true;
}
function home() {
    document.getElementById('subject').setAttribute("src", "images/Home.png");
    document.getElementById('subject').setAttribute("title", "Home");
    document.getElementById('subject').setAttribute("alt", "Home");
    document.getElementById('main').className = "home";
    document.getElementById('period-text').className = "home";
    document.getElementById('period-text').innerHTML = `You are at home right now, don't forget to do your homework!`;
    cancelled = true;
}
function arabic(i) {
    document.getElementById('subject').setAttribute("src", "images/Arabic.png");
    document.getElementById('subject').setAttribute("title", "Arabic");
    document.getElementById('subject').setAttribute("alt", "Arabic");
    document.getElementById('main').className = "arabic";
    document.getElementById('period-text').className = "arabic";
    document.getElementById('period-text').innerHTML = `Arabic Period ${i}`;
    cancelled = true;
}
function english(i) {
    document.getElementById('subject').setAttribute("src", "images/English.png");
    document.getElementById('subject').setAttribute("title", "English");
    document.getElementById('subject').setAttribute("alt", "English");
    document.getElementById('main').className = "english";
    document.getElementById('period-text').className = "english";
    document.getElementById('period-text').innerHTML = `English Period ${i}`;
    cancelled = true;
}
function german(i) {
    document.getElementById('subject').setAttribute("src", "images/German.png");
    document.getElementById('subject').setAttribute("title", "German");
    document.getElementById('subject').setAttribute("alt", "German");
    document.getElementById('main').className = "german";
    document.getElementById('period-text').className = "german";
    document.getElementById('period-text').innerHTML = `German Period ${i}`;
    cancelled = true;
}
function math(i) {
    document.getElementById('subject').setAttribute("src", "images/Math.png");
    document.getElementById('subject').setAttribute("title", "Math");
    document.getElementById('subject').setAttribute("alt", "Math");
    document.getElementById('main').className = "math";
    document.getElementById('period-text').className = "math";
    document.getElementById('period-text').innerHTML = `Math Period ${i}`;
    cancelled = true;
}
function science(i) {
    document.getElementById('subject').setAttribute("src", "images/Science.png");
    document.getElementById('subject').setAttribute("title", "Science");
    document.getElementById('subject').setAttribute("alt", "Science");
    document.getElementById('main').className = "science";
    document.getElementById('period-text').className = "science";
    document.getElementById('period-text').innerHTML = `Science Period ${i}`;
    cancelled = true;
}
function social(i) {
    document.getElementById('subject').setAttribute("src", "images/Social Studies.png");
    document.getElementById('subject').setAttribute("title", "Social Studies");
    document.getElementById('subject').setAttribute("alt", "Social Studies");
    document.getElementById('main').className = "social";
    document.getElementById('period-text').className = "social";
    document.getElementById('period-text').innerHTML = `Social Studies Period ${i}`;
    cancelled = true;
}
function computer(i) {
    document.getElementById('subject').setAttribute("src", "images/Computer.png");
    document.getElementById('subject').setAttribute("title", "Computer");
    document.getElementById('subject').setAttribute("alt", "Computer");
    document.getElementById('main').className = "computer";
    document.getElementById('period-text').className = "computer";
    document.getElementById('period-text').innerHTML = `Computer Period ${i}`;
    cancelled = true;
}
function art(i) {
    document.getElementById('subject').setAttribute("src", "images/Art.png");
    document.getElementById('subject').setAttribute("title", "Art");
    document.getElementById('subject').setAttribute("alt", "Art");
    document.getElementById('main').className = "art";
    document.getElementById('period-text').className = "art";
    document.getElementById('period-text').innerHTML = `Art Period ${i}`;
    cancelled = true;
}
function pe(i) {
    document.getElementById('subject').setAttribute("src", "images/PE.png");
    document.getElementById('subject').setAttribute("title", "P.E.");
    document.getElementById('subject').setAttribute("alt", "P.E.");
    document.getElementById('main').className = "pe";
    document.getElementById('period-text').className = "pe";
    document.getElementById('period-text').innerHTML = `P.E. Period ${i}`;
    cancelled = true;
}
function activity(i) {
    document.getElementById('subject').setAttribute("src", "images/Activity.png");
    document.getElementById('subject').setAttribute("title", "Activity");
    document.getElementById('subject').setAttribute("alt", "Activity");
    document.getElementById('main').className = "activity";
    document.getElementById('period-text').className = "activity";
    document.getElementById('period-text').innerHTML = `Activity Period ${i}`;
    cancelled = true;
}
function religion(i) {
    document.getElementById('subject').setAttribute("src", "images/Religion.png");
    document.getElementById('subject').setAttribute("title", "Religion");
    document.getElementById('subject').setAttribute("alt", "Religion");
    document.getElementById('main').className = "religion";
    document.getElementById('period-text').className = "religion";
    document.getElementById('period-text').innerHTML = `Religion Period ${i}`;
    cancelled = true;
}


function compareDate() {
    if(day === sunday) {
        if(period1.includes(time)) {
            arabic(1);
        }
        else if(period2.includes(time)){
            arabic(2);
        }
        else if(period3.includes(time)){
            math(1);
        }
        else if(period4.includes(time)){
            math(2);
        }
        else if(period5.includes(time)){
            english(1);
        }
        else if(period6.includes(time)){
            social(1);
        }
        else if(period7.includes(time)){
            social(2);
        }
        else if(period8.includes(time)){
            english(1);
        }
        else if(breakPeriod.includes(time)){
            breakF();
        }
        else {
            home();
        }
    }
    else if(day === monday) {
        if(period1.includes(time)) {
            computer(1);
        }
        else if(period2.includes(time)){
            computer(2);
        }
        else if(period3.includes(time)){
            social(1);
        }
        else if(period4.includes(time)){
            social(2);
        }
        else if(period5.includes(time)){
            german(1);
        }
        else if(period6.includes(time)){
            german(2);
        }
        else if(period7.includes(time)){
            arabic(1);
        }
        else if(period8.includes(time)){
            arabic(2);
        }
        else if(breakPeriod.includes(time)){
            breakF();
        }
        else {
            home();
        }
    }
    else if(day === tuesday) {
        if(period1.includes(time)) {
            science(1);
        }
        else if(period2.includes(time)){
            science(2);
        }
        else if(period3.includes(time)){
            math(1);
        }
        else if(period4.includes(time)){
            math(2);
        }
        else if(period5.includes(time)){
            arabic(1);
        }
        else if(period6.includes(time)){
            arabic(2);
        }
        else if(period7.includes(time)){
            english(1)
        }
        else if(period8.includes(time)){
            english(2)
        }
        else if(breakPeriod.includes(time)){
            breakF();
        }
        else {
            home();
        }
    }
    else if(day === wednesday) {
        if(period1.includes(time)) {
            art(1);
        }
        else if(period2.includes(time)){
            art(2);
        }
        else if(period3.includes(time)){
            pe(1);
        }
        else if(period4.includes(time)){
            pe(2);
        }
        else if(period5.includes(time)){
            arabic(1);
        }
        else if(period6.includes(time)){
            arabic(2);
        }
        else if(period7.includes(time)){
            arabic(3);
        }
        else if(period8.includes(time)){
            religion(1);
        }
        else if(breakPeriod.includes(time)){
            breakF();
        }
        else {
            home();
        }
    }
    else if(day === thursday) {
        if(period1.includes(time)) {
            activity(1);
        }
        else if(period2.includes(time)){
            activity(2);
        }
        else if(period3.includes(time)){
            math(1);
        }
        else if(period4.includes(time)){
            science(1);
        }
        else if(period5.includes(time)){
            science(2);
        }
        else if(period6.includes(time)){
            english(1);
        }
        else if(period7.includes(time)){
            english(2);
        }
        else if(period8.includes(time)){
            english(3);
        }
        else if(breakPeriod.includes(time)){
            breakF();
        }
        else {
            home();
        }
    }
    else if(day === friday) {
        home();
    }
    else if(day === saturday) {
        home();
    }    
}
//I need two functions because javascript is funny and is single threaded UwU
function automatic() {
    cancelled = false;
    main();
}
function automaticD() {
    if(cancelled) {
        return;
    }
    if(!cancelled) {
        compareDate();
    }
}

function main() {
    updateDayTime()
    setInterval(updateDayTime, 1000);
    automaticD();
    setInterval(automaticD, 1000);
}

main();