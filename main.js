
$(document).ready(function() {
    $('#btn-buscar-usuario').click(function() {
      const usuarioDigitado = $('#usuario-digitado').val();
      const endpoint = `https://api.github.com/users/${usuarioDigitado}`;
      const idFotoUsuario = document.querySelector('#foto-usuario');
      const idNome = document.querySelector('#nome');
      const idUsuario = document.querySelector('#usuario');
      const idRepositorio = document.querySelector('#repositorio');
      const idSeguidores = document.querySelector('#seguidores');
      const idSeguindo = document.querySelector('#seguindo');
      const idLink = document.querySelector('#link');

      fetch(endpoint)
        .then(function(res) {
          if (!res.ok) {
            throw new Error('Erro ao buscar dados do GitHub');
          }
          return res.json();
        })
        .then(function(json) {
          idFotoUsuario.src = json.avatar_url;
          idNome.innerText = json.name;
          idUsuario.innerText = json.login;
          idRepositorio.innerText = json.public_repos;
          idSeguidores.innerText = json.followers;
          idSeguindo.innerText = json.following;
          idLink.href = json.html_url;
        })
        .catch(function(error) {
          console.error('Erro:', error.message);
        });
    });
  });
  