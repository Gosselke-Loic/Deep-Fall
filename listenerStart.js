//listener for the player name
let create = document.getElementById("create");
let nameHero;

//No empty values for player name
create.addEventListener("click", function () {
    nameHero = document.querySelector("#heroN").value;

    if (nameHero == "") {
        document.getElementById("error").innerHTML = "Give a name to your bastard or nobody remembers you";
        console.log(nameHero);
    } else if (nameHero !== "") {
        console.log(nameHero);
        document.getElementById("error").innerHTML = "Good job!";
        document.querySelector("#heroN").setAttribute("disabled", "disabled");
        localStorage.setItem("passH", nameHero);
    } 
});