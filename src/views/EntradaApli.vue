<template>
 <v-app id="inspire" >
    <div id="building">
     <v-main>
      <v-container>
        <v-row>
            <v-col>
              <h1 class="gradient-text"><b>Siuex</b>: Sistema Único de Examen</h1><br>
              <p style="color:white;" class="font-weight-regular"><b>Siuex</b> Es un sistema diseñado para diseñar examenes. <br> La
                idea este tener al rededor de 15 tipos de preguntas, que permitan a un docente diseñar examens que ayuden <br>
                a medir el proceso de aprendizaje del estudiante </p>
            </v-col>

        </v-row>
                    
        <v-row
          justify="center"
          class="mt-15">
          <carrusel
          radius="340"
          autoRotate="true"
          rotateSpeed="-30"
          imgWidth="220"
          imgHeight="270"
          :imagenes="imagenes"
       ></carrusel>

        </v-row>
            
           <v-row justify="center">
          <v-col cols="3">
            <v-dialog
              v-model="dialog"
              persistent
              max-width="500px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                class="mt-15"
                width="315px"
                height="50px"
                  color="green accent-4"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  <h1> Iniciar Sesion</h1>
                </v-btn>
              </template>
              <v-card class="elevation-12 ">
                     <v-toolbar dark class="titulodialog">
                        <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                      <v-container>
                        <v-row  align="center" class="pr-20"
                        >
                        <v-col cols="3"   
                        color="white">
                          Usuario
                        </v-col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg>
                        <v-col cols="8">
                    
                          <v-text-field
                          :rules="[rules.required]"
                          outlined
                                    shaped
                              name="login"
                              label="Login"
                              v-model="login.usuario"
                              type="text"
                      ></v-text-field>
                        </v-col>
                        </v-row>
                           <v-row align="center" class="pr-20">
                                <v-col cols="3" class="texto">
                                  Contraseña
                                </v-col>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                                  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                                  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                                <v-col
                                  cols="8"
                                >
                                  <v-text-field
                                    id="password"
                                    label="Password"
                                    v-model="login.password"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required, rules.min]"
                                    :type="show1 ? 'text' : 'password'"
                                    name="input-10-1"
                                    outlined
                                    shaped
                                    hint="At least 8 characters"
                                    counter
                                    @click:append="show1 = !show1"
                                  ></v-text-field>
                                </v-col>
                        
                              </v-row>
                      </v-container>
                       
                     </v-card-text>
                     <v-card-actions>
                      
                        <v-spacer></v-spacer><v-btn
                      class="mostrar"
                        color="green accent-4"
                        @click="dialog = false"
                        dark
                      >
                        Close <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
                      </v-btn>
                        <v-btn  dark color="green accent-4" @click="logueo()">Login   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg></v-btn>
                     </v-card-actions>
                  </v-card>
            </v-dialog>


          </v-col>
        </v-row>

      </v-container>


      
      <v-snackbar
     v-model="snackbar"
     :color = "color"
   >
     {{text}}

     
   </v-snackbar>

 


    </v-main>
  </div>
 
  </v-app>
</template>







<script>
import axios from 'axios';
import Carrusel from '../components/Carrusel3D.vue';



var bcrypt = require('bcryptjs');
export default {
  components:{
       Carrusel,
  

      
        },
   name: 'LoGin',
   props: {
      source: String,
   },

   data: () => ({
     login : {
         usuario : null,
         password : null,
     },
     snackbar : false,
     color : "blue",
     text : "",
     rcomp : false,
     show1: false,
           password: '12345678',
           title: 'Preliminary report',
           email: 'maria@gmail.com',
       dialog: false,
       dialoga: false,
       show2: true,
       show3: false,
       show4: false,
       imagenes : [
        'https://media.gq.com.mx/photos/5cbf9d3d9277d83d2ae23c09/4:3/w_1064,h_798,c_limit/avengers%20endgame%20sin%20post%20creditos.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""',
         'https://ichef.bbci.co.uk/news/640/cpsprodpb/BF0D/production/_106090984_2e39b218-c369-452e-b5be-d2476f9d8728.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""',
         'https://media.gq.com.mx/photos/5cbf9d3d9277d83d2ae23c09/4:3/w_1064,h_798,c_limit/avengers%20endgame%20sin%20post%20creditos.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""',
         'https://ichef.bbci.co.uk/news/640/cpsprodpb/BF0D/production/_106090984_2e39b218-c369-452e-b5be-d2476f9d8728.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""',
         'https://ichef.bbci.co.uk/news/640/cpsprodpb/BF0D/production/_106090984_2e39b218-c369-452e-b5be-d2476f9d8728.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""',
         'https://media.gq.com.mx/photos/5cbf9d3d9277d83d2ae23c09/4:3/w_1064,h_798,c_limit/avengers%20endgame%20sin%20post%20creditos.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""',
         'https://i.blogs.es/13d771/rocjlsogn0snufwioatgna5j_jpg/1366_2000.jpeg'
          
        ],
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
          counter: value => value.length <= 20 || 'Max 20 characters',
              email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
        },
      }

   }),
   methods: {
     async logueo(){
       
        const resp =  await axios.get(`http://localhost:3000/usuarios?usuario=${this.login.usuario}`);
        console.log(resp)
       if (resp.data.length < 1)
       {
         this.text = " Usuario o contraseña invalidos ..."
         this.snackbar = true;
         this.color = "red"

       }
       else
       {
        var  vali = this;
        const pass = resp.data[0].password;
        await bcrypt.compare(this.login.password,pass, function(err, res) {

          if (res === false){
           vali.text = " Usuario o contraseña invalidos ..."
           vali.color = "red"
           vali.snackbar = true;

          }
          else
          {
          
              var tipo = resp.data[0].tipo;
              var usuario = resp.data[0].usuario;

           
           localStorage.setItem("tipo", tipo);
           localStorage.setItem("usuario", usuario);

           if (tipo == 'Admin')
           vali.$router.push("/crear_usuario");
           else
            if (tipo == 'Docente')
             vali.$router.push("/docente");
           else
           vali.$router.push("/alumno");

          }
            
         
        });
       }

        
  

       }
      
     }
  
};
</script>

<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Cairo&family=Josefin+Sans:wght@100&family=Nunito+Sans:wght@200&family=Roboto:wght@300&display=swap');

#building{
/* background:url("../assets/fondo5.jpg");*/
background-color: rgb(251, 250, 250);
 width:100%;		
 height:100%;	
 background-size:100% 100%;}

 .titulo{
   color:white;
   font-family: 'Nunito Sans';
   
 }

 .gradient-text {
  background: linear-gradient(to right, #f9f5f5, #ffa600);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Belanosima', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 44px;
}
 .titulodialog{
  background: linear-gradient(90deg, rgba(76,219,21,0.2638305322128851) 31%, rgba(121,75,9,0.4823179271708683) 57%, rgba(255,188,0,1) 93%);
 }
</style>