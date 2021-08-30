<template>
  <div>
    <p>
      /users/_id.vue
    </p>
    <p>
      user ID : {{ userId }}
    </p>
    <p>
      route param is nani : {{ routeParam }}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routeParam: this.$route.params,
      userId: this.$route.params.id
    }
  }
}
</script>