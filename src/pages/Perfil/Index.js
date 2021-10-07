import './Style.css'
import React from 'react'
import calendario from '../../assets/images/calendar.png'
import Imagem from '../../Imagens/ImagemDePerfil.jpg'

export default function Perfil(){
    return(
        <>
            <div id="tudo">
                <div>
                    <div id="esquerda">
                        <h1>Minha <span>Página</span></h1>
                        <a href="/"><h3>Voltar para a Home</h3></a>
                    </div>
                    <div id="direita">
                        <img src={calendario} width="240px"></img>
                        <a href=""><h3>Calendário</h3></a>
                    </div>
                </div>
                <div id="conteudoPerfil">
                    <img src={Imagem} width="200ps"></img>
                    <input type="name" id="namePerfil" class="namePerfil" disabled="disabled" placeholder="Importar o nome pra cá"></input>
                    <input type="email" id="emailPerfil" class="emailPerfil" disabled="disabled" placeholder="Importar o email pra ca"></input>
                </div>
            </div>
            <div class="clear"></div>
        </>
    )
}