import http from '../http-common'
class ProductDataService {
  getAll () {
    return http.get('/product')
  }

  create (data) {
    return http.post('/product', data)
  }

  get (id) {
    return http.get(`/product/${id}`)
  }
}

export default new ProductDataService()
