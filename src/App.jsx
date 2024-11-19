import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './components/pages/Home';
import LogIn from './components/pages/LogIn';
import Products from './components/pages/Products';

function App() {
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/login":
      component = <LogIn />;
      break;
    case "/product":
      component = <Products />;
      break;
  }

  return (
    <div className="app">
      <NavBar />
      {component}
    </div>
  );
}

export default App;
