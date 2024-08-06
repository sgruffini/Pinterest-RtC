// En header.js
import { fetchImages } from '../../../app.js' // Sube tres niveles desde Header
import { renderImageGrid } from '../ImageGrid/ImageGrid.js' // Esta ruta está correcta, sube un nivel y entra a ImageGrid

export function setupHeader() {
  const header = document.getElementById('header')
  header.innerHTML = `
        <h1>Pinterest Clone</h1>
        <form id="searchForm">
            <input type="text" id="searchInput" placeholder="Buscar imágenes...">
            <button type="submit">Buscar</button>
        </form>
    `

  document
    .getElementById('searchForm')
    .addEventListener('submit', async (event) => {
      event.preventDefault()
      const query = document.getElementById('searchInput').value.trim()
      if (query) {
        const images = await fetchImages(query)
        renderImageGrid(images)
        document.getElementById('searchInput').value = ''
      } else {
        // Búsqueda por defecto si el campo está vacío
        const images = await fetchImages('gatos')
        renderImageGrid(images)
      }
    })

  // Opción para resetear a imágenes populares haciendo clic en el logo
  document
    .getElementById('header')
    .firstElementChild.addEventListener('click', async () => {
      const initialImages = await fetchImages('popular')
      renderImageGrid(initialImages)
    })
}
