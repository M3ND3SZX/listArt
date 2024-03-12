var quadrado = document.getElementById('novo')
var adicionar = document.getElementById('adicionar')

quadrado.addEventListener('mouseover', function(){

    console.log('aaaaaaaaaaa')
    adicionar.classList.add('padding')

    document.getElementById("adicionar").addEventListener("click", function() {
        window.location.href = "../src/novaTarefa.html";
    });
})


function adicionarEvento() {
    var evento = document.getElementById("eventoInput").value;
    var cell = document.querySelector(".selected")
    if (cell) {
        cell.innerHTML += "<br>" + evento
        document.getElementById("eventoInput").value = ""
        document.getElementById("eventoModal").style.display = "none"
    }
}

var cells = document.querySelectorAll(".day")
cells.forEach(function(cell) {
    cell.addEventListener("click", function() {
        var selectedCell = document.querySelector(".selected")
        if (selectedCell) {
            selectedCell.classList.remove("selected")
        }
        this.classList.add("selected")
        document.getElementById("eventoModal").style.display = "block"
    })
})