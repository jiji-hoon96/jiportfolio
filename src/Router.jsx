
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Routes/Home"
import About from "./Routes/About"
import Project from "./Routes/Project"
import Connect from "./Routes/Connect"
function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/connect" element={<Connect/>}/>
            </Routes>
        </BrowserRouter>
        
    )
}
export default Router;