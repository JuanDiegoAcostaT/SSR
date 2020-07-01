import React from 'react';
// import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../../reducers/index';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Route, Switch, Redirect } from 'react-router-dom';


import Videos from './videos';
import Video from '../components/video';
import  Home  from './home';
import  Contact  from './contact';
import Header from '../components/header'
import  NotFound  from '../components/notFound'
// function logger({ getState, dispatch}) {
//   return (next) => {
//     return (action) => {
//       console.log('este es mi viejo estado', getState().toJS())
//       console.log('vamos a enviar está acción', action);
//       const value = next(action)
//       console.log('este es mi nuevo estado', getState().toJS())
//       return value
//     }
//   }
// }


const logger_ = ({getState, dispatch }) => next => action => {
  console.log('este es mi viejo estado', getState().toJS())
  console.log('vamos a enviar está acción', action);
  const value = next(action)
  console.log('este es mi nuevo estado', getState().toJS())
  return value
}

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
);


// const homeContainer = document.getElementById('home-container')
//ESTO DE ACA ARRIBA SE QUITA PORQUE EN EL LADO DEL NODE/SERVER , NUNCA SE VA A USAR ESO PORQUE ES PARTE DEL BROWSER


class App extends React.Component {
    render(){
        return (
            <Provider store={store}> 
            <div className="">
            <Header/>
              <Switch>
                <Route exact path='/'component={Home} />
                <Route exact path='/videos'component={Videos}/>
                <Route exact path='/videos/:id'component={Video}/>
                <Route exact path='/contacto'component={Contact}/>
                <Redirect from='/v' to='/videos'/>
                <Route component={NotFound}/>
              </Switch>
            </div>
        </Provider>
        )
    }
}

export default App;



