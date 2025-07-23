<div class="container">
    <div id="campo">
        <div id="container_carta">
            <img src="carta_01.jpg" class="cartas" alt="" />
            <img src="carta_03.jpg" class="cartas" alt="" />
            <img src="carta_02.jpg" class="cartas" alt="" />
            <img src="carta_04.jpg" class="cartas" alt="" />
        </div>
        <div class="container">
            <table>
                <caption>
                    <label for="">Nome de usuário</label><br>
                    <input type="text" /><br>
                    <label class="avisos" for="">- aviso 1</label>
                </caption>
                <caption>
                    <label for="">Endereço Email</label><br>
                    <input type="text" /><br>
                    <label class="avisos" for="">- aviso 2</label>
                </caption>
                <caption>
                    <label for="">Senha</label><br>
                    <input type="password" /><br>
                    <label class="avisos" for="">- aviso 3</label>
                </caption>
                <caption>
                    <label for="">Confirmar senha</label><br>
                    <input type="password" /><br>
                    <label class="avisos" for="">- aviso 4</label>
                </caption>
            </table>
        </div>
        <div class="container" id="container_botao">
            <a href="finalizado">
                <button id="iniciar">
                    <p style="font-family: monospace;">criar conta</p>
                </button>
            </a>
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
        padding: 0.5em;
    }

    #campo {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 400px;
        
        background-color: rgb(255, 241, 224);
        border: 1px black solid;
    }

    #iniciar {
        padding: 0.5em;
        width: 200px;
        border-radius: 100px;
        border: 1px solid black;
        background-color: #ffffff;
    }

    .cartas {
        width: 100px;
        height: auto;
    }

    #container_carta {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 4em;
    }

    .avisos{
        color : rgb(195, 0, 255);
    }

    table{
        width: 100%;
        margin-left: 4em;
    }

    #container_botao{
        margin: 2em;
    }

    caption{
        text-align: start;
        margin: 1em;
    }

    input{
        width: 77%;
        height: 1.5em;
        border: 1px solid black;
    }
</style>
