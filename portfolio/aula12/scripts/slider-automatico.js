var slideindex=0;

carrossel()

function carrossel(){
    var x=document.getElementsByClassName("meuSlide");

    for(var i=0;i < x.length; i++){     /*.lenght pega o tamanho de uma var*/
    x[i].style.display="none"  /*faz as imagens sumir*/
    }
    slideindex++;
    if(slideindex > x.length){
        slideindex=1;}

    x[slideindex-1].style.display="block";
    setTimeout(carrossel, 2000);

    console.log(x);
}