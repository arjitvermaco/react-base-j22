import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { useContext, useEffect } from 'react';
import AppContext from './context/AppContext';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {

  const appContext = useContext(AppContext)

  useEffect(()=>{
   const className = "dark";
   const body = document.body;

   appContext.userTheme === "light" ? body.classList.add(className): body.classList.remove(className)

  },[appContext.userTheme])


  return (
    <>
      <Header />
        <Routes>
          <Route index Component={HomePage}/>
          <Route path='about' Component={AboutPage}/>
          <Route path='contact' Component={ContactPage}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
