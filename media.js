function calcular(){ 
    
    let nota1=document.getElementById('input1')
    let nota2=document.getElementById('input2')
    let nota3=document.getElementById('input3')
    let nota4=document.getElementById('input4')
    if(nota1.value.length ==0 || nota2.value.length ==0 || nota3.value.length==0 || nota4.value.length==0){
        alert("[ERRO! POR FAVOR DIGITE AS NOTAS]")
    }
    let notas=Number(nota1, nota2,nota3,nota4).value
    let media = ((nota1+nota2+nota3+nota4) /4).toFixed(2)

    if(media>=7){
        let resultado= document.getElementById("res")
        resultado.style.backgroundColor="#15b71f"
        resultado.innerHTML=`Sua média é  ${media} <br>PARABÉNS! Voçê foi aprovado!`
    }

    else if(media>=5 && media<7){
        let resultado= document.getElementById("res")
        resultado.style.backgroundColor="#f1891a"
        resultado.innerHTML=`Sua média é ${media} <br> Voçê está em recuperação`
    }

    else if(media<=4 && media>=2){
        let resultado= document.getElementById("res")
        resultado.style.backgroundColor="#e11824"
        resultado.innerHTML=`Sua média é  ${media} <br> Voçê foi reprovado`
    } 
}
