import { useState } from "react";


function Login(){
    const[email, setEmail] = useState();
    let[senha, setSenha] = useState();


    function enviaEmail(e){
        e.preventDefault();
        console.log(`Email: ${email} enviado com sucesso!!!`);
    }

    return(
        <>
            <fieldset>
            <legend>Formulário</legend>
                <form>
                    <p>Emai:</p>
                    <input type="email" value={email} placeholder="Insira Seu Email" onChange={(e) => setEmail(e.target.value)}/><br></br>
                    
                    <br></br>
                    <p>Senha:</p>
                    <input type="passaword" value={senha} placeholder="Insira sua Senha" onChange={(e) => setSenha(e.target.value)}/><br></br><br></br>
                    <button type="submit" onClick={enviaEmail}>Entrar</button>
                </form>
            </fieldset>
        </>
    )
}


export default Login;