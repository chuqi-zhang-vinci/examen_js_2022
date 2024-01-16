const afficherLieuRecommande = async () => {
  try {
    const response = await fetch('https://places-exam-api.azurewebsites.net/recommended', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    }

    const lieufavoris = await response.json();

    const lieufavori = document.querySelector('#lieufavori');

    lieufavori.innerHTML = `
    lieu les plus appréciés : 
    ${lieufavoris.name}`;
  } catch (error) {
    console.error('Error :', error);
  }
};

const afficherPlaces = async () => {
  const main = document.querySelector('main');
  try {
    const response = await fetch('https://places-exam-api.azurewebsites.net/places', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    }

    const listLocations = await response.json();

    const locations = listLocations.map((location) => `
        <div id="lieufavori"></div>
        <div class="list-group-item">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${location.id}</h5>
            </div>
            <p class="mb-1">${location.name}</p>
        </div>
    `).join('');

    main.innerHTML = `${locations}`;

    afficherLieuRecommande();
  } catch (error) {
    console.error('Error :', error);
  }
};

export default afficherPlaces;
