<script lang="ts">
    import { userNome, userEmail, userSenha } from "$lib/stores/stores";
    import { userNome as inome } from "$lib/stores/stores";
    import { userEmail as iemail } from "$lib/stores/stores";
    import { userSenha as isenha } from "$lib/stores/stores";

    let imagem_avatar_valor: string = "Pedro.jpg";

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
    <div id="campo_arte"></div>
    <div id="campo">
        <img src="gamecom.png" alt="" id="gamecom_img" />
        <h1>Bem vindo/a ao Gamecom!</h1>
        <p>
            O Gamecom é um lugar para você encontrar outras pessoas que gostam
            de jogar, assim como você! Compartilhe suas histórias com a sua
            comunidade gamer e comece criando sua conta aqui.
        </p>
        <div id="avatar_layout">
            <div>
                <img src={imagem_avatar_valor} id="avatar_img" alt="" />
            </div>
            <div style="padding-left:2em">
                <h3>Avatar do perfil</h3>
                <select name="" id="" bind:value={imagem_avatar_valor}>
                    <option value="Pedro.jpg">Pedro</option>
                    <option value="Maria.jpg">Maria</option>
                    <option value="Joelma.jpg">Joelma</option>
                    <option value="Matheus.jpg">Matheus</option>
                </select>
            </div>
        </div>

        <div class="container">
            <div id="tabela_de_inputs">
                <div>
                    <label for=""><h3>Nome de usuário</h3></label><br />
                    <input
                        type="text"
                        class="inputs_full"
                        bind:value={username}
                    /><br />
                    <label class="avisos" for="">{username_a}</label>
                </div>
                <div>
                    <label for=""><h3>Endereço Email</h3></label><br />
                    <input
                        type="text"
                        class="inputs_full"
                        bind:value={email}
                    /><br />
                    <label class="avisos" for="">{email_a}</label>
                </div>

                <div id="bloco_senha">
                    <div style="width: 100%; margin-right:3em;">
                        <label for=""><h3>Senha</h3></label><br />
                        <input
                            type="password"
                            class="input_senha"
                            bind:value={senha}
                        /><br />
                        <label class="avisos" for="">{senha_a}</label>
                    </div>
                    <div style="width: 100%;">
                        <label for=""><h3>Confirmar senha</h3></label><br />
                        <input
                            type="password"
                            class="input_senha"
                            bind:value={confirmar}
                        /><br />
                        <label class="avisos" for="">{confirmar_a}</label>
                    </div>
                </div>
            </div>
        </div>

        <div id="container_botao">
            <a href={redirencionar}>
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
        margin: 0;
    }

    /* para celulcares */

    @media (min-width: 0px) {
        #campo_arte {
            background-image: url("arte-lateral.png");
            background-size: cover;
            width: 0%;
            min-height: 50em;
            display: none;
        }

        #campo {
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: 100%;
            padding: 0 5em;
            min-height: 50em;
            background-color: rgb(255, 241, 224);
        }

        h3 {
        color: rgb(46, 46, 46);
        margin: 3em 0 0 0;
        font-size: 12px;
    }
    }

    /* para computadores */

    @media (min-width: 500px) {
        #campo_arte {
            background-image: url("arte-lateral.png");
            background-size: cover;
            width: 50%;
            min-height: 50em;
            display: block;
        }

        #campo {
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: 50%;
            padding: 0 8em;
            min-height: 50em;
            background-color: rgb(255, 241, 224);
        }

        h3 {
        color: rgb(46, 46, 46);
        margin: 3em 0 0 0;
    }
    }

    .container {
        display: flex;
        justify-content: center;
        padding: 0;
    }

    h3 {
        color: rgb(46, 46, 46);
        margin: 3em 0 0 0;
    }

    a {
        text-decoration: none;
    }

    #gamecom_img {
        width: 150px;
        height: auto;
        margin: 4em 0;
    }

    #avatar_layout {
        display: flex;
        margin: 2em 0;
    }

    #avatar_img {
        width: 100px;
        height: auto;
        border-radius: 100%;
    }

    select {
        border: none;
        background-color: #e1eaeb;
        padding: 0.5em;
        margin: 1em;
        border-radius: 7px;
        color: rgb(88, 88, 88);
    }

    input {
        border: none;
        background-color: #e1eaeb;
        padding: 0.9em;
        border-radius: 7px;
        /* width: 100%; */
        color: rgb(88, 88, 88);
    }

    .inputs_full {
        width: 100%;
    }

    .input_senha {
        width: 100%;
    }

    .avisos {
        color: purple;
        padding-bottom: 3em;
    }

    #iniciar {
        padding: 0.5em;
        width: 20em;
        border: 1px solid black;
        background-color: #ffffff;
        margin: auto;
    }

    :hover#iniciar {
        background-color: #f3d48036;
    }

    #bloco_senha {
        display: flex;
        width: 100%;
    }

    #tabela_de_inputs {
        width: 100%;
    }

    #container_botao {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 5em 0;
        width: 100%;
    }

    /* 
    table {
        width: 100%;
    }

    td{
        width: 50px;
    }

    #container_botao {
        margin: 2em;
        width: 100%;
    }

    caption , tbody {
        text-align: start;
        margin: 1em;
    } */
</style>
