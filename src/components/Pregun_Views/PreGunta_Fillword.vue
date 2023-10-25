<template>
  <div>
    <div class="column-12">
      <div
        class="frase-drop"
        @drop="drop"
        @dragover="allowDrop"
        v-html="frase"
      ></div>
    </div>

    <div class="opciones-arrastre">
      <Caja
        v-for="data in pregunta.opciones"
        :key="data"
        :palabra="data"
        color="greed"
        :draggable="true"
        @dragstart="dragStart(data)"
      ></Caja>
    </div>

    <!-- Botón para validar la frase -->
    <button @click="validarFrase">Validar</button>
    
    <!-- Mensaje de validación -->
    <div v-if="mostrarMensaje" :class="mensajeClase">{{ mensajeValidacion }}</div>
  </div>
</template>

<script>
import Caja from '../Pregun_Views/CajaWord.vue';

export default {
  props: ['pregunta'],
  components: {
    Caja,
  },
  data() {
    return {
      frase: "",
      respuestaCorrecta: this.pregunta.respuesta, // Asume que tienes una propiedad respuesta en pregunta
      respuestaEstudiante: "", // Respuesta ingresada por el estudiante
      mostrarMensaje: false,
      mensajeValidacion: "",
      mensajeClase: "",
    };
  },
  mounted() {
    const patron = /:(.*?):/g;
    const nuevoTexto = this.pregunta.enunciado.replace(
      patron,
      `<span class="caja"><span class="palabra"></span></span>`
    );
    this.frase = nuevoTexto;

    // Imprimir el enunciado de la pregunta en la consola
    console.log('Enunciado de la pregunta:', this.pregunta.enunciado);
  },
  methods: {
    dragStart(palabra) {
      this.respuestaEstudiante = palabra;
    },
    allowDrop(ev) {
      ev.preventDefault();
    },
    drop(ev) {
      ev.preventDefault();
      const palabra = ev.dataTransfer.getData('text/plain');
      const fraseDiv = document.querySelector('.frase-drop');
      if (fraseDiv.innerHTML.includes('<span class="palabra"></span>')) {
        fraseDiv.innerHTML = fraseDiv.innerHTML.replace('<span class="palabra"></span>', palabra);
      }
    },
    validarFrase() {
  // Normalizar respuestas y enunciado
  const respuestaEstudianteNormalizada = this.respuestaEstudiante.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  const enunciadoNormalizado = this.pregunta.enunciado.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

  // Verificar si la respuesta normalizada contiene todas las palabras del enunciado normalizado
  const enunciadoPalabras = enunciadoNormalizado.split(' ');
  const respuestaPalabras = respuestaEstudianteNormalizada.split(' ');

  const todasLasPalabrasEstanEnElEnunciado = enunciadoPalabras.every(palabra => respuestaPalabras.includes(palabra));

  if (todasLasPalabrasEstanEnElEnunciado) {
    this.mostrarMensaje = true;
    this.mensajeValidacion = 'Respuesta correcta. ¡Has completado la frase correctamente!';
    this.mensajeClase = 'mensaje-correcto';
  } else {
    this.mostrarMensaje = true;
    this.mensajeValidacion = 'Respuesta incorrecta. No todas las palabras están presentes en el enunciado.';
    this.mensajeClase = 'mensaje-incorrecto';
  }
}
  },
};
</script>

<style scoped>
.frase-drop {
  border: 2px solid #ccc;
  background-color: #ccc;
  padding: 5px;
  min-height: 100px;
}

.opciones-arrastre {
  display: flex;
  flex-wrap: wrap;
}

.caja {
  display: inline;
  border: 2px solid #ccc;
  background-color: #ccc;
  padding: 5px;
  margin: 5px;
}

.mensaje-correcto {
  margin-top: 10px;
  color: green;
  font-weight: bold;
}

.mensaje-incorrecto {
  margin-top: 10px;
  color: red;
  font-weight: bold;
}
</style>
