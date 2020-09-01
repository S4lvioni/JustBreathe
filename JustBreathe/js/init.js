$(() => {
    var i=0;
    timer=0;
    clickcontrol=true;
    rodapecontrole=true;
    var testando =  $('#texto');
    var rodape = $('.footer-copyright');
     $('.dot').click(function(){
        if(clickcontrol==true){
        clickcontrol=false;
        rodapecontrole=false;
        if(rodapecontrole==false){
            $(rodape).addClass('rodapeinv');
            setTimeout(()=>{
            document.getElementById('texto').textContent="Inspire";
            $(rodape).addClass('rodaperemov');
        },1000);
        setTimeout(()=>{
            $(this).addClass("dot2");
            $(testando).addClass('textinspire');
        },2000);//+4 do inspire total 6
        setTimeout(()=>{
            document.getElementById('texto').textContent="Expire";
        },7000);
        setTimeout(()=>{
            $(this).addClass("dot3").removeClass("dot2");
            $(testando).removeClass('textinspire');
            $(testando).addClass('textexpire');
        },7500);
        setTimeout(()=>{
            document.getElementById('texto').textContent="Inspire";
        },16000);
        setTimeout(()=>{
            $(this).removeClass("dot3");
            ;//acaba aqui
        },16500);
        setTimeout(()=>{
            $(this).addClass("dot2");
            $(testando).removeClass('textexpire')
            $(testando).addClass('textinspire');
        },17500);
        setTimeout(()=>{
            document.getElementById('texto').textContent="Expire";
        },22500);
        setTimeout(()=>{
            $(this).addClass("dot3").removeClass("dot2");
            $(testando).removeClass('textinspire');
            $(testando).addClass('textexpire');
        },23000);
        setTimeout(()=>{
            document.getElementById('texto').textContent="Inspire";
        },32000);
        setTimeout(()=>{
            $(this).removeClass("dot3");//2ciclo
        },32500);
        setTimeout(()=>{
            $(this).addClass("dot2");
            $(testando).removeClass('textexpire')
            $(testando).addClass('textinspire');
        },33000);
        setTimeout(()=>{
            document.getElementById('texto').textContent="Expire";
        },38000);
        setTimeout(()=>{
            $(this).addClass("dot3").removeClass("dot2");
            $(testando).removeClass('textinspire');
            $(testando).addClass('textexpire');
        },38500);
        setTimeout(()=>{
            $(testando).removeClass('textexpire');
            document.getElementById('texto').textContent="Repetir";
            clickcontrol=true;
            $(rodape).removeClass('rodapeinv').removeClass('rodaperemov').addClass('rodapevis');
        },47500);
        setTimeout(()=>{
            $(this).removeClass("dot3");//finalizado
            $(rodape).removeClass('rodapevis').addClass('rodapefix');
        },48000);
    }
        }
    }); 
});


    