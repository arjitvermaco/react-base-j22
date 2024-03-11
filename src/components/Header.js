function Header(props){

    console.log("Props In Header", props)
    return(
        <header>
            <h1>{props.myAppName}</h1>
            <p>{props.description}</p>
        </header>
    )
}

export default Header

