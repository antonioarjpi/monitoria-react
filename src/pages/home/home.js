import React from "react";

function Home(){

    const nome = localStorage.getItem('nome');
    
    return(
        <>
        <h1>Bem-vindo, {nome}</h1>
        </>
    )
}
export default Home;