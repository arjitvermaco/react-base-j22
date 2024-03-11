import React from 'react'

export default function Footer({creator,consoleUserClick,getChildData}) {

  let user = "Arjit Verma";

 
  return (
    <div>© {creator}
    <button onClick={()=>{getChildData(user)}} >In Footer</button>
    </div>
  )
}
