const select = document.querySelector('.new-dog');
const url = `https://dog.ceo/api/breeds/image/random`;

window.onload = function () {
    document.getElementById("new-dog").onclick = function() {
        getDoggo(url);  
    };
}

const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

const getDoggo = url => {
  spinner.classList.add('show');
  img.classList.remove('show');
  console.log(url);
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      img.src = data.message;
    });
};

img.addEventListener('load', () => {
  spinner.classList.remove('show');
  img.classList.add('show');
});