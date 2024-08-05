import { createImageCard } from '../ImageCard/ImageCard.js'

export function renderImageGrid(images) {
  const imageGrid = document.getElementById('imageGrid')
  imageGrid.innerHTML = '' // Limpiar contenido anterior

  images.forEach((image) => {
    imageGrid.appendChild(createImageCard(image))
  })
}
