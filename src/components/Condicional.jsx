import {useState} from 'react';

function Condicional(props){
    const [email, setEmail] = useState('');
    const [userEmail, setUserEmail] = useState('');


    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
        console.log(userEmail);
    }

    function limparEmail(){
        setUserEmail('');
    }

    return(
        <>
            <h2>Cadastre seu email:</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Digite seu email..." 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
                {userEmail && (
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </>
    );
}

export default Condicional;