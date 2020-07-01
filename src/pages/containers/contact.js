import React from 'react';
import './contact.css';

class Contact extends React.Component {
    render(){

        return(
            <div className="container">
                <h1>Gracias por ver Esta Pagina</h1>
                <h3>Recurda que este sitio esta hecho con <span>React</span> ,  <span>Redux</span> y <span>React Router</span></h3>
                <h4>Juan Diego Acosta</h4>
                <p><a href="mailto:juandiegoat01@gmail.com">juandiegoat01@gmail.com</a></p>
                <p><a href="https://github.com/JuanDiegoAcostaT?tab=repositories" target='_blank'>Mi github</a></p>
                <p>Gracias</p>
            </div>
        )
    }
        };

export default Contact;