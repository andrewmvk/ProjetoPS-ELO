import './Style.css'
import React from 'react'
import logo from '../../assets/images/calendar.png'
import Imagem from '../../Imagens/ImagemDePerfil.jpg'
import { Link } from "react-router-dom"

export default function Perfil(){
    return(
        <>
            <div id="tudo">
                <div>
                    <div id="esquerda">
                    <Link to="/"><img src={logo}
                    widht="500"
                    height="125"/></Link>
                        
                        
                    </div>
                    <div id="pagina">
                    <h1>Minha <span>Página</span></h1>
                    </div>
                    <div id="direita">
                        <Link to="/calendario"><h3>Calendário</h3></Link>
                    </div>
                </div>
                <div id="conteudoPerfil">
                    <img src={Imagem} width="200ps"></img>
                    <input type="name" id="namePerfil" class="namePerfil" disabled="disabled" placeholder="Nome Sobrenome"></input>
                    <input type="email" id="emailPerfil" class="emailPerfil" disabled="disabled" placeholder="email@email.com"></input>
                </div>
            </div>
            <div class="clear"></div>
        </>
    )
}