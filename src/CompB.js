import React,{useContext} from 'react'
import CompC from './CompC';
import { Firstname, Lastname } from './App';

const CompB =()=>{
    const firstname = useContext(Firstname);
    const lasttname = useContext(Lastname);
    return(
        <>
        <h2>my name is {firstname} {lasttname} this is B component </h2>
        <h3>here we use useContext this is far better than contextapi</h3>

        {/* agr hm C component m dekhe to data call krne k liye .Consumer 
        krke bht lamba hojarha h tu is se bachne k lye useContext use krhe h */}

        <p>----------------------------------------------------------</p>
            <CompC />

        </>
    );
}

export default CompB;