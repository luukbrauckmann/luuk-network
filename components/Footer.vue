<script setup>
    const year = new Date().getFullYear();
</script>

<template>
    <footer>
        <p><span class="copy-left">&copy;</span> {{ year }}</p>
    </footer>
</template>

<style scoped>
    .copy-left { 
        display: inline-block; 
        text-align: right;
        -moz-transform: scaleX(-1); 
        -o-transform: scaleX(-1); 
        -webkit-transform: scaleX(-1); 
        transform: scaleX(-1); 
        filter: FlipH; 
        -ms-filter: “FlipH”; 
    }
</style>
