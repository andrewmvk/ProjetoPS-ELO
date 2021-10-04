import './Style.css';
import React, { useState } from 'react';

export default function Cadastro(){
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
        <>
            <div id="container">
            <div id="conteudo">
                    <form onSubmit = {handleSubmit}>
                        <div>
                            <input class="nome" type="username" name="nome" id="nome"
                            placeholder="Digite um nome" onChange={handleInputChange}
                             required autofocus></input>
                        </div>
                        <div>
                            <input class="email" type="email" name="email" id="email"
                            placeholder="Digite um email" onChange={handleInputChange}
                             required></input>
                        </div>
                        <div>
                            <input class="password" type="password" name="password" id="password"
                            placeholder="Digite uma senha" onChange={handleInputChange}
                             required></input>
                        </div>
                        <div id="imagem">
                            <label class="image" for="imageCadastro">Escolha uma imagem de perfil</label>
                            <input class="image" type="file" name="imageCadastro" id="imageCadastro"
                            onChange={handleInputChange} accept=".jpg, .png"></input>
                        </div>
                        <div>
                            <button type="submit" class="submit" onclick="confirmation()">Cadastrar</button>
                        </div>
                    </form>
                    Já possui cadastro? <a href="Login">Login</a>
                </div>
            </div>
        </>
    )
}