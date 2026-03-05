import { useState } from "react";

const Seventhcomponent=()=>{
    // The useState Hook enables us to create dynamic website whereby it usually has a start/ initial state followed by a state that get shown when some effects happen on our website.
    const[number,setNumber]=useState(10);
    return(
        <div ClassName="Seventhcomponent">
            {/* Below we bind our value for number*/}
            <h1>Welcome to my seventh component</h1>
            <h2>Current number is : {number}</h2>

            {/* Call the SetNumbe function to update the number after a click effect*/}
            <button onClick={()=>setNumber(20)}>Click to update the number</button>
            

        </div>
    )
}
export default Seventhcomponent;
// Create a eighthcomponent.jsx. Inside of it , have the usestate hook with the initial value of weight being 50kgs, have a button to update the weight to 55 kgs when the button is clisked without reloading the page