import './App.css'

import React from 'react'
import { Card } from './Card/Card';
import { Welcome } from './Welcome/Welcome';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './NotFound/NotFound';
import { Ejemplo } from './assets/Ejemplo/Ejemplo';

//En este codigo o archivo app.jsx importamos el react router dom para poder llamar las rutas necesarias 


export const App = () => {
  return (
    <> 
       
       <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/Card' element= {<Card />}/>
        <Route path='/*' element= {<NotFound />}/> 
        <Route path='/123' element= {<Ejemplo />}/>       
       </Routes>
    </> 
  )
}
