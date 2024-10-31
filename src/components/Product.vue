<template>
    <a :href="'/productDetails?id='+id" >
        <v-hover >
        <template v-slot:default="{ isHovering, props }">
            <v-card
            v-bind="props"
            :color="isHovering ? 'primary' : undefined"
            >
            <div>
    <v-img
        v-if="image != null && image.length > 0"
        height="280"
        aspect-ratio="16/9"
        cover
        :src="ApiUrl.concat(image[0].url)"
        ></v-img>
    <v-img
        v-else
        aspect-ratio="16/9"
        cover
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
        <div class="ma-5">
            <div  >
        <h3 v-if="title.length > 50">
            {{title.substring(0, 50)}}...
        </h3>
        <h3 v-else>
            {{title}}
        </h3>
    </div>
    <br/>
    <div v-if="description != null && description != '' && description.length > 170 " >
        {{description.substring(0, 170)}}...
    </div>
    <div v-else-if="description != null && description != '' && description.length < 170 " >
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
    
  </div>
        </v-card>
        </template>
    </v-hover>
    </a>
    
  
</template>

<script>
import { BaseURL }  from '../router/appConstants'
export default {
    props: {
    id: null,
    title: "",
    description: "",
    price: 0,
    quantity: 0,
    image: null
  },
  data() {
    return {
        ApiUrl:""
    }
  },
  created() {
    this.ApiUrl = BaseURL
  },
  methods: {
    async openProduct(Id){
        this.$router.push({
          name: "product-details",
          params: { id: Id },
        });
    }
  }
}
</script>

<style>

</style>