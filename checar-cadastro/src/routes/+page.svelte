<div class="container">
    <div id="campo">
        <div class="container">
            <img src="carta_inteira.webp" alt="" id="carta" />
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

    #campo {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 400px;
        height: 550px;
        background-color: rgb(255, 241, 224);
        border: 1px black solid;
    }

    #carta {
        width: auto;
        height: 150px;
        margin: 4em 0 0 0;
        border: 1px black solid;
    }

    #iniciar {
        padding: 0.5em;
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
