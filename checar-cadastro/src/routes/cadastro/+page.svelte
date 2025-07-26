<script lang="ts">
    import { userNome , userEmail , userSenha } from '$lib/stores/stores';
    import { userNome as inome } from '$lib/stores/stores'
    import { userEmail as iemail } from '$lib/stores/stores'
    import { userSenha as isenha } from '$lib/stores/stores'

    let username: string = "";
    let username_a: string = "";

    let email: string = "";
    let email_a: string = "";

    let senha: string = "";
    let senha_a: string = "";

    let confirmar: string = "";
    let confirmar_a: string = "";

    let redirencionar: string = "";

    let mostrar_c1: number = 0.5;
    let mostrar_c2: number = 0.5;
    let mostrar_c3: number = 0.5;
    let mostrar_c4: number = 0.5;

    $: {
        if (username == "") {
            username_a = "- preencha este campo";
            mostrar_c1 = 0.5;
        } else if (username.length < 8) {
            username_a = "- deve haver no mínimo 8 caracteres";
            mostrar_c1 = 0.5;
        } else {
            username_a = "";
            mostrar_c1 = 1;
        }

        if (email == "" || email.length < 7) {
            email_a = "- preencha este campo";
            mostrar_c2 = 0.5;
        } else if (!email.includes("@") || !email.includes(".")) {
            email_a = "- Coloque um email válido";
            mostrar_c2 = 0.5;
        } else {
            email_a = "";
            mostrar_c2 = 1;
        }

        if (senha == "") {
            senha_a = "- preencha este campo";
            mostrar_c3 = 0.5;
        } else if (senha.length < 8) {
            senha_a = "- a senha ter que ter no mínimo 8 caracteres";
            mostrar_c3 = 0.5;
        } else if (!/[a-zA-Z]/.test(senha)) {
            senha_a = "- a senha tem que ter letras";
            mostrar_c3 = 0.5;
        } else if (!/\d/.test(senha)) {
            senha_a = "- a senha tem que ter pelo menos um número";
            mostrar_c3 = 0.5;
        } else {
            senha_a = "";
            mostrar_c3 = 1;
        }

        if (senha == "") {
            senha_a = "- preencha este campo";
            mostrar_c4 = 0.5;
        } else if (confirmar != senha) {
            confirmar_a = "- as senhas não conferem";
            mostrar_c4 = 0.5;
        } else {
            confirmar_a = "";
            mostrar_c4 = 1;
        }

        if (
            username_a == "" &&
            email_a == "" &&
            senha_a == "" &&
            confirmar_a == ""
        ) {
            redirencionar = "finalizado";
        }


        inome.set(username);
        iemail.set(email);
        isenha.set(senha);
    }
</script>

<div class="container">
    <div id="campo">
        <div id="container_carta">
            <img
                src="carta_01.jpg"
                class="cartas"
                alt=""
                style="opacity:{mostrar_c1}"
            />
            <img
                src="carta_03.jpg"
                class="cartas"
                alt=""
                style="opacity:{mostrar_c2}"
            />
            <img
                src="carta_02.jpg"
                class="cartas"
                alt=""
                style="opacity:{mostrar_c3}"
            />
            <img
                src="carta_04.jpg"
                class="cartas"
                alt=""
                style="opacity:{mostrar_c4}"
            />
        </div>
        <div class="container">
            <table>
                <caption>
                    <label for="">Nome de usuário</label><br />
                    <input type="text" bind:value={username} /><br />
                    <label class="avisos" for="">{username_a}</label>
                </caption>
                <caption>
                    <label for="">Endereço Email</label><br />
                    <input type="text" bind:value={email} /><br />
                    <label class="avisos" for="">{email_a}</label>
                </caption>
                <caption>
                    <label for="">Senha</label><br />
                    <input type="password" bind:value={senha} /><br />
                    <label class="avisos" for="">{senha_a}</label>
                </caption>
                <caption>
                    <label for="">Confirmar senha</label><br />
                    <input type="password" bind:value={confirmar} /><br />
                    <label class="avisos" for="">{confirmar_a}</label>
                </caption>
            </table>
        </div>
        <div class="container" id="container_botao">
            <a href={redirencionar}>
                <button id="iniciar">
                    <p  style="font-family: monospace;">criar conta</p>
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
    .avisos {
        color: purple;
    }
    #iniciar {
        padding: 0.5em;
        width: 200px;
        border-radius: 100px;
        border: 1px solid black;
        background-color: #ffffff;
    }

    :hover#iniciar {
        color: purple;
        border: 1px solid purple;
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


    table {
        width: 100%;
        margin-left: 4em;
    }

    #container_botao {
        margin: 2em;
    }

    caption {
        text-align: start;
        margin: 1em;
    }

    input {
        width: 77%;
        height: 1.5em;
        border: 1px solid black;
    }
</style>
