import { Routes, Route } from "react-router-dom";
import AboutPage from "../about/page";
import ActionsPage from "../actions/page";
import EvenementsPage from "../evenements/page";
import DonPage from "../don/page";
import ContactPage from "../contact/page";
import ActualitesPage from "../actualites/page";
import Home from "../page";
import RoomPage from "../Reservation/Salles";
import Reservation from "../Reservation/Reservation";

export default function LesRoutes (){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/actions" element={<ActionsPage/>}/>
            <Route path="/actualites" element={<ActualitesPage/>}/>
            <Route path="/evenements" element={<EvenementsPage/>}/>
            <Route path="/don" element={<DonPage/>}/>
            <Route path="contact" element={<ContactPage/>}/>
            <Route path="/salles" element={<RoomPage/>}/>
            <Route path="/reservation" element={<Reservation/>}/>
        </Routes>
    )
}