
import {  Routes, Route, useLocation} from "react-router-dom";
import Home from "./Routes/Home"
import About from "./Routes/About"
import Project from "./Routes/Project"
import Connect from "./Routes/Connect"
import { AnimatePresence } from "framer-motion";
function Router(){
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes  key={location.pathname}  location={location}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/connect" element={<Connect/>}/>
            </Routes>
        </AnimatePresence>
    )
}
export default Router;