import React, { useState } from 'react'
import styles from '../css/addNum.module.css';
let btnStyles = {
    color:'red',
    backgroundColor:'black',
    padding:"12px"
}


export default function AddNum() {

    let num1 = 10;
    let num2 = 20;
    const [sum, setSum] = useState(null)

    function addNums(n1, n2) {
        // sum = n1 +n2;
        setSum(n1 + n2)
        console.log(sum)
    }

    function doubleTheSum() {
        setSum(sum * 2)
    }
    return (
        <div>
            <p>Num1 = {num1}</p>
            <p>Num2 = {num2}</p>
            <p>Sum = {sum}</p>

            <button className={styles.bigBlue} onClick={() => { addNums(num1, num2) }}>Add Number</button>

            <button className={styles.bigRed} onClick={doubleTheSum}>Double Sum</button>
        </div>
    )
}
