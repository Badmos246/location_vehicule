<script setup>
import Layout from '@/components/Layout.vue'

import axiosInstance from '../../axiosConfig';
import { onBeforeMount, ref } from "vue";

import axios from 'axios';

const liste_villes = ref([]);

const nom = ref('')
const prenom = ref('')
const Telephone = ref('')
const ville = ref('')
const dateDebut = ref('')
const dateFin = ref('')
const mail = ref('')
const selcted = ref('')


const Reservation = axios.create({
  baseURL: 'http://localhost:3010/api', // Remplacez par l'URL de votre API
  timeout: 1000, // Temps d'attente maximal pour une requête (en millisecondes)
  headers: {
    'Content-Type': 'application/json',
    // Ajoutez d'autres en-têtes si nécessaire
  }
});

const reserver = async () => {
  try {


    const data = {
        nom: nom.value,
        prenom: prenom.value,
        Telephone: Telephone.value,
        ville: ville.value,
        dateDebut: dateDebut.value,
        dateFin: dateFin.value,
        mail: mail.value
    }

    const response = await Reservation.post('/reservation', data);
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

const listeVilles = async () => {
  try {
    const response = await Reservation.get("/villes");
    liste_villes.value = response.data;
  } catch (error) {
    if (error.response) {
      // Le serveur a répondu avec un code de statut différent de 2xx
      console.error("Response error:", error.response.data);
    } else if (error.request) {
      // La requête a été faite mais aucune réponse n'a été reçue
      console.error("Request error:", error.request);
    } else {
      // Autre type d'erreur
      console.error("Error:", error.message);
    }
  }
};

 
onBeforeMount(() => {
listeVilles();
});
</script>

<template>
  <layout>
    <div class=" bg-slate-300 h-screen flex flex-col justify-center items-center">
     <h1 class="bg text-black font-bold text-xl mt-10">RESERVATION</h1>
       <form @submit.prevent="reserver"  class="  bg-white p-8 rounded-md w-96">
        <label for="nom"  class=" text-xl ">Nom</label><br>
        <input type="text" v-model="nom" name="Nom" id="Nom" placeholder="entrer votre nom" 
        class="w-72 h-10  outline-none  border-gray-500 border"><br>
        <label for="prenom"  class=" text-xl ">Prenom</label><br>
        <input type="text" v-model="prenom" name="Prenom" id="Prenom" placeholder="entrer votre Prenom" 
        class="w-72 h-10  outline-none  border-gray-500 border"><br>
        <label for="phone"  class=" text-xl ">Telephone</label><br>
        <input type="tel" v-model="Telephone" name="phone" id="phone" placeholder="telephone" 
        class="w-72 h-10 outline-none  border-gray-500 border"> <br>
        <label for="date"  class=" text-xl "> Du</label><br>
        <input type="date" v-model="dateDebut"  id="start" name="start" placeholder="entrer la date " 
        class="w-72 h-10 outline-none  border-gray-500 border"><br>
        <label for="date"  class=" text-xl"> Au</label><br>
        <input type="date" v-model="dateFin" id="end" name="end" placeholder=" date" 
        class="w-72 h-10 outline-none  border-gray-500 border"> <br>
      <div>
        <label for="Villes" class="font-medium">Villes</label>
        <select
          name=""
          v-model="ville" 
          class="w-72 rounded-md h-10 border border-gray-500 outline-none"
          id=""
        >
          <option value="">Sélectionner villes</option>
          <option :value="v.Nom" v-for=" v in liste_villes" value="">
            {{ v.Nom }}
          </option>
        </select>
      </div>
        <label for="mail"  class=" text-xl "> email</label> <br>
        <input type="email" v-model="mail" name="email" id="email" placeholder="votre email"
        class="w-72 h-10 outline-none  border-gray-500 border"> <br>
        <div class="w-full flex justify-center p-5 rounded-md">
         <input type="submit" value="SOUMETTRE" class="  w-30 h-12  text-white bg-green-600  cursor-pointer shadow-lg shadow-green-800/20 hover:shadow-green-800/20 ">
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