import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import AddCandidat from './components/candidats/AddCandidat'
import Candidats from './components/candidats/Candidats'
import Navbar from './components/navbar/Navbar'
import PageNotFound from './components/pages/PageNotFound';
import ParcoursBac from './components/parcours/ParcoursBac'
import AddParcourBac from './components/parcours/AddParcourBac'
import ParcoursUniv from './components/parcours/ParcoursUniv'
import AddParcourUniv from './components/parcours/AddParcourUniv'
import store from './store';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import AddAdmin from './components/admins/AddAdmin';
import Admins from './components/admins/Admins'
import Annonces from './components/annonces/Annonces';
import AddAnnonce  from './components/annonces/AddAnnonce';
import Annonce  from './components/annonces/Annonce';
import AddFiliere from './components/filieres/AddFiliere';
import AddInformation from './components/concours/AddInformation';
import Informations from './components/concours/Informations';
import EspaceAdmin from './components/espaces/EspaceAdmin';
import EditAnnonce from './components/annonces/EditAnnonce';
import Login from './components/Login';
import Filieres from './components/filieres/Filieres';
import FiliereInfo from './components/filieres/FiliereInfo';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <Router>
      <Navbar titre="CONCOURS ESTE "/>
      
      
      <Switch>
    <Route path="/candidat" component={Candidats} exact/>
    <Route path="/candidat/add" component={AddCandidat} exact/>
   
    <Route path="/admin" component={Admins} exact/>
    <Route path="/admin/add" component={AddAdmin} exact/>

    <Route path="/information" component={Informations} exact/>
    <Route path="/information/add" component={AddInformation} exact/>

    <Route path="/annonce" component={Annonces} exact/>
    <Route path="/annonce/add" component={AddAnnonce} exact/>

    <Route path="/annonce/:id" component={Annonce} exact/>
    <Route path="/annonceFiliere/:idfiliere" component={FiliereInfo} exact/>
    <Route path="/annonce/edit/:id" component={EditAnnonce} exact/>

    
    <Route path="/filiere" component={Filieres} exact/>
    <Route path="/filiere/add" component={AddFiliere} exact/>
    <Route path="/espaceAdmin" component={EspaceAdmin} exact/>

    
    <Route component={PageNotFound}/>
    
      </Switch>
      </Router>
      
    </div>
    </Provider>
  );
}

export default App;
