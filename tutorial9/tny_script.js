"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: CMK
   Date:   30/6/2021

*/

window.alert("Welcome to Tulsa");



/* Display the time left util New Year's Eve */
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";

runClock();
setInterval("runClock()", 1000);

function runClock() {
    /* Store the current date and time */
    var currentDay = new Date();  //creat date object
    var dateStr = currentDay.toLocaleDateString();   //using date method get date
    var timeStr = currentDay.toLocaleTimeString();   //using date method get time

    /* Display the current date and time */
    document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

    /* Calculate the days left */
    var newYear = new Date("January 1, 2021");
    var nextYear = currentDay.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay) / (1000 * 3600 * 24);
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
}