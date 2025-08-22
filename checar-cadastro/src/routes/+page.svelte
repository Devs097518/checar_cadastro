<div class="container">
    <div id="campo">
        <div class="container_2">
            <img src="gamecom.png" alt="" id="logo" />
            <p style="text-align:center">Este aqui é um simulador de criação de contas. O Gamecom é uma rede social fictícia da comunidade gamer em que os usuários compartilham suas experiências e fazem interações entre si sobre seus jogos. Você pode iniciar a criação de sua conta fictícia clicando no botão abaixo : </p>
        </div>
        <div class="container">
            <a href="cadastro">
                <button id="iniciar">
                    <p style="font-family: monospace;">iniciar cadastro</p>
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
        padding: 4em;
    }

    .container_2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 4em;
    }

    #campo {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 400px;
        height: 550px;
        background-color: rgb(255, 241, 224);
        border: 1px black solid;
    }

    #logo {
        width: 100%;
        height: auto;
    }

    #iniciar {
        padding: 0.5em;
        margin-top:3em;
        width: 200px;
        border-radius: 100px;
        background-color: #ffffff;
        border: 1px solid black;
    }

    #iniciar:hover {
        padding: 0.5em;
        width: 200px;
        border-radius: 100px;
        border: 1px solid rgb(195, 0, 255);
        color: rgb(195, 0, 255);
    }
</style>
