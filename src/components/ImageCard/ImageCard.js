export function createImageCard(image) {
  const card = document.createElement('div')
  card.className = 'image-card'

  const img = document.createElement('img')
  img.src = image.urls.small
  img.alt = image.description || 'Imagen de Unsplash'

  card.appendChild(img)

  return card
}
