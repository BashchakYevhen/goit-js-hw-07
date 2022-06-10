import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const galleryCreateFunction = createGalleryList(galleryItems);

galleryEl.addEventListener("click", onGalleryClick)


function createGalleryList(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class = "gallery__card">
     <a class = "gallery__link" href = "${original}">
     <img 
         class = 'gallery__image'
         src = '${preview}'
         alt = '${description}'
         data-source = '${original}'
     />
     </a>
     </div>
    `} ).join('')
}
galleryEl.innerHTML = galleryCreateFunction;

function onGalleryClick(e) {
    e.preventDefault();
    console.dir(e.target)
    if (e.target.tagName !== 'IMG') {
        return
    }
    const createLightBox = basicLightbox.create(`
		<img width="800" height="600"
        src="${e.target.dataset.source}">
        alt= "${e.target.alt}
	`, {
		onShow: (instance) => console.log('onShow', instance),
		onClose: (instance) => console.log('onClose', instance)
	})
    createLightBox.show();
    
    // addEventListener("keydown", onEscClose)

    function onEscClose(e) {
        if (e.code === "Escape") {
            createLightBox.close();
removeEventListener("keydown", onEscClose)
        }
    }
}



// //+++++++++++++++++++
// 	const instance = basicLightbox.create(html, {
// 		onShow: (instance) => console.log('onShow', instance),
// 		onClose: (instance) => console.log('onClose', instance)
// 	})