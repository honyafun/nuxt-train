<template>
  <div>
    <p>/user.index.vue</p>
  </div>
</template>

<script>
export default {
  async mounted () {
    console.log(
      JSON.stringify(await
        this.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js'), true, ' ')
      )
  }
}
</script>
