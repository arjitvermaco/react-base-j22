//React Component is a function that returns some JSX (HTML)
import Footer from "./components/Footer"
import Header from "./components/Header"
export default function App2() {

    let myAppName = "My Super Calculator!!"
    let num1 = 2
    let num2 = 3

    let createdBy  = "Arjit and Team!"
    let desription = "This is a minimal Calculator created using React!! "

    let user = {
        name: "John",
        age: 25
    }

    function consoleUserClick(who = 'user'){
        console.log("A BUtton was clicked" + who)
    }

    function returnUserAge(){
        return user.age
    }

    function getChildData(data){
        console.log(data)
    }

    return (
        <>
            <Header myAppName={myAppName} createdBy={createdBy} desription={desription}></Header>
            {num1 + num2}<br/>
            {user.name}<br/>
            {user.age > 18 ? "You are an adult" : "You are a kid"} <br/>
            {returnUserAge()} <br/>
            <button onClick={consoleUserClick}>Click Me</button>
            <button onClick={()=>{consoleUserClick(" By Another User")}}>Another Button</button>
            <Footer creator={createdBy} getChildData={getChildData} consoleUserClick={consoleUserClick}/>
        </>

    )
}



