import listphotos from "../../utils/places";

const HomePage = () => {
  const main = document.querySelector('main');

  const photos = listphotos;

  const photosList = photos.map(photo => `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${photo.name}</h5>
    </div>
  </div>
  `).join('');

  main.innerHTML = `${photosList}`;
};

export default HomePage;
