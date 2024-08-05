export function createImageCard(image) {
  const imageCard = document.createElement('div')
  imageCard.className = 'image-card'

  const imgElement = document.createElement('img')
  imgElement.src = image.urls.small
  imgElement.alt = image.description || 'Imagen de Unsplash'

  const imageInfo = document.createElement('div')
  imageInfo.className = 'image-info'
  imageInfo.innerHTML = `<p>${image.user.name}</p><a href="${image.links.html}" target="_blank">Ver en Unsplash</a>`

  imageCard.appendChild(imgElement)
  imageCard.appendChild(imageInfo)

  return imageCard
}
