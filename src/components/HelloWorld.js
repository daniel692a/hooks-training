export default function HelloWorld() {
    return (
        <div>
            <h1>Hello World👋</h1>
            <h2>Daniel Armas🤓</h2>
        </div>
    );
}
//Sólo se puede retornar una cosa, por ejemplo, en el div de arriba si pasó los dos títulos sin encerrarlos en un div, eso me da un error, se puede envolver en un div o en un fragment como lo vemos en el siguiente componente
//Para exportar dos o más componentes solo quitamos el deafult
export function Bye() {
    return (
        <>
            <h3>Bye👋</h3>
        </>
    )
}