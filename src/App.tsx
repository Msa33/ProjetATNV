import { BrowserRouter as Router } from "react-router-dom";
import LesRoutes from "./Routes/LesRoutes";

export default function App(){
  return(
    <Router>
        <LesRoutes/>
    </Router>
  )
}