function countdown(s) {
  setTimeout(function(){ alert("Mister, your noodle is done;)"); }, s*1000);
}

function createalarm(){
 chrome.alarms.create("My First Alarm",{delayInMinutes:0.1});
 chrome.alarms.get("My First Alarm",function(alarm){
  console.log("Scheduled Time  "+ alarm.scheduledTime);
  console.log("Alarm Name "+alarm.name);
 });
 chrome.alarms.onAlarm.addListener(function(alarm){
  console.log("Alarm Elapsed Name "+alarm.name);
  console.log("This is Over");
  chrome.alarms.clear("My First Alarm");
  alert(" Alarms Cleared");
 });
 //chrome.alarms.clear("My First Alarm");
}

window.onload=createalarm;
