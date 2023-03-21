function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 16
    msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora < 12){
            //Bom dia
            img.src ='manha.png'
            document.body.style.background = '#daa520'
    } else if (hora >= 12 && hora < 18 ){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#a87c63'
    } else{
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#120a8f'
    }
}
 