<template>
  <div class="ma-5" >
    <h3>
        Categories
    </h3>

    <ProductTypesList type="Laptops" />

    <ProductTypesList type="Phones" />

    <ProductTypesList type="Tablets" />

    <ProductTypesList type="Watches" />

  </div>

</template>

<script>
import ProductTypesList from './ProductTypesList.vue';

export default {
  components: { ProductTypesList },
}
</script>

<style>

</style>