import React, { Component } from 'react';
import logo from '../../assets/images/calendar.png'
import { Link } from "react-router-dom"

class Body extends Component{
    render(){
        return(
            <>
            <body>
            <section className="header"/>
            <nav>
                <Link to="/"><img src={logo}
                    widht="500"
                    height="125"/></Link>
                <div className="nav-links" id="navLinks">
                    <i className="fas fa-times" onclick="hideMenu()"></i>
                    <ul>
                        <li><Link to="Login">LOGIN</Link></li>
                        <li><Link to="">PERFIL</Link></li>
                    </ul>
                </div>
                <i className="fas fa-bars" onclick="showMenu()"></i>
            </nav>  
            <div className="text-box">
                <h1>Organize melhor a sua agenda</h1>
                <p>
                    Ajudando você a controlar sua rotina e compromissos.
                </p>
                <Link to="Cadastro" className="hero-btn">Crie sua conta e comece agora.</Link>
            </div>
            <section className="footer">
            <h4>Sobre Nós</h4>
            <p> Temos como objetivo ajudar pessoas a se organizarem melhor.
                <br/>A criação de agendas auxilia a se lembrarem de reuniões
                e compromissos feitos para determinado dia.</p>

             
        </section>
            </body>




            </>
        )
    }
}

export default Body





