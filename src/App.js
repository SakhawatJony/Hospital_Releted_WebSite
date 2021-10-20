
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Services from './components/Services/Services';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Apporment from './components/Apporment/Apporment';
import Footer from './components/Footer/Footer';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Register from './components/Register/Register';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <AuthProvider>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route  path="/home" >
            <Home></Home>
          </Route>
          <Route path="/services" >
        <Services></Services>
          </Route>
          <Route path="/apporment/:serviceId" >
        <Apporment></Apporment>
          </Route>
          <Route path="/register" >
           <Register></Register>
          </Route>
          <Route path="/login" >
           <Login></Login>
          </Route>
          <Route path="/about" >
            <About></About>
          </Route>
          <Route path="/contacts" >
            <Contacts></Contacts>
          </Route>
          <Route path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
