function criarpopup(){
    var popup = document.createElement('div');
    popup.style.position='fixed';
    popup.style.backgroundColor='rgba(0, 0, 0, 0.6)';
    popup.style.height='100%';
    popup.style.width='100%';
    popup.style.top='0';
    popup.style.left='0';
    popup.style.zIndex='9999';
    // popup.style.display = 'block'; 
    popup.style.display = 'flex';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'center';

    var mensagem = document.createElement('div'); 
    mensagem.style.backgroundColor='rgba(0, 0, 0, 0.6)';
    mensagem.style.display = 'flex'; 
    mensagem.style.flexDirection = 'column';
    mensagem.style.alignItems = 'center'; 
    mensagem.style.justifyContent = 'center';
    mensagem.style.border='2px solid gray';
    mensagem.style.boxShadow='0px 4px 10px rgba(0, 0, 0, 0.5)';
    mensagem.style.borderRadius='20px';
    mensagem.style.boxSizing = 'border-box';
    mensagem.style.height='70%';  
    mensagem.style.maxWidth = '700px'; // Limite de largura máxima para desktop
    mensagem.style.maxHeight = '90%'; // Limite de altura máxima
    mensagem.style.overflowY = 'auto'; // Permite rolagem vertical, se necessário
    mensagem.style.backgroundImage = 'url(https://i0.wp.com/t4.ftcdn.net/jpg/02/89/57/09/360_F_289570965_L7AYf7vD1UwY4toUFXL3r4CFh9rK5jFH.jpg)';
    mensagem.style.backgroundSize = 'cover'; // Ajusta a imagem para cobrir todo o mensagem
    mensagem.style.backgroundPosition = 'center'; // Centraliza a imagem no mensagem
    mensagem.style.backgroundRepeat = 'no-repeat'; //imagem não se repita

    var imagem = document.createElement('img');
    imagem.src = 'https://cdn.sistemawbuy.com.br/arquivos/c60f5c8684036b7fb1e4ba5a05f4aac4/config/novo-tempo-tv-novo-tempo-gravadora-novo-tempo-radio-novo-tempo-adventista-iasd,rede-de-comunicaa-a-o-491.png';
    imagem.style.width = '100%'; // Ajusta para 100% da largura do container
    imagem.style.maxWidth = '230px'; // Limite de largura máxima para a imagem
    imagem.style.height = 'auto'; // Mantém a proporção da imagem
    imagem.style.marginBottom = '25px';

    mensagem.appendChild(imagem);

    var texto = document.createElement('p');
    texto.style.color='#004497';
    texto.style.textAlign='center';
    texto.style.fontFamily='SourceSansPro, sans-serif';
    texto.style.fontWeight='600';
    texto.style.width = '100%';
    texto.style.maxWidth = '100%';
    texto.style.padding = '10px'; // Ajuste de padding para melhor visualização em dispositivos móveis   
    texto.style.margin = '0';
    texto.style.padding='0 40px 0 40px'       
    texto.style.boxSizing = 'border-box';
    texto.style.fontSize = '16px'; // Ajuste de tamanho de fonte para dispositivos móveis

    texto.innerText = 'Feliz Sábado!\n\n Iniciando no pôr do sol da sexta-feira até o pôr do sol de sábado, pausamos nossas atividade para adorar a Deus. Voltaremos ao atendimento após o pôr do sol desse sábado.\n\n Agradecemos a compreensão e estamos ansiosos para recebê-los novamente!\n\n Lembra-te do dia do sábado, para o santificar..." Êxodo 20:8-11\n\n Com carinho,\n\n Equipe Loja Novo Tempo';

    
    mensagem.appendChild(texto);
    popup.appendChild(mensagem);
    document.body.appendChild(popup);
}

function verificarHoraEDia() {
    // Obtém a data e hora atual
    const agora = new Date();
    const diaSemana = agora.getDay(); // 0 = Domingo, 1 = Segunda, ..., 5 = Sexta, 6 = Sábado
    const horas = agora.getHours();
    const minutos = agora.getMinutes();

    // Verifica se é sexta-feira após 17:59 ou sábado antes das 18:00
    const isSextaTarde = diaSemana === 5 && (horas > 13 || (horas === 17 && minutos > 59));
    const isSabado = diaSemana === 6 && (horas < 18 || (horas === 17 && minutos <= 59));
   
    if (isSextaTarde || isSabado) {
        criarpopup();
    }
}

verificarHoraEDia();

