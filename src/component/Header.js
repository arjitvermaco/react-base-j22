import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { Link } from 'react-router-dom';

export default function Header() {

    let appContext = useContext(AppContext);

    console.log("AppContext from header", appContext)

  return (
    <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center text-gray-900  font-xl dark:text-white">
              {appContext.myAppName}
            </Link>
            <div className="flex items-center lg:order-2">
            <Link to="/" className="dark:text-white text-gray-800 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Home</Link>
            <Link to="about" className="dark:text-white text-gray-800 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">About</Link>

            <Link to="contact" className="dark:text-white text-gray-800 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Contact</Link>

         
              
                <a href="#" className="dark:text-white text-gray-800 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">{appContext.userTheme}</a>

                <button onClick={()=>{appContext.setUserTheme(appContext.userTheme === "dark"? "light":"dark")}}>Change Theme</button>
             
            </div>
         
        </div>
    </nav>
</header>
  )
}
