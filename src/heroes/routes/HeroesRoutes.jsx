import { Navbar } from '../../ui/components/Navbar';
import {Navigate, Route, Routes } from 'react-router-dom';
import { DcPages, MarvelPage, Hero, SearchPage } from '../pages';
export const HeroesRoutes = () => {
  return (
    <>
    <Navbar/>
        <div className="container">
    <Routes>
        <Route path="marvel" element= {<MarvelPage/>} />
        <Route path="dc" element= {<DcPages/>} />
        <Route path="search" element= {<SearchPage/>} />
        <Route path="hero/:id" element= {<Hero/>} />

        <Route path="/" element= {<Navigate to="/marvel"/>} />
       
        

    </Routes>

    </div>


    
    
    </>
  )
}
