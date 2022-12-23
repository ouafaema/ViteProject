export const getCharacterFromApi = async (filter = '') => {
  const req = await fetch(`https://rickandmortyapi.com/api/character/${filter}`)
  const res = await req.json()

  return res.results
}