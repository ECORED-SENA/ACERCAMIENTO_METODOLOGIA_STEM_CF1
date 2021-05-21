<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
      footer
  BarraAvance

</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
}
</script>

<style lang="sass">
.app

.contenedor-principal
  display: flex
  align-items: flex-start

.seccion-principal
  width: 100%

  &--barra-avance-open
    .curso-main-container
      padding-bottom: 80px !important
body
  padding-right: 0px !important
.modal
  z-index: 9999999 !important
.modal-backdrop
  z-index: 999999 !important
.boton span, .boton--sm span, .boton i, .boton--sm i
    color: #ffffff !important
</style>
