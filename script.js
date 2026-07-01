const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const dados = new FormData(form);

    const resposta = await fetch(form.action, {
        method: "POST",
        body: dados,
        headers: {
            "Accept": "application/json"
        }
    });

    if (resposta.ok) {

        form.innerHTML = `
            <div style="
                text-align:center;
                padding:40px 20px;
            ">
                <div style="font-size:60px;">🎉</div>

                <h2 style="margin-top:20px;">
                    Cadastro realizado!
                </h2>

                <p style="
                    font-size:20px;
                    margin-top:15px;
                    color:#666;
                ">
                    Seja bem-vinda ao Club Femme.
                    <br><br>
                    Em breve entraremos em contato.
                </p>
            </div>
        `;

    } else {

        alert("Ocorreu um erro. Tente novamente.");

    }

});
