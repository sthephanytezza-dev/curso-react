import Button from "./evento/Button";

function Evento(){
    function meuEvento(){
        console.log("Ativando primeiro evento");
    }

    function segundoEvento(){
        console.log("Ativando segundo evento");
    }
    
    return(
        <>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"></Button>
            <Button event={segundoEvento} text="Segundo Evento"></Button>
        </>
    );
}

export default Evento;