import { createImageCard } from '../ImageCard/ImageCard.js'

export function renderImageGrid(images) {
  const imageGrid = document.getElementById('imageGrid')
  imageGrid.innerHTML = '' // Limpiar el grid antes de añadir nuevas imágenes

  images.forEach((image) => {
    const imageElement = createImageCard(image)
    imageGrid.appendChild(imageElement)
  })
}
