import { createContext } from 'react';
import './App.css';
import CompA from './CompA';
import CompC from './CompC';

const Firstname = createContext();
const Lastname = createContext();

const App = ()=> {
  return (
    <>
      <Firstname.Provider value={"Farrukh"}>
        <Lastname.Provider value={"Feroz"}>
            <CompA />
        </Lastname.Provider>
      </Firstname.Provider>

    </>
  );
}

export default App;
export {Firstname,Lastname};