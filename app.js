import { setupHeader } from './src/components/Header/header.js'
import { renderImageGrid } from './src/components/ImageGrid/ImageGrid.js'

const ACCESS_KEY = 'c9Gik1atqzmz9PI52FVFflNupe1uUxwxsu-M5LBZ3J4'

export async function fetchImages(query, page = 1) {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${encodeURIComponent(
    query
  )}&client_id=${ACCESS_KEY}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error fetching images:', error)
    return []
  }
}

window.onload = () => {
  setupHeader()
}
