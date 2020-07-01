import React from 'react';
import { hydrate } from 'react-dom';
import App from '../pages/containers/app'
// import Videos from '../pages/containers/videos';
// import  Home  from '../pages/containers/home';
// import  Contact  from '../pages/containers/contact';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducer from '../reducers/index';
// import { Map as map } from 'immutable';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, } from 'react-router-dom';
// import Header from '../pages/components/header'
// import  NotFound  from '../pages/components/notFound'
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


// const logger_ = ({getState, dispatch }) => next => action => {
//   console.log('este es mi viejo estado', getState().toJS())
//   console.log('vamos a enviar está acción', action);
//   const value = next(action)
//   console.log('este es mi nuevo estado', getState().toJS())
//   return value
// }

// const store = createStore(
//   reducer,
//   map(),
//   composeWithDevTools(
//     applyMiddleware(
//       logger,
//       thunk
//     )
//   )
// );


const homeContainer = document.getElementById('home-container')


hydrate(
  <BrowserRouter
  // basename="/videos"
>
    <App/>
    {/* EN ESTE CASO SOLO SE LLAMA AL COMPONENTE QUE VINE DESDE LA OTRA CARPETA QUE VA EN EL SERVIDOR */}
    {/* <Provider store={store}> 
        <div className="">
        <Header/>
          <Switch>
            <Route exact path='/'component={Home} />
            <Route exact path='/videos'component={Videos}/>
            <Route exact path='/contacto'component={Contact}/>
            <Redirect from='/v' to='/videos'/>
            <Route component={NotFound}/>
          </Switch>
        </div>
    </Provider> */}
  </BrowserRouter>
, homeContainer);
