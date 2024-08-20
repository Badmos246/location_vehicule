<script setup>
import Layout from '@/components/Layout.vue'

import axiosInstance from '../../axiosConfig';

import axios from 'axios';
import { ref } from 'vue';

const nom = ref('')
const prenom = ref('')
const Telephone = ref('')
const Date_naissance = ref('')
const Password = ref('')
const mail = ref('')

const Utilisateur = axios.create({
  baseURL: 'https://tokpelocation-backend.onrender.com/api', // Remplacez par l'URL de votre API
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
        Date_naissance:new Date(Date_naissance.value).toJSON(),
        Password: Password.value,
        mail: mail.value
    }

    const response = await Utilisateur.post('/utilisateur', data);
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

<template>
   <layout>

    

    <div class=" bg-slate-300 h-screen flex flex-col justify-center items-center">
 
       <h1 class="bg text-black font-bold text-xl">Utilisateur</h1>
    
        <form @submit.prevent="postData"  class="  bg-white p-5 rounded-md w-96 " >
            <label for="Nom" class=" text-xl ">Nom</label><br>
            <input type="text" v-model="nom" name="Nom" id="Nom" placeholder="entrer votre nom"
             class="w-full h-10  outline-none  border-gray-500 border-2"><br>
            <label for="Nom" class=" text-xl ">Prenom</label><br>
            <input type="text" v-model="prenom" name="Prenom" id="Prenom" placeholder="entrer votre Prenom"
             class="w-full h-10  outline-none  border-gray-500 border-2"><br>
            <label for="phone"  class="text-xl "> Telephone</label> <br>
            <input type="phone" v-model="Telephone" name="phone" id="telephone" placeholder="numero de telephone" 
            class=" w-full h-10  border-gray-500 border-2"><br>
            <label for="naissance"  class="text-xl ">Date de naissance</label> <br>
            <input type="date" v-model="Date_naissance" name="birth" id="birthday" placeholder="date de naissance" 
            class=" w-full h-10  border-gray-500 border-2 "><br>
            <label for="password" class=" text-xl"> Mot de passe</label> <br>
            <input type="password" v-model="Password" name="pass" id="password" placeholder="votre mot de passe"
            class="w-full h-10   border-gray-500 border-2" > <br>
            <label for="mail" class=" text-xl"> email</label> <br>
            <input type="email" v-model="mail" name="email" id="email" placeholder="votre email" 
            class="w-full h-10   border-gray-500 border-2"> <br>
            <div class="w-full flex justify-center p-5 rounded-md">
             <button type="submit" class="  w-30 h-12  text-white bg-green-600">SOUMETTRE</button>
            </div>
        </form>
    </div>
  </layout>
</template>

<style scoped>
   @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
    *{
      font-family: "Nunito";
  }
  input{
    border-radius: 5px;
  }

</style>
