import { fetchImages } from '../../../app.js'
import { renderImageGrid } from '../ImageGrid/ImageGrid.js'

export function setupHeader() {
  const header = document.getElementById('header')
  header.innerHTML = `
        <h1 id="logo">Pinterest Clone</h1>
        <form id="searchForm">
            <input type="text" id="searchInput" placeholder="Buscar imágenes..." required>
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
        document.getElementById('searchInput').value = '' // Limpiar el input
      }
    })

  document.getElementById('logo').addEventListener('click', async () => {
    const initialImages = await fetchImages('popular')
    renderImageGrid(initialImages)
  })
}
