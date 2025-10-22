import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";


export default defineConfig({
 plugins: [tailwindcss()],
 base: "Sae3.01_Cloe_Delage",
 build: {
   rollupOptions: {
     input: {
       main: resolve(__dirname, "index.html"),
       denim: resolve(__dirname, "denim.html"),
       panier: resolve(__dirname, "panier.html"),
       profil: resolve(__dirname, "profil.html"),
       livraison: resolve(__dirname, "livraison.html"),
       inscription: resolve(__dirname, "inscription.html"),
       desciptions: resolve(__dirname, "descriptions_produits.html"),
       connexion: resolve(__dirname, "connexion.html"),
     },
   },
 },
});
