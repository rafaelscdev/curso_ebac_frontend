function validarFormulario() {
    let campoA = document.getElementById("campoA").value;
    let campoB = document.getElementById("campoB").value;

    if (campoB > campoA) {
        alert("É válido");
        return true; // formulário válido
    } else {
        alert("Não é válido");
        return false; // formulário inválido
    }
}