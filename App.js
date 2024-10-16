import './App.css';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Routing from './Routing';
import { createContext, useState } from 'react';
 export let store= createContext();
function App() {
  const [token,setToken]=useState("")
  return (
     <store.Provider value={[token,setToken]}>
 <Header/>
 <Routing/>
     </store.Provider>
  );
}

export default App;
