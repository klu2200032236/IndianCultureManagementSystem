import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Home from './home'
import Changepassword from './changepassword'
import Diwali from './Diwali1'
import MyProfile from './myprofile';
import TajMahal from './tajmahal';
import RedFort from './redfort';
import JamaMasjid from './jamamasjid';
import BasilicaOfBomJesus from './basilica_of_bom_jesus';
import ViewAll from './viewall';
import Holi from './Holi';
import Ramzan from './Ramzan';
import Christmas from './Christmas';
import FestivalCalendar from './festivalcalendar';
import AP1 from './andhra';
import APP1 from './aruna';
import Bihar1 from './Bihar';
import Assam1 from './Assam';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/home' element={<Home/>} />
        <Route path='/changepassword' element={<Changepassword/>} />
        <Route path='/Diwali1' element={<Diwali/>} />
        <Route path='/Holi' element={<Holi/>} /> 
        <Route path='/Ramzan' element={<Ramzan/>} />
        <Route path='/Christmas' element={<Christmas/>} /> 
        <Route path='/FestivalCalender' element={<FestivalCalendar/>} /> 
        <Route path='/Myprofile' element={<MyProfile/>} />
        <Route path='/Tajmahal' element={<TajMahal/>} />
        <Route path='/RedFort' element={<RedFort/>} />
        <Route path='/JamaMasjid' element={<JamaMasjid/>} />
        <Route path='/ViewAll' element={<ViewAll/>} />
        <Route path='/BasilicaOfBomJesus' element={<BasilicaOfBomJesus/>} />
        <Route path='/andhra' element={<AP1/>}/> 
        <Route path='/aruna' element={<APP1/>}/>
        <Route path='/Bihar' element={<Bihar1/>}/>
        <Route path='/Assam' element={<Assam1/>}/>
      </Routes>
    </BrowserRouter>

    // <div className='full-height'>
    //   <Home/>
    //   <Login/>
    // </div>
  );
}

ReactDOM.render(<Website/>, document.getElementById('root'));