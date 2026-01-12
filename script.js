
$(document).ready(function () {

  
  $('#loginForm').submit(function (e) {
    e.preventDefault();
    var email = $('#email').val();
    var senha = $('#senha').val();

    if (email && senha) {
      alert('Login realizado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });

  
  $('#cadastroForm').submit(function (e) {
    e.preventDefault();
    var nome = $('#nome').val();
    var email = $('#email').val();
    var senha = $('#senha').val();

    if (nome && email && senha) {
      alert('Cadastro realizado com sucesso!');
      window.location.href = 'login.html';  
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });

});
