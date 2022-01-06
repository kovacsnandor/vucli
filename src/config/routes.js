//1. routes komponenseinek importálása
import Fooldal from "../components/routes/Fooldal.vue";
import Hirek from "../components/routes/Hirek.vue";
import HirOldal from "../components/routes/HirOldal.vue";
import NotFound from "../components/routes/NotFound.vue";


//2. route - komponens hozzárendelés
const routes = [{
        name: "hir",
        path: "/hirek/:id",
        component: HirOldal
    },
    {
        name: "hirek",
        path: "/hirek/",
        component: Hirek
    },
    {
        name: "fooldal",
        path: "/",
        component: Fooldal
    },
    {
        name: "404",
        path: '/404',
        component: NotFound
    },
    {
        path: '*',
        redirect: '/404'
    }
];

//3. Export, hogy kívülről elérhető legyen
export default routes;