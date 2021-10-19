
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Services from './components/Services/Services';
import Doctors from './components/Doctors/Doctors';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Apporment from './components/Apporment/Apporment';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
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
          <Route path="/apporment/:Id" >
        <Apporment></Apporment>
          </Route>
          <Route path="/login" >
           <Login></Login>
          </Route>
          <Route path="/about" >
            <About></About>
          </Route>
          <Route path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>


    </div>
  );
}

export default App;
