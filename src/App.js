import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  const [showLoginPage, setShowLoginPage] = useState(false)
  const [showHomePage, setShowHomePage] = useState(false)



  const showLogin = ()=> {
    setShowLoginPage(true)
  }
  const showDashboardpage = ()=> {
    setShowLoginPage(false)
    setShowHomePage(true)
    
  }


  return (
    <div className="App">
     {!showLoginPage  && !showHomePage &&  <Register showLogin={showLogin}/>}
    {showLoginPage  &&  !showHomePage && <Login showDashboardpage={showDashboardpage}/>}
    {showHomePage && !showLoginPage && <Dashboard/>}
    </div>
  );
}

export default App;
