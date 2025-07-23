<div class="container">
    <div id="campo">
        <a href="./">
           <img src="voltar.png" alt="" id="voltar" /> 
        </a>
        
        <div class="container" id="container_carta">
            <img src="check.png" alt="" id="check" />
        </div>
        <div class="container" id="container-conta">
            <h2>Conta criada com sucesso!</h2>
            <p>nome de usuário : ...</p>
            <p>email : ...</p>
            <p>senha : ...</p>
        </div>
    </div>
</div>

<style>
    :global(:root) {
        background-image: radial-gradient(#ccc 1px, transparent 1px);
        background-size: 10px 10px;
        font-family: monospace;
    }

    .container {
        display: flex;
        justify-content: center;
        padding: 1em;
    }

    #voltar{
        width: 3em;
        margin: 0.5em 0 0 1em;
        height: auto;
    }


    #campo {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 400px;
        margin-top: 4em;
        height: 550px;
        background-color: rgb(255, 241, 224);
        border: 1px black solid;
    }

    #check {
        width: auto;
        height: 250px;
    }

    #container-conta{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
</style>
