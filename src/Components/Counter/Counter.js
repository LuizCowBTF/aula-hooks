function Counter(){

    let quantidade = 10;

    function upQuantidade(){
        quantidade = quantidade + 1;
        document.getElementById("counterBox").innerHTML = quantidade;
        console.log(quantidade);
    }

    return(
        <>
            <h1 id="counterBox">{ quantidade }</h1>
            <button onClick={upQuantidade}>Aumentar</button>
        </>
    )
}

export default Counter;