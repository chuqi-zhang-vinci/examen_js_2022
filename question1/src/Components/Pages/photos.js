import listphotos from "../../utils/places";

let currentPhotoIndex;
listphotos.forEach(element => {
    if(element.id === 3){
       currentPhotoIndex = element.id;
    }
});

const afficherPhotos = () => {
    const main = document.querySelector('main');

    const Photo = listphotos[currentPhotoIndex];

    main.innerHTML=
    `
        <div>
            <img src="${Photo.image}">
            <p>${Photo.name}</p>
            <button type="button" id="buttonprevious">previous</button>
            <button type="button" id="buttonnext">next</button>
        </div>
    
    `;


    const buttonprevious = document.querySelector('#buttonprevious');
    const buttonnext = document.querySelector('#buttonnext');

    buttonprevious.addEventListener('click', () => {
        if(currentPhotoIndex > 0){
            currentPhotoIndex-=1;
            afficherPhotos();
        }               
    });

    buttonnext.addEventListener('click', () => {
        if(currentPhotoIndex < listphotos.length-1){
            currentPhotoIndex+=1;
            afficherPhotos();
        }
    });

}
export default afficherPhotos;