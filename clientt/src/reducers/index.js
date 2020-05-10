import {combineReducers} from 'redux';
import CandidatReducer from './CandidatReducer'
import ParcourBacReducer from './ParcourBacReducer';
import ParcourUnivReducer from './ParcourUnivReducer'
import AdminReducer from './AdminReducer';
import InformationReducer from './InformationReducer';
import AnnonceReducer from './AnnonceReducer';
import FiliereReducer from './FiliereReducer';

export default combineReducers({
    candidat: CandidatReducer,
    parcourBac:ParcourBacReducer,
    parcourUniv:ParcourUnivReducer,
    admin:AdminReducer,
    information:InformationReducer,
    annonce:AnnonceReducer,
    filiere:FiliereReducer

    
})