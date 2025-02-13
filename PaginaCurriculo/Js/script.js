Navegar('A')
function Navegar(classe) { /*Navegação entre os botões*/
    // Esconder todos os elementos com a classe .A, .B, .C, .D
    const elementos = document.querySelectorAll('.A, .B, .C, .D');
    elementos.forEach(elemento => {
        elemento.style.display = 'none';
    });

    // Mostrar os elementos específicos com base na classe passada
    const elementosMostrar = document.querySelectorAll('.' + classe);
    elementosMostrar.forEach(elemento => {
        elemento.style.display = 'block';
    });
    
}
function Hamburguer(){/*Botão mudar entre as informações e os botões*/
    var Infos = window.document.getElementById('Infos')
    var Botões = window.document.getElementById('Botões')
    var HambuerguerIcon = window.document.getElementById('HambuerguerIcon')
    if(Infos.style.display === 'block'){
        Infos.style.display = 'none';
        Botões.style.display = 'block';
        HambuerguerIcon.src = "./img/Hamburguer Close.png"
    }else{
        Infos.style.display = 'block';
        Botões.style.display = 'none';
        HambuerguerIcon.src = "./img/Hamburguer Open.png"
    }
}

function abrirchat(){ /*IconWpp*/
    let chat = window.document.getElementById('chat') //Img do chat
    let dropHamburguer = window.document.getElementById('DropHamburguer') //Lista Hamburguer
    let img = window.document.getElementById('OpenHamburguer'); //Img padrao hamburguer
    let listaStyle = window.getComputedStyle(chat);
    if (listaStyle.display == 'none'){ //open
        chat.style.display = 'block' //Abre o chat
        dropHamburguer.style.display = 'none' //Caso o hamburguer esteja aberto, fecha
        img.src = "./Img/Hambuerguer/Hamburguer Open.png"; //Caso o hambuguer estiver aberto, coloca a imagem padrao
        
        img.addEventListener('mouseenter', function(){    //Não deixa o mouseenter e  mouseout ser mudar a imgem
          img.src = "./Img/Hambuerguer/Hamburguer Open.png"
        })
        img.addEventListener('mouseout', function(){
          img.src = "./Img/Hambuerguer/Hamburguer Open.png"
        })

        img.style.width = '50px'
    }else{
        chat.style.display = 'none'
    }
}
function atualizarHora() { /*Atualiza a hora do chatWpp*/
    let relogio = window.document.getElementById('relogio')
    const agora = new Date();
    const hora = agora.getHours();
    const minuto = agora.getMinutes().toString().padStart(2, '0');
    relogio.innerHTML = `${hora}:${minuto}`
}
setInterval(atualizarHora, 1000);
function EnviarWpp(){ /*Função do botao enviar do chatWpp*/
    let nome = window.document.getElementById('nome').value
    let Assunto = window.document.getElementById('Assunto').value

    let link = "https://wa.me/5511986120014?text=Olá, Rodrigo. Me chamo " + nome + ", e gostaria de tratar sobre: " + Assunto + ". Aguardo seu retorno!";
    
    window.open(link, '_blank');
}
