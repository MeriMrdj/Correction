/*jshint esversion: 6*/

import home from "./components/pages/home.vue";
import about from "./components/pages/about.vue";
import folio from "./components/pages/folio.vue";
import contact from "./components/pages/contact.vue";


export const routes = [
    {
        path: '/', label: "Accueil", name: "home",
        component: home
    },
    {
        path: '/about', label: "About", name: "about",
        component: about
    },    
     {
        path: "/folio", label: "folio", name:"folio",
        component: folio
    },
    {
        path: '/contact', label: "Contact", name: "contact",
        component: contact
    },
     {
        path: "*", label: "404", name:"404",
        component: home
    }
    
];
