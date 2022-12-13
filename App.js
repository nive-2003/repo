

import './App.css';

import List from './pages/list';
import Appz from './pages/radium'
import {Counters} from './counter'
import Counter1 from './new';
import Rater from './rater';
import EnhancedLike from './Like';
import Comment from './comment';
import Error from './error'
import BasicButtons from './button'
import Lifecycle from './pages/lifecycle'
import Name from './name';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import Services from './pages/services'
function App(){

 return(
  <div>
    <List/>
   <Appz/>

   <Counters/>
   <Counter1/>
   <Rater/>
   <EnhancedLike/>
   <Comment/>
   <Error/>
   <BasicButtons/>
   <Lifecycle/>
   <Name/>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/c' element={<Contact/>}/>
    <Route path='/s' element={<Services/>}/>
  </Routes>
  </BrowserRouter>
  
  </div>
 );
}

export default App;