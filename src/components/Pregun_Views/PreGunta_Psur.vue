<template>
    <v-card class="mx-auto"
    max-width="100%"
    elevation="8"
    tile
  >
  <v-card-title class="fondo">
    {{pregunta.enunciado}}
  </v-card-title>

    <div class="col-12">
      <div class="card margenes">
          <div class="card-header fondo">
             
          </div>
          <divider></divider>
          <div class="card-body">
              <div class="form-check"  v-for="(data,index) in pregunta.opciones" :key="index">
                  <input v-model="seleccion" class="form-check-input" :value="index"  type="radio" >
                  <label class="form-check-label" >
                      {{data}}
                  </label>
                </div>
              </div>
        </div>
       
  </div>
</v-card>

  </template>
  <script>
  export default {
      props: ['pregunta','posicion'],
      data: () => ({
          seleccion : null,
        }),
       
      methods: {
         
      },
      watch: {
        seleccion: function () {
          var resp = new Object()
              resp.posi = this.posicion;
              resp.pregunta = this.pregunta
              resp.respuesta = this.seleccion;
              console.log(JSON.stringify(resp))
              this.$emit('seleccion', resp)
        
       }
      },
  }
  </script>
  <style>
   .fondo{
     background-color: burlywood;
   }
 </style>