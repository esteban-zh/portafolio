const API_URL = "https://api.github.com/users/esteban-zh/repos";

function getRepos() {
  fetch(API_URL)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      showRepos(data);
    });
}

function showRepos(repos) {
  let render = ``;
  repos.forEach((repo) => {
    const { avatar_url: img } = repo.owner;
    const picture = `<img src= "${img}"/>`;
    const avatar = document.querySelector(".img");
    avatar.innerHTML = picture;
    const name = repo.name;
    const description = repo.description;
    
    const urlRepo = repo.svn_url;
    //console.log(name, description, img);

    render += `<div class="cuadros">
                  <h3><a href=${urlRepo}>${name}</a></h3>
                  <p>${description}</p>
                </div>
                `;
  });
  render += "</div>";
  let res = document.getElementsByClassName("container");
  res[0].innerHTML = render;
  console.log(render);
}

getRepos();
showRepos();
