<template>
    <div class="product-add">
      <!-- Section-->
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div
            class="
              row
              gx-4 gx-lg-5
              row-cols-2 row-cols-md-3 row-cols-xl-2
              justify-content-center
            "
          >
            <div class="col-sm-12">
              <h4 class="mb-3">Add new product</h4>
              <div v-show="message" class="alert alert-success">{{message}}</div>
              <div class="needs-validation" novalidate>
                <div class="row g-2">
                  <div v-if="!submitted">
                  <div class="col-12">
                    <label for="productName" class="form-label"
                      >Product Name</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="productName"
                      v-model="product.name"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Valid name is required.</div>
                  </div>
                  <div class="col-12">
                    <label for="productPhoto" class="form-label"
                      >Product Photo</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="productPhoto"
                      v-model="product.photo"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">
                      Valid photo path is required.
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="productPrice" class="form-label">Price</label>
                    <div class="input-group has-validation">
                      <span class="input-group-text">CAD</span>
                      <input
                        type="text"
                        class="form-control"
                        id="productPrice"
                        v-model.number="product.price"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">Price is required.</div>
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="productDescription" class="form-label"
                      >Product Description</label
                    >
                    <textarea
                      class="form-control"
                      id="productDescription"
                      v-model="product.description"
                      placeholder=""
                    ></textarea>
                    <div class="invalid-feedback">Valid description</div>
                  </div>
                  <div class="col-12">
                    <label for="productType" class="form-label"
                      >Product Type</label
                    >
                    <select
                      class="form-control"
                      id="productType"
                      v-model="product.type"
                      placeholder=""
                      required
                    >
                      <option value="">Select</option>
                      <option value="Burger">Burger</option>
                      <option value="Italian">Italian</option>
                      <option value="Indian">Indian</option>
                      <option value="Thai">Thai</option>
                    </select>
                    <div class="invalid-feedback">
                      Valid photo path is required.
                    </div>
                  </div>
                  <button class="w-100 btn btn-secondary btn-lg mt-3" type="button" @click="updateProduct">Update </button>
                  <button class="w-100 btn btn-danger btn-lg mt-3" type="button" @click="deleteProduct">Delete </button>
                  </div>
                  <div v-else>
                    <div  class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong> You submitted successfully!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <button class="w-100 btn btn-success btn-lg mt-3" type="button" @click="newProduct">New product </button>
                  </div>
                  <hr class="my-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>

<script>
import ProductDataService from '@/services/ProductDataService'

export default {
  props: ['removeInv', 'inventory', 'remove', 'updateInv'],
  data () {
    return {
      message: null,
      submitted: false,
      product: {},
      id: parseInt(this.$route.params.id)
    }
  },
  methods: {
    updateProduct () {
      ProductDataService.update(this.id, this.product)
        .then(response => {
          this.updateInv(this.productIndex, this.product)
          this.message = response.data.message
        })
    },
    deleteProduct () {
      ProductDataService.delete(this.id)
        .then(response => {
          this.remove(this.product.name)
          this.removeInv(this.productIndex)
          this.$router.push({ name: 'home' })
        })
    }
  },
  computed: {
    productIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.id === this.id
      })
      return index
    }
  },
  mounted () {
    ProductDataService.get(this.id)
      .then(response => {
        this.product = response.data
      })
  }
}
</script>
