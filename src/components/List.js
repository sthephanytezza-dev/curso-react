import Item from "./Item.js";

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Nestl" anoLancamento={1879}/>
                <Item marca="Garoto" anoLancamento={1980}/>
                <Item marca="Cacau Show" />
            </ul>
        </>
    );
}

export default List;