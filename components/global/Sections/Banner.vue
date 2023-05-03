<script setup>
const route = useRoute();
const params = {
  slug: route.name,
};
const { data } = await useSanityQuery(pageQuery, params);
</script>
<template>
  <div>
    <h1>About</h1>
  </div>
</template>
