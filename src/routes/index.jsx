import CaseDetails from "../components/CaseDetails.jsx";
import MoneySuit from "../template/MoneySuit.jsx";

const indexRoutes = [
    {
        path: '/caseDetails',
        component: CaseDetails
    },
    {
        path: '/moneySuit',
        component: MoneySuit
    },

    { redirect: true, path: "/", to: "/caseDetails", navbarName: "Redirect"}
]

export default indexRoutes;