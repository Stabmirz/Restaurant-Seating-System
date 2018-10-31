$(document).ready(function () {

    var name = document.querySelector(".name");
    var button = document.querySelector(".start")


    var guestNames = [];

    for (var i = 0; i < 12; i++) {
        guestNames.push(prompt('Please Enter Enter Guest Name: ' + (i + 1)));
    }

    // alert('Full array: ' + guestNames.join(', '));

    function getNames() {

        if (guestNames.length !==0) {
        name.innerHTML = guestNames.shift();
        }
        else{
            name.innerHTML='Every Guest has got a seat!' 
        }
    }              

    button.addEventListener('click', function (e) {
        getNames();
    })
});