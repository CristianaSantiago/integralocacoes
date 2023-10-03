import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade  from "./valida-idade.js";
const camposDoFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespotas = {
        "nome": e.target.elements["nome"].value, 
        "sobrenome": e.target.elements["sobrenome"].value, 
        "cpf": e.target.elements["cpf"].value, 
        "telefone": e.target.elements["telefone"].value, 
        "email": e.target.elements["email"].value, 
        "aniversario": e.target.elements["aniversario"].value, 
        "cidade": e.target.elements["cidade"].value, 
    }
    
    localStorage.setItem("formulario", JSON.stringify(listaRespostas));

    window.location.href = "https://formsubmit.co/Locacoesintegra@gmail.com";
})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());

} )

camposDoFormulario.forEach((campo) => {
    //Trecho de código omitido
})

const tiposDeError = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    Sobrenome: {
        valueMissing: "O campo de sobrenome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um sobrenome válido.",
        tooShort: "Por favor, preencha um sobrenome válido."
    },
    cpf: {
        valueMissing: "O campo de CPF não pode estar vazio.",
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    Telefone: {
        valueMissing: "O campo de telefone não pode estar vazio.",
        patternMismatch: "Por favor, preencha um telefone válido.",
        tooShort: "O campo de telefone não tem caractéres suficientes."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },    
    aniversario: {
        valueMissing: "O campo de data de nascimento não pode estar vazio.",
        customError: "Você deve ser maior que 18 anos para se cadastrar."
    },
    Cidade: {
        valueMissing: "O campo de cidade não pode estar vazio.",
        patternMismatch: "Por favor, preencha um cidade válido.",
        tooShort: "Por favor, preencha um cidade válido."
    },
    termos: {
        valueMissing: "Você deve aceitar nossos termos antes de continuar.",
    }
}

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');
    if (campo.name == "cpf" && campo.value.lengh >= 11) {
        ehUmCPF(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }
    tiposDeError.forEach(erro => {
    if (campo.validity[erro]) {
        mensagem = mensagens[campo.name][erro];
        console.log(mensagem); 
    }
})
   const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
   const validadorDeInput = campo.checkValidity();

   if (!validadorDeInput) {
    mensagemErro.textContent = mensagem;
   }
   else {
    mensagemErro.textContent = "";
    }
}




