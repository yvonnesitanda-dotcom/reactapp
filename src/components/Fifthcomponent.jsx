const Fifthcomponent=() =>{
    //Variables enables us to create dynamic websites.( It means the contents of the websites will be changing over time)
    //Below we declare variables. Note variables are usually declared just before the return statement in Reactjs
    let name ="Yvonne"
    let age = 67
    let message= "I love programming"
    return(
        <div className= "Fifthcomponent">
            <h1>Welcome to my Fifth component</h1>
            {/*Below we bind our variables. We use the variables we had declared before*/}

            <h5>My name is: {name}</h5>
            <h5>My age is {age}</h5>
            <h5>And {message}</h5>

        </div>
    )
}

export default Fifthcomponent;

// Create a Fifthcomponent.jsx , have two variables i.e and bind them on the user interface then render the component on App.Js