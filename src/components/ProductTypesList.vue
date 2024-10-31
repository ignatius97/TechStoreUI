<template>
    <div v-if="items.length > 0" >
        <h3 class="mt-5" >
            {{ type }}
        </h3>
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
  props: {
    type: ""
  },
  components: { Product },
  data() {
    return {
      items: [],
      loading: false,
    };
  },
  created() {
    const query = "filters[product_types][Name]="+this.type;
    console.log("query "+query);
    this.fetchItems(query);
  },
  methods: {
    async fetchItems(filterquery) {
      try {
        this.loading = true;
        const response = await api.getProducts(filterquery);
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