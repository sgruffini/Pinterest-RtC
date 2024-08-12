export function createImageCard(image) {
  const card = document.createElement('div')
  card.className = 'image-card'

  const imageUrl = image.urls.small
  const userName = image.user.name
  const userImage = image.user.profile_image.small
  const description = image.description || 'Sin descripción'
  const uploadDate = new Date(image.created_at).toLocaleDateString()

  // Crear el HTML de la tarjeta
  card.innerHTML = `
    <img src="${imageUrl}" alt="${description}" class="image-card__image">
    <div class="image-card__info">
      <img src="${userImage}" alt="${userName}" class="image-card__user-image">
      <div class="image-card__details">
        <h3 class="image-card__user-name">${userName}</h3>
        <p class="image-card__description">${description}</p>
        <p class="image-card__date">Subida el: ${uploadDate}</p>
      </div>
    </div>
  `

  return card
}
