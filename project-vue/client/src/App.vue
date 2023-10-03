<template>
<div>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#">My Store</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li class="nav-item"><router-link class="nav-link active" aria-current="page" to="/">Home</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/new-product">New Product</router-link></li>
                </ul>
                <form class="d-flex">
                    <button class="btn btn-outline-dark" type="button" @click="toggleSidebar">
                        <i class="bi-cart-fill me-1"></i>
                        Cart
                        <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    </button>
                </form>
            </div>
        </div>
    </nav>
    <!-- Header-->
    <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Shop in style</h1>
                <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
        </div>
    </header>
  <router-view
  :inventory = "inventory"
  />
  <Sidebar
  v-if="showSideBar"
  :toggle = "toggleSidebar"
  />
  </div>
</template>

<script>
import Sidebar from '@/components/SideBar.vue'
export default {
  components: {
    Sidebar
  },
  data () {
    return {
      showSideBar: false,
      inventory: [
        {
          id: 1,
          name: 'Head Set',
          photo: 'phone.jpg',
          price: {
            USD: 15.00,
            CAD: 18.50
          },
          type: 'Electronic'
        }, {
          id: 2,
          name: 'Nintendo',
          photo: 'game.jpg',
          price: {
            USD: 15.00,
            CAD: 18.50
          },
          type: 'Electronic'
        }, {
          id: 3,
          name: 'Nintendo',
          photo: 'game.jpg',
          price: {
            USD: 15.00,
            CAD: 18.50
          },
          type: 'Electronic'
        }
      ]
    }
  },
  methods: {
    toggleSidebar () {
      this.showSideBar = !this.showSideBar
    }
  }
}
</script>
