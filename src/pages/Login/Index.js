import './Style.css';
import React, { useState } from 'react';
export default function Login(){
    const [formvalue, setFormValue] = useState()

    const handleInputChange = (e) =>{
        const{name, value} = e.target

        //const data = formvalue[name ] || {}

        setFormValue({...formvalue, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log(e.target.value)

        console.log(data)
    }
    console.log(formvalue)

    return(
        <body>
            <div id="container">
                <div id="conteudo">
                    <form onSubmit = {handleSubmit}>
                        <div className = "emailContainer">
                            <input class="email" type="email" name="email" id="email"
                            placeholder="Digite seu email" onChange={handleInputChange} 
                             required autofocus></input>
                        </div>
                        <div>
                            <input class="password" type="password" name="password" id="password"
                            placeholder="Digite sua senha" onChange={handleInputChange} 
                             required></input>
                        </div>
                        <div>
                            <button type="submit" class="submit" onclick="confirmation()">Logar</button>
                        </div>
                    </form>
                    Não possui cadastro?
                    <a href="Cadastro"> Clique aqui</a>
                </div>
            </div>
            <div id="rodape"></div>
        </body>
    )
}