import { createRouter, createWebHistory } from 'vue-router'
import AcceuilView from '../views/AcceuilView.vue'
import AproposView from '../views/AproposView.vue'
import ServicesView from '../views/ServicesView.vue'
import CatalogueView from '../views/CatalogueView.vue'
import CategorieView from '../views/CategorieView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import CamionsView from '@/views/CamionsView.vue'
import MinibusView from '@/views/MinibusView.vue'
import BusView from '@/views/BusView.vue'
import BusdView from '@/views/BusdView.vue'
import BusaView from '@/views/BusaView.vue'
import BusbView from '@/views/BusbView.vue'
import BuscView from '@/views/BuscView.vue'
import BuseView from '@/views/BuseView.vue'
import PetitbusaView from '@/views/PetitbusaView.vue'
import PetitbusbView from '@/views/PetitbusbView.vue'
import PetitbuscView from '@/views/PetitbuscView.vue'
import PetitbusdView from '@/views/PetitbusdView.vue'
import PetitbusfView from '@/views/PetitbusfView.vue'
import DescriptionView from '@/views/DescriptionView.vue'
import DescriptionaView from '@/views/DescriptionaView.vue'
import DescriptionbView from '@/views/DescriptionbView.vue'
import DescriptioncView from '@/views/DescriptioncView.vue'
import DescriptiondView from '@/views/DescriptiondView.vue'
import ReservationView from '@/views/ReservationView.vue'
import LocationView from '@/views/LocationView.vue'
import Liste_locationView from '@/views/Liste_locationView.vue'
import Liste_utilisateurView from '@/views/Liste_utilisateurView.vue'
import Liste_vehiculeView from '@/views/Liste_vehiculeView.vue'
import ModifierVehiculeView from '@/views/ModifierVehiculeView.vue'
import VehiculesView from '@/views/VehiculesView.vue'
import UtilisateurView from '@/views/UtilisateurView.vue'
import Liste_reservationView from '@/views/Liste_reservationView.vue'
import DashboardView from '@/views/DashboardView.vue'
import AdministrateurView from '@/views/AdministrateurView.vue'
import Liste_villesView from '@/views/Liste_villesView.vue'
import VillesView from '@/views/villesView.vue'
// import LoginView from '@/views/LoginView.vue'
import DeconnexionView from '@/views/DeconnexionView.vue'
import TableauboardView from '@/views/TableauboardView.vue'








const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes: [
    {
      path: '/acceuil',
      name: 'acceuil',
      component: AcceuilView
    },
    {
      path: '/deconnexion',
      name: 'deconnexion',
      component: DeconnexionView
    },
    {
      path: '/tableauboard',
      name: 'tableauboard',
      component: TableauboardView
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: LoginView
    // },
    {
      path: '/villes',
      name: 'villes',
      component: VillesView
    },
    {
      path: '/liste_villes',
      name: 'liste_villes',
      component: Liste_villesView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
 
    {
      path: '/administrateur',
      name: 'administrateur',
      component: AdministrateurView
    },
    {
      path: '/liste_reservation',
      name: 'liste_reservation',
      component: Liste_reservationView
    },
    {
      path: '/apropos',
      name: 'apropos',
      component: AproposView
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: ConnexionView
    },
    {
      path: '/utilisateur',
      name: 'utilisateur',
      component: UtilisateurView
    },
    {
      path: '/inscription',
      name: 'inscription',
      component:InscriptionView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/catalogue',
      name: 'catalogue',
      component: CatalogueView
    },
    {
      path: '/categuorie',
      name: 'categorie',
      component: CategorieView
    },
    {
      path: '/vehicules',
      name: 'vehicules',
      component: VehiculesView
    },
    {
      path: '/bus/modifier/:id',
      name: 'bus_modifier',
      component: ModifierVehiculeView
    },
    {
      path: '/minibus',
      name: 'minibus',
      component: MinibusView
    },
    {
      path: '/busa',
      name: 'busa',
      component: BusaView
    },
    {
      path: '/bus',
      name: 'bus',
      component: BusView
    },
    {
      path: '/busd',
      name: 'busd',
      component: BusdView
    },
    {
      path: '/busb',
      name: 'busb',
      component: BusbView
    },
    {
      path: '/busc',
      name: 'busc',
      component: BuscView
    },
    {
      path: '/buse',
      name: 'buse',
      component: BuseView
    },
    {
      path: '/petitbusa',
      name: 'petitbusa',
      component: PetitbusaView
    },
    {
      path: '/petitbusb',
      name: 'petitbusb',
      component: PetitbusbView
    },
    {
      path: '/petitbusc',
      name: 'petitbusc',
      component: PetitbuscView
    },
    {
      path: '/petitbusd',
      name: 'petitbusd',
      component: PetitbusdView
    },
    {
      path: '/petitbusf',
      name: 'petitbusf',
      component: PetitbusfView
    },
 
    {
      path: '/camions',
      name: 'camions',
      component: CamionsView
    },
    {
      path: '/description',
      name: 'description',
      component: DescriptionView
    },
    {
      path: '/descriptiona',
      name: 'descriptiona',
      component: DescriptionaView
    },
    {
      path: '/descriptionb',
      name: 'descriptionb',
      component: DescriptionbView
    },
    {
      path: '/descriptionc',
      name: 'descriptionc',
      component: DescriptioncView
    },
    {
      path: '/descriptiond',
      name: 'descriptiond',
      component: DescriptiondView
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: ReservationView
    },
 
    {
      path: '/location',
      name: 'location',
      component: LocationView
    },
    {
      path: '/liste_location',
      name: 'liste_location',
      component: Liste_locationView
    },
    {
      path: '/liste_utilisateur',
      name: 'liste_utilisateur',
      component: Liste_utilisateurView
    },
    {
      path: '/liste_vehicule',
      name: 'liste_vehicule',
      component: Liste_vehiculeView
    },

  ]
})


export default router
