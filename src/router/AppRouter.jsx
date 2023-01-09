import {Navigate, Route, Routes} from 'react-router-dom';
import {Navbar} from "../ui/components/Navbar"
import { MarvelPage, DcPages, HeroesRoutes } from '../heroes';
import {LoginPage} from '../auth/';


export const AppRouter = () => {
  return (
    <>
    
    <Routes>
        
        <Route path="login" element= {<LoginPage/>} />
         <Route path="/*" element= {<HeroesRoutes/>} />
       
       
        

    </Routes>
    </>
  )
}
