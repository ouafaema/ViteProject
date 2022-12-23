class Api {
  constructor(url) {
    this.apiUrl = url
  }

  async getApi(filter = '') {
    const req = await fetch(`${this.apiUrl}${filter}`)
    const res = await req.json()

    if (filter && !filter.includes('?')) {
      return res
    }
    return res.results
  }
}

export default Api