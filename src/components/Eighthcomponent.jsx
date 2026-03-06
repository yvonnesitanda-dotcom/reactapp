// Create a eighthcomponent.jsx. Inside of it , have the usestate hook with the initial value of weight being 50kgs, have a button to update the weight to 55 kgs when the button is clisked without reloading the page
import { useState } from "react"

const Eighthcomponent =()=>{
    const [weight,setWeight]=useState(50);
    return(
        <div className="Eighthcomponent">
            <h1>Welcome to The eight component</h1>

            <p>Current Weight is {weight}</p>

            <button onClick={()=>setWeight(55)}>Click to update weight</button>
        </div>
    )
}
export default Eighthcomponent;