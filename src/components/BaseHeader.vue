<template>
  <div class="header">
     <b-container fluid>
      <div class="header-body">
        <slot></slot>
      </div>
     </b-container>
  </div>
</template>
<script>
  export default {
    name: 'base-header',
    props: {
      type: {
        type: String,
        default: 'warning',
        description: 'Header background type'
      }
    }
  }
</script>
<style>
.header-body{
  color : #32325d !important;
}
</style>
