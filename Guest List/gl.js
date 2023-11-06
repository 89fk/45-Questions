var guestList = ["Abama", "Afaq", "Noman"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. Please join us for a wonderful evening!"));
}
console.log("".concat(guestList[1], " cannot make it to the dinner."));
guestList[1] = "Ali";
console.log("Good news! We found a bigger dinner table!");
guestList.unshift("Linda");
guestList.splice(2, 0, "Iqra");
guestList.push("Jimmy");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. Please join us for a wonderful evening!"));
}
