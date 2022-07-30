// Handlekurven har BUGG's. når jeg sletter item, så blir det slettet fra staten. Men siden blir ikke oppdatert.
// Når jeg trykker på remove item inne i handlelkurven trenger jeg display block? hidden? 
import './App.css';
import ApiStore from './componenets/Api/GetApi';
import Handlekurven from "./componenets/Handlekurven"
import handlekurv_icon from "./componenets/images/handlekurv_icon.png"
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';


function App() {
// handlekurven = State for handlekurven og store = State for the axios call
//sum staten er for vise kostnaden i handlekurven
const [handlekurven, setHandlekurven] = useState([])
const [store, setStore] = useState('')
const [sum, setSum] = useState([])

function incStore(item){
  // Legger til nytt object i handlekurven arrayet (staten)
  setHandlekurven( prevState =>  [ ...prevState, item ] )
  
  // Legger til ny pris i sum Staten
  setSum( prevState => {
    return [...prevState , item.price]
  })
}

function decreseStore(id,item){
  // Fjerner object fra handlekurven arrayet (staten)
  // Vis forLoopen viser at handlekurven sin index.id === (props.id), SLETT den indexen.
  for(let i = 0; i < handlekurven.length; i++) {
    if(handlekurven[i].id === id) {
      handlekurven.splice(i, 1);
      break;
    }
  }

  // Fjerner summen fra sum arrayet (staten)
  // Vis forLoopen viser at sum sin index === (props.price), SLETT den index.
  for(let i = 0; i < sum.length; i++) {
    if(sum[i] === item.price) {
      sum.splice(i, 1);
      break;
    }
  }


}

  // Vis handlekurven har innhold, endre farge på knappen
  const innhold = {
    backgroundColor: handlekurven.length  ?  "#515298" : "#252525" 
    
  }

  // Just because i can
  const styles = {
    color: "#64E0E1"
  }
  




  return (  
    <div className="wrapper">
         <nav className="sticky">
            <h1 style={styles} className="strokeWhite" >Nettbutikk Sommmer ©2022</h1>
            <div>
              <img src={handlekurv_icon} alt="handlekurv logo" />
              <span id='handlekurvId' style={styles} className="strokeWhite">{handlekurven.length}</span>
               {
                handlekurven.length && <div className="theShop" style={innhold} > <small>SUM :</small>  <span style={styles} > {sum.reduce((total, num) => total + num).toFixed(2)} </span>$ </div>
              }
            </div>
          </nav>

      <Router>
        <nav className='Nav-header'>
          {/* Everything that's outside <Routes> will stay the same while Routes change */}
          <Link to="/">Nettbutikk</Link>
          <Link to="/handlekurven">Handlekurven</Link>
          
        </nav>
        <div className='grid'>
        <Routes>
          <Route path='/' element={ <ApiStore store={store} setStore={setStore}  handleClick={incStore} agreetClick={decreseStore} /> } />
          <Route path='handlekurven' element={ <Handlekurven handlekurven={handlekurven}  handlekurvLength={handlekurven.length} btnStyle={innhold} agreetClick={decreseStore}/> } />
        </Routes>
        </div>
   
      </Router>

      <div>
        <small style={styles}> 🏂🏽  Atle - #KodeHode - ©2022 ✌🏻 </small>
      </div>
    </div>
  );
}





export default App;






