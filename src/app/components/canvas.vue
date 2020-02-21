<template>
  <div>

  </div>
</template>
<script>
  export default {
    name:'Timeline',
    props: {
      scale: Number,
      color: {
        type: String,
        default: 'default'
      },
      effects: {
        type: Boolean,
        default: true,
      }
    }
  }
  if (this.effects) {
    // eslint-disable-next-line no-console
    console.log('success')  
  }
</script>
<style lang="scss" scoped>
  
</style>