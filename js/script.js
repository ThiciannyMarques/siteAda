document.getElementById("enviar").addEventListener("click", validaForm)

function validaForm() {
  if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != "") {
    alert("Cadastrado com sucesso! Você receberá as noticias.");
  } else {
    alert("Erro!Preencha o campo requerido");
  }
}