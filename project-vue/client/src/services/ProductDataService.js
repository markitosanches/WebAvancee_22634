import http from '../http-common'
class ProductDataService {
  getAll () {
    return http.get('/product')
  }

  create (data) {
    return http.post('/product', data)
  }
}

export default new ProductDataService()
