
function mensagemHora(){
    const mensage = document.getElementById('mensage-day');
    const dado = new Date();
    const hora = dado.getHours();
    if(hora >=5 && hora <=12){
        mensage.innerHTML = 'Bom dia'
    }else if(hora >12 && hora <18){
        mensage.innerHTML = 'Boa tarde'
    }else if(hora >=18 && hora <=23){
    mensage.innerHTML = 'Boa noite'
    }else{
        mensage.innerHTML = 'Boa madrugada'
    }

}


setInterval(mensagemHora , 1000);

const search = document.getElementById('search');
const resultArtist = document.getElementById('playlist-style');
const resultPlaylist = document.getElementById('playlist-style');
document.addEventListener('input',function(){
    const searchTerm = search.value.toLowerCase();
    if(searchTerm === ''){
        resultPlaylist.classList('hidden');
        
    }
})