<script setup>
import Layout from "@/components/Layout.vue";

import axios from "axios";
import { onBeforeMount, ref } from "vue";

const liste_utilisateur = ref([]);
const liste_vehicules = ref([]);

const Date_location = ref({});
const Prix = ref("");
const utilisateur = ref("");
const vehicule = ref("");

const Locations = axios.create({
  baseURL: "https://tokpelocation-backend.onrender.com/api", // Remplacez par l'URL de votre API
  timeout: 1000, // Temps d'attente maximal pour une requête (en millisecondes)
  headers: {
    "Content-Type": "application/json",
    // Ajoutez d'autres en-têtes si nécessaire
  },
});

const postData = async () => {
  try {

    const j = parseInt(Date_location.value.slice(0,2))
    const m = parseInt(Date_location.value.slice(3,5))
    const a = parseInt(Date_location.value.slice(6,8))


    const data = {
      Date_location: new Date(Date_location.value).toJSON(),
      Prix: parseInt(Prix.value),
      utilisateur: utilisateur.value,
      vehicule: vehicule.value
    };

   
    const response = await Locations.post('/location', data);
    console.log("Succès:", response.data);
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
const liste_Utilisateur = async () => {
  try {
    const response = await Locations.get("/utilisateur");
    liste_utilisateur.value = response.data;
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
const listeVehicule = async () => {
  try {
    const response = await Locations.get("/vehicule");
    liste_vehicules.value = response.data;
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
  liste_Utilisateur();
  listeVehicule();
});
</script>

<template>
  <layout>
    <div class=" bg-slate-300 h-screen flex flex-col justify-center items-center">
    <h1 class="bg text-black font-bold">LOCATION</h1>
    <form @submit.prevent="postData" class=" bg-white  p-5 rounded-md">
      <label for="Date" class="font-medium">Date de loction</label><br>
      <input
        type="Date" class="w-full h-10 border border-gray-500 outline-none" v-model="Date_location" name="Date" id="Date" placeholder="date" /><br>
      <label for="Prix" class="font-medium">Prix</label><br />
      <input
        type="Prix"
        v-model="Prix"
        name="prix"
        id="prix"
        placeholder="prix"
        class="w-full h-10 border border-gray-500 outline-none"
      /><br>
      <div>
        <label for="Utilisateur" class="font-medium">Utilisateur</label>
        <select
          name=""
          v-model="utilisateur"
          class="w-full h-10 border border-gray-500 outline-none"
          id=""
        >
          <option value="">Sélectionner utilisateur</option>
          <option :value="c.id" v-for="c in liste_utilisateur" value="">
            {{ c.Nom }} {{ c.Prenom }}
          </option>
        </select>
      </div>
      <div>
        <label for="Vehicule" class="font-medium">Vehicule</label>
        <select
          name=""
          v-model="vehicule"
          class="w-full h-10 border border-gray-500 outline-none"
          id=""
        >
          <option value="">Sélectionner un véhicule</option>
          <option :value="v.id" v-for="v in liste_vehicules" value="">
            {{ v.Nom }} {{ v.Marque }}
          </option>
        </select>
      </div>
      <div class="w-full flex justify-center p-5 rounded-md">
       <button type="submit" class="inscription w-30 h-12 bg-green-600 text-white">
         SOUMETTRE
       </button>
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
  select{
    border-radius: 5px;
  }
</style>
