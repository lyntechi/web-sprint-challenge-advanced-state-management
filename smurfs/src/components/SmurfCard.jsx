import React from 'react'

export default function SmurfCard(props){
    const{smurf}=props
   
    return(<div className="smurfs">
       <p>Smurf's Name: {smurf.name}</p><br/>
       <p>Age: {smurf.age}</p><br/>
       <p>Height: {smurf.height}</p>
    </div>)
}