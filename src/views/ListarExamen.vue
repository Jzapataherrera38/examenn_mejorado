<template>
   <v-app  >
    <v-card 
    flat
    height="80px"
    tile
  >
    <v-toolbar  class="green accent-3">
          <v-toolbar-title >LISTADO EXAMENES</v-toolbar-title>
        </v-toolbar>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="examenes.data"
      class="elevation-1"
      fat
    >
    <template v-slot:item="row">
          <tr>
            <td>{{row.item.tema}}</td>
            <td>{{row.item.fecha_inicio}}</td>
            <td>{{row.item.fecha_cierre}}</td>
            <td>{{row.item.no_preguntas}}</td>
            <td v-if="tipo =='Docente'">
              <v-btn
                  class="mx-2"
                  fab
                  color="green accent-3"
                  small
                  :to="'/preview/'+ row.item.id"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                  </svg>
               </v-btn>
               <v-dialog
                  v-model="dialog"
                  width="500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      class="mx-2"
                      fab
                      color="green accent-3"
                      small
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                      </svg>
                    </v-btn>
                  </template>
                  <v-card>
                       <v-toolbar dark color="green accent-4">
                          <v-toolbar-title>Desea eliminar este examen</v-toolbar-title>
                       </v-toolbar>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                    <v-btn
                        dark
                        color="green accent-4"
                        @click="dialog = false"
                      >Cancelar
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                       </svg>
                     </v-btn>
                     <v-btn
                        dark
                        color="green accent-4"
                        @click="eliminar(row.item.id)"
                      >Eliminar
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                      </svg> 
                     </v-btn>
                   </v-card-actions>
                  </v-card>
                </v-dialog>
            </td>
            <td v-else>
               <template>
                 <v-btn
                    fab
                    dark
                    small
                    color="green accent-3"
                    v-if="row.item.visualizar==1"
                    :to="'/alumno/realizarexamen/'+ row.item.id"
                   
                 >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                      <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                  </v-btn>
                 </template>
            </td>
         </tr>
      </template>
    </v-data-table>
   </v-app>
  </template>
  <script>
  import axios from 'axios';
  const baseURL = "http://localhost:3000/examen";
    export default {
      data: () => ({
        dialog: false,
        headers: [
        {
          text: 'Tema', value: 'tema',
        },
        { text: 'Fecha Inicio', value: 'fecha_inicio' },
        { text: 'Fecha Cierre', value: 'fecha_cierre' },
        { text: 'No. Preguntas', value: 'no_preguntas' },
        { text: 'Acciones'},
            ],
        examenes : [],
       
      }),

      mounted() {
/*       const resp =  await axios.get("http://localhost:3000/examen");
      console.log(resp);
      this.examenes = resp.data; */
      
        this.listar()
        this.usuario = localStorage.getItem("usuario");
        this.tipo = localStorage.getItem("tipo");


     },
     methods: {
        async listar(){
        const resp =  await axios.get("http://localhost:3000/examen");
        if (this.tipo == "Alumno")
         {
         const realizados =  await axios.get(`http://localhost:3000/examenesresueltos?id_usuario=${this.usuario}`);
         console.log(resp)
         var p = 0
          for (let examen of resp.data)
          {
          
             var r = realizados.data.findIndex((exa) => exa.id_examen == examen.id);
             console.log("encontrado :", r)
             if (r == -1)
              {
                resp.data[p].visualizar = 1
              }
              else
               resp.data[p].visualizar = 0 
              p +=1
          }


         }
         console.log(resp)
        this.examenes = resp;

       },
     async eliminar(id) {
      await axios.delete(`${baseURL}/${id}`)
      this.dialog=false
      const resp =  await axios.get("http://localhost:3000/examen");
      console.log(resp);
      this.examenes = resp.data;
    }, 

   
}
    }
  </script>
  