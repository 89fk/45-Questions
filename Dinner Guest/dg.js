var guestList = [
    "Abama",
    "Afaq",
    "Noman"
];
console.log("You are inviting ".concat(guestList.length, " people to dinner."));
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. Please join us for a wonderful evening!"));
}
