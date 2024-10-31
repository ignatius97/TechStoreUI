<template>
  <div class="ma-5" >
    <v-row>
        <v-col cols="6">
            <v-img
                v-if="image != null && image.length > 0"
                height="800"
                aspect-ratio="16/9"
                cover
                :src="ApiUrl.concat(image[0].url)"
                ></v-img>
            <v-img
                v-else
                aspect-ratio="16/9"
                height="800"
                cover
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                ></v-img>
                </v-col>
        <v-col cols="6">
          <div class="ma-5">
            <div  >
        <h3>
            {{title}}
        </h3>
    </div>
    <br/>
    <div v-if="description != null && description != '' " >
        {{description}}
    </div>
    <div v-else >
        No description
        <p style="visibility: hidden;" >.</p>
        <p style="visibility: hidden;" >.</p>
    </div>
    <br/>
    <div class="d-flex" >
        
        <div>
            {{quantity}} units
        </div>
        <v-spacer />
        <h2>
            $ {{price}}
        </h2>
        
    </div>
        </div>
        </v-col>
    </v-row>
  </div>
</template>

<script>
import { BaseURL }  from '../router/appConstants'
import api from '@/router/api';
export default {
  data() {
    return {
      id: null,
      items: [],
      loading: false,
      title: "",
      description: "",
      price: 0,
      quantity: 0,
      image: null,
      ApiUrl:""
    };
  },
  created() {
    this.ApiUrl = BaseURL
    let urlParams = new URLSearchParams(window.location.search);
    this.id = urlParams.get('id');
    // console.log(urlParams.has('id')); // true
    // console.log(urlParams.get('id'));
    this.fetchItem(this.id);
  },
  methods: {
    async fetchItem(Id) {
      try {
        this.loading = true;
        const response = await api.getProductById(Id);
        this.items = response.data.data; 
        if (this.items.length > 0) {
          console.log("here" + this.items);
          
          this.title= this.items[0].Title;
          this.description= this.items[0].Description; 
          this.price= this.items[0].Price; 
          this.quantity= this.items[0].Quantity;
          this.image= this.items[0].Image;
        }
        
      } catch (error) {
        console.error('Error fetching items:', error);
      }
      finally {
        this.loading = false;
      }
    },
  },
}
</script>

<style>

</style>