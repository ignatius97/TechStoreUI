<template>
  <div class="ma-5" >
    <h3>
        Products
    </h3>

    <!-- <div>
        <v-spinner v-if="loading" />
    </div> -->
   
    <v-row class="mt-5" >
        <v-col v-for="(item, index) in items" :key="index" cols="4"  >
            <Product :title="item.Title"
            :id="item.id" 
            :description="item.Description" 
            :price="item.Price" 
            :quantity="item.Quantity"
            :image="item.Image" />
        </v-col>
    </v-row>
    
  </div>

</template>

<script>
import api from '@/router/api';
import Product from './Product.vue';

export default {
  components: { Product },
  data() {
    return {
      items: [],
      loading: false,
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
        console.log("fetching...")
      try {
        this.loading = true;
        const response = await api.getProducts();
        console.log("res", response);
        this.items = response.data.data; // Assuming the API returns an array of items
        console.log("data", this.items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
      finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>

</style>