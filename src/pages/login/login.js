import React, { useState } from "react";
import InputForm from "../../components/input";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const signup = () => {
        navigate('/signup')
    }

    const login = () => {
        const lcEmail = localStorage.getItem('email');
        const lcSenha = localStorage.getItem('senha');
        
        if (lcEmail === email && lcSenha === password) {
            console.log('Login carregado com sucesso')
            setTimeout(() => {
                navigate('/home');
            }, 3000)
        }else {
            throw new('Erro de autenticação')();
        }
    }

    return (
        <div className="container">
            <InputForm type='text' value={email} onChange={e => setEmail(e.target.value)} />
            <InputForm type='password' value={password} onChange={e => setPassword(e.target.value)} />
            <Button className="btn btn-primary mt-3" label="Acessar" onClick={login}/>
            <Button className="btn btn-secondary mt-3" label="Cadastrar" onClick={signup}/>
        </div>
    )
}
export default Login;