<template>
    <div>
        <v-app-bar :elevation="2">
        <!-- <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template> -->

        <v-app-bar-title>Tech store</v-app-bar-title>

         <div class="d-flex" >
            <v-btn variant="plain" to="/">
                Products
            </v-btn>
            <v-btn variant="plain" to="/categories">
                Categories
            </v-btn>
         </div>
        </v-app-bar>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>