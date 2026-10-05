let developer = ["Yashavanth", "Kiran", "Priya", "Shasank", "Manju"];

let search = document.getElementById("search");

search.addEventListener("input", function() {

    let searchText = search.value.toLowerCase();

    let result = developer.filter(function(name) {
        return name.toLowerCase().includes(searchText);
    });

    if (searchText === "") {
        document.getElementById("result").textContent = "";
    } else {
        document.getElementById("result").innerHTML = result.join("<br>");
    }
    
if (searchText === "") {
    document.getElementById("result1").textContent = "";
} else if (result.length === 0) {
    document.getElementById("result1").textContent =
        "No developers found 😕";
}else if (result.length === 1) {
document.getElementById("result1").textContent=result.length + " Developer found";
} else {
document.getElementById("result1").textContent=result.length + " Developers found";
}

});
