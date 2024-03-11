import React from 'react'

export default function Button({label,type,size,handleClick}) {
    const baseStyle = 'flex py-3 items-center justify-center border border-gray-200';

    const numberStyle = 'text-2xl hover:bg-gray-100 active:bg-gray-200'

    const operatorStyle = 'text-2xl text-white bg-orange-500 hover:bg-orange-600';

    const functionStyle = 'text-2xl bg-gray-500 text-black hover:bg-gray-600';

    const sizeStyle = size === 'double' ?'col-span-2 ':''

    let buttonStyle = `${baseStyle} ${sizeStyle}`


    if(type === 'number'){
        buttonStyle += numberStyle
    }else if(type === 'operator'){
        buttonStyle += operatorStyle
    }else if(type === 'function'){
        buttonStyle += functionStyle
    }

  return (
  <button onClick={()=>{handleClick(label,type)}} className={`${buttonStyle}`}>{label}</button>
  )
}
