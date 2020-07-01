import React, { PureComponent } from 'react';
import '../containers/generic-page.css';
import { withRouter } from 'react-router';

class NotFound extends PureComponent {

  handleBackClick = () => {
    // this.props.history.goBack()
    this.props.history.go(-1)
    //EN GO CUANDO ENTRE LOS PARENTESIS TIENES NUMERO EN NEGATIVO (-1) QUIERE DECIR IR HACIA ATRAS, Y SI TIENE LOS NUMEROEN POSITIVO (1), QUIIERE DECIR IR HACIA ADELANTE
    // this.props.history.go(1)
  }
  handleForwardClick = () => {
    // this.props.history.goBack()
    this.props.history.go(1)
    //EN GO CUANDO ENTRE LOS PARENTESIS TIENES NUMERO EN NEGATIVO (-1) QUIERE DECIR IR HACIA ATRAS, Y SI TIENE LOS NUMEROEN POSITIVO (1), QUIIERE DECIR IR HACIA ADELANTE
    // this.props.history.go(1)
  }

  handleRandomClick = () => {
    const random = Math.round(Math.random() * (10 - 1) + 1)
    //ESTO DE ACA ARRIBA ES UNA LOGICA EN LA CUAL ESTOY SOLICITANDO A JS QUE ME DE UN NUMERO RANDOM Y ME LO REDONDEE A UN ENTERO PARA NO SACAR UN DECIMAL
    this.props.history.push(`/videos?id=${random}`, {id:random})
  }


  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>No hemos encontrado la página que buscabas</h2>
        <button
         className='Button'
         onClick={this.handleForwardClick}
         >
          Ir a la pagina siguiente 👉
        </button>
        <button
         className='Button'
         onClick={this.handleBackClick}
         >
          Ir a la pagina anterior 👈
        </button>
        <button
         className='Button'
         onClick={this.handleRandomClick}
         >
          Ir a un lugar aleatorio 🤟
        </button>
      </div>
    )
  }
}

export default  withRouter(NotFound);