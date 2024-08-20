<script setup>
import Layout from "@/components/Layout.vue";

import imayy from "@/assets/images/icone-dossier.webp";
import imayyy from "@/assets/images/icone-dosimages-removebg-preview.png";

import { VueElement } from "vue";

</script>

<template>
    <div class="flex h-full gap-5 bg-gray-200">
      <div class="gap-6 px-5 w-96  mt-5 bg-gray-700 flex flex-col text-white h-screen ">
          <router-link>
            <div class="flex gap-3 py-4">
              <fa icon="home" size="xl"/>
              <h1 class="flex ">SYSTEM DE LOCATION</h1>
            </div>
          </router-link>

          <router-link >
            <div class="flex gap-2">
              <fa icon="t" size="xl"/>
              <p >Tableau de bord</p>
            </div>
          </router-link>
          <router-link>
            <div class="flex gap-2">
               <fa icon="car" size="xl"/>
              <RouterLink to="/vehicules" >Enregistrer un vehicule</RouterLink>
            </div>
          </router-link>

          <router-link>
            <div class="flex gap-2">
              <fa icon="user" size="xl"/>
              <RouterLink to="/utilisateur"  >Enregistrer un utilisateur</RouterLink>
            </div>
          </router-link>

          <router-link>
            <div class="flex gap-2">
              <fa icon="location-pin" size="xl"/>
              <RouterLink to="/location" >Enregistrer une location</RouterLink>
            </div>
          </router-link>

          <router-link>
            <div class="flex gap-2">
             <fa icon="business-time" size="xl"/>
              <RouterLink to="/reservation">Enregistrer un Reservation</RouterLink>
            </div>
          </router-link>

          <router-link>
            <div class="flex gap-2">
               <fa icon="city" size="xl"/>
              <RouterLink to="/villes" >Enregistrer les villes</RouterLink>
            </div>
          </router-link>

          <router-link>
            <div class="flex gap-2">
              <fa icon="file-lines" size="xl"/>
             <RouterLink to="/liste_client" >liste de clients</RouterLink>
            </div>
          </router-link >

          <router-link>
            <div class="flex gap-2">
             <fa icon="file-lines" size="xl"/>
              <RouterLink to="/liste_vehicule">liste vehicule</RouterLink>
            </div>
          </router-link>

          <router-link>
            <div class="flex gap-2">
              <fa icon="file-lines" size="xl"/>
              <RouterLink to="/liste_utilisateur" >liste location</RouterLink>
            </div>
          </router-link>

          <router-link>
            <div class="flex gap-2">
              <fa icon="file-lines" size="xl"/>
              <RouterLink to="/liste_reservation" >liste reservation</RouterLink>
            </div>
          </router-link>
            <router-link>
              <div class=" flex  space-x-3  ">
                <RouterLink to="/administrateur" ><fa icon="arrow-right-from-bracket" size="xl" /></RouterLink>
                <h1>Deconnexion</h1>
              </div >
            </router-link>
        </div>
        <div class="flex flex-col gap-5 w-full h-screen ">
          <div class=" w-full mt-5  border flex  shadow-lg text-black h-16 bg-white">
              <div class="flex ">
                    <form action="">
                      <input type="text" name="recherche" placeholder="recherche" class="w-80 mt-2 ml-10 border rounded-full h-10 bg-gray-100 outline-none" />
                    </form>
              </div>
              <div class="flex  ml-60  ">
                    <router-link>
                      <div class="flex rounded-md mt-4 space-x-12">
                        <fa icon="bell" size="xl"/>

                        <fa icon="comment" size="xl"/>
                      </div>
                    </router-link>

                    <router-link>
                      <div class=" flex mt-3 ml-20 space-x-6 ">
                        <h1 >Administrateur</h1>
                        <fa icon="user-tie" size="xl" />
                      </div >
                    </router-link>
                    
                </div>
          </div>
            
        
        <div class=" h-screen flex flex-col">
          <div> <span class="text-bold text-blue-600 font-extrabold">Bonjour, Monsieur </span> <br>
              Bienvenue sur votre Tableau de bord
          </div>

          <div class="flex gap-3 rounded-md text-center mt-6 shadow-lg">
            <div class="h-32 w-44 bg-white rounded-lg">nombre de vehicules
              <router-link><img :src="imayy" alt="" class=" w-14 mt-5 ml-7 h-12 " /></router-link>
            </div>
            <div class="h-32 w-44 bg-white rounded-lg">nombre d'utilisateurs
              <router-link> <img :src="imayy" alt="" class=" w-14 mt-5 ml-7 h-12 " /></router-link>
            </div>
            <div class="h-32 w-44 bg-white rounded-lg"> nombre de clients
              <router-link> <img :src="imayy" alt="" class=" w-14 mt-5 ml-7 h-12 " /></router-link>
            </div>
            <div class="h-32 w-44 bg-white rounded-lg"> nombre de reservations
              <router-link> <img :src="imayy" alt="" class=" w-14 mt-5 ml-7 h-12 " /></router-link>
            </div>
            <div id="nbre/location" class="h-32 w-44 bg-white rounded-lg"> nombre de locations
              <router-link> <img :src="imayy" alt="" class=" w-14 mt-5 ml-7 h-12 " /></router-link>
            </div>
          </div>
          <div class="flex gap-3 relative bottom-10 text-center shadow-lg">
            <div class="h-32 w-44 bg-white mt-14 rounded-lg">liste-location 
              <router-link> <img :src="imayyy" alt="" class=" w-24  ml-2 h-20  " /></router-link>
            </div>
            <div class="h-32 w-44 bg-white mt-14 rounded-lg">liste-clients
              <router-link> <img :src="imayyy" alt="" class=" w-24  ml-2 h-20  " /></router-link>
            </div>
            <div class="h-32 w-44 bg-white mt-14 rounded-lg">liste-vehicules
              <router-link> <img :src="imayyy" alt="" class=" w-24  ml-2 h-20  " /></router-link>
            </div>
            <div class="h-32 w-44 bg-white mt-14 rounded-lg">liste-reservations
              <router-link> <img :src="imayyy" alt="" class=" w-24  ml-2 h-20 " /></router-link>
            </div>
            <div class="h-32 w-44 bg-white mt-14 rounded-lg"> liste-utilisateurs 
              <router-link> <img :src="imayyy" alt="" class=" w-24  ml-2 h-20  " /></router-link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
</template>


<style scoped>
  .form{
  flex: 0 0 100%;
}
</style>



