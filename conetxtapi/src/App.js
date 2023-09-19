import "./styles.css";
import {createContext} from 'react'
import MainComponent from './MainComponent'

export const dataContext = createContext();
export default function App() {

  const obj = {
    name: 'vishnu',
    age: '25',
  }
  return (
    
     <dataContext.Provider value = {obj}> 
     <div className="App">
      <MainComponent />
      </div>
     </dataContext.Provider>
   
  );
}
