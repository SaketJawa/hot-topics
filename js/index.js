let container = document.querySelector('.dynamic_content');
let links = document.querySelectorAll('.button');
let url = './partials/articles.html';

let loadContent = (urlFeed) => {
   fetch(urlFeed)
      .then((response) => {
         if (response.ok) {
            return response.text();
         }
      })
      .then((data) => {
        container.innerHTML = data;
      })
      .catch((err) => {
         console.log('Error');
      })
};
loadContent(url);

let selectContent = (event) => {
   event.preventDefault();
   let urlFeed = event.target.getAttribute('href');
   loadContent(urlFeed);
};

for (let i = 0; i < links.length; i ++) {
   links[i].addEventListener('click', selectContent);
}