//React Component is a function that returns some JSX (HTML)
import Footer from "./components/Footer"
import Header from "./components/Header"
export default function App() {

    let myAppName = "Super Calculator!!"
    let num1 = 2
    let num2 = 3

    let user = {
        name: "John",
        age: 25
    }

    function returnUserAge(){
        return user.age
    }

    return (
        <>
            <Header></Header>
            {num1 + num2}<br/>
            {user.name}<br/>
            {user.age > 18 ? "You are an adult" : "You are a kid"} <br/>
            {returnUserAge()}
            <Footer/>
        </>

    )
}



