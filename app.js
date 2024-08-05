import { setupHeader } from './src/components/Header/header.js'
import { renderImageGrid } from './src/components/ImageGrid/ImageGrid.js'

const ACCESS_KEY = 'c9GiK1qtazm9PZT5F2VFfN1upe1uUxwxsu-ML5BZ3J4'

async function fetchImages(query) {
  const url = `https://api.unsplash.com/search/photos?page=${query}&client_id=${ACCESS_KEY}`
  try {
    const response = await fetch(url)
    const data = await response.json()
    if (data && data.results) {
      return data.results
    }
    return [] // Devuelve un arreglo vacío si no hay resultados
  } catch (error) {
    console.error('Error fetching images:', error)
    return []
  }
}

window.onload = async () => {
  setupHeader()
  const initialImages = await fetchImages('popular')
  renderImageGrid(initialImages)
}

export { fetchImages }
