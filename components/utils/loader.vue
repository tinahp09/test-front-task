


<template>
    <div class="loader">
        <v-progress-circular
    :size="70"
    :width="7"
    color="blue"
    indeterminate
   
></v-progress-circular>
    </div>
</template>


<style>
.loader{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>