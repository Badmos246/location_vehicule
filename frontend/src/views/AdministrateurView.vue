<script setup>
import Layout from '@/components/Layout.vue'

import axiosInstance from '../../axiosConfig';

import axios from 'axios';
import { ref } from 'vue';

import { useRouter } from 'vue-router';
const router = useRouter() 


const nom = ref('')
const prenom = ref('')
const Telephone = ref('')
const Password = ref('')

const Administrateur = axios.create({
  baseURL: 'http://localhost:3010/api', // Remplacez par l'URL de votre API
  timeout: 1000, // Temps d'attente maximal pour une requête (en millisecondes)
  headers: {
    'Content-Type': 'application/json',
    // Ajoutez d'autres en-têtes si nécessaire
  }
});

const postData = async () => {
  try {


    const data = {
        Nom: nom.value,
        Prenom: prenom.value,
        Telephone: parseInt(Telephone.value),
        Password: Password.value,
    }

    const response = await Administrateur.post('/administrateur', data);
     router.push('dashboard')
    console.log('Response data:', response.data);
  } catch (error) {
    if (error.response) {
      // Le serveur a répondu avec un code de statut différent de 2xx
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      // La requête a été faite mais aucune réponse n'a été reçue
      console.error('Request error:', error.request);
    } else {
      // Autre type d'erreur
      console.error('Error:', error.message);
    }
  }
};





</script>

<template >
   <div id="container">
      <div class=" h-screen flex flex-col justify-center items-center">
       <!-- <fa icon="user" size="lg" /> -->
       <h1 class="bg-white w-80 rounded-lg shadow-lg shadow-slate-300 h-14 text-black font-bold text-xl ">Administrateur</h1>
    
        <form @submit.prevent="postData"  class=" bg-white  p-5 rounded-md w-80 h-[380px]" >
            <label for="Nom" class=" text-xl ">Nom</label><br>
            <input type="text" v-model="nom" name="Nom" id="Nom" placeholder="entrer votre nom"
             class="w-72 h-10  outline-none  border-gray-500 border-2"><br>
            <label for="Nom" class=" text-xl">Prenom</label><br>
            <input type="text" v-model="prenom" name="Prenom" id="Prenom" placeholder="entrer votre Prenom"
             class="w-72 h-10 outline-none  border-gray-500 border-2"><br>
            <label for="phone"  class="text-xl "> Telephone</label> <br>
            <input type="phone" v-model="Telephone" name="phone" id="telephone" placeholder="numero de telephone" 
            class=" w-72 h-10  border-gray-500 border-2"><br>
            <label for="password" class=" text-xl"> Mot de passe</label> <br>
            <input type="password" v-model="Password" name="pass" id="password" placeholder="votre mot de passe"
            class="w-72 h-10  border-gray-500 border-2" > <br>
            <div class="w-full flex justify-center px-10 p-5 rounded-md">
             <button type="submit" class=" w-30 h-12  text-white bg-green-600">SOUMETTRE</button>
            </div>
        </form>
      </div>
  </div>
    
</template>

<style scoped>

   @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
    *{
      font-family: "Nunito";
  }
  input{
    border-radius: 5px;
  }

  #container{
    background-image: url(@/assets/images/Minibus-Gallery-3-removebg-preview.png);
    background-repeat: no-repeat;
    background-size: cover;
}

</style>
