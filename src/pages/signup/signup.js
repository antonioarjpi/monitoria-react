import React, { useState } from "react";
import InputForm from "../../components/input";
import Button from "../../components/button";
import './styles.css'
import { useNavigate } from "react-router-dom";

function Signup() {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [mensagem, setMensagem] = useState();

    const navigate = useNavigate();
  
    const verificaDados = () => {
      if (nome || email || senha) {
        return false;
      } else {
        return true;
      }
    }
  
    const submit = (event) => {
      event.preventDefault();
      localStorage.setItem("email", email);
      localStorage.setItem("senha", senha);
      localStorage.setItem("nome", nome);
      setMensagem('Cadastrado com sucesso');
      
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    }

    return (
        <div className='container mt-5'>
            <form onSubmit={submit}>
                <InputForm type='text' label='Nome' onChange={e => setNome(e.target.value)} footer="Nome é requerido" />
                <InputForm type='email' label='E-mail' onChange={e => setEmail(e.target.value)} footer="Nome é requerido" />
                <InputForm type='password' label='Senha' onChange={e => setSenha(e.target.value)} footer="Nome é requerido" />
                <div className='mt-2'>
                    <Button type="submit" disabled={verificaDados()} className="btn btn-primary" label="Cadastrar" icon="bi bi-check2" />
                    <Button type="button" className="btn btn-danger" label="Cancelar" icon="bi bi-x" onClick={() => navigate('/')} />
                </div>
            </form>
            {mensagem}
        </div>
    )
}

export default Signup;