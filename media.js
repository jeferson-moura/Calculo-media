function calcular(){ 
    
    let nota1=document.getElementById('input1')
    let nota2=document.getElementById('input2')
    let nota3=document.getElementById('input3')
    let nota4=document.getElementById('input4')
    if(nota1.value.length ==0 || nota2.value.length ==0 || nota3.value.length==0 || nota4.value.length==0){
        alert("[ERRO! POR FAVOR DIGITE AS NOTAS]")
    }
    let n1=Number(nota1.value)
    let n2=Number(nota2.value)
    let n3=Number(nota3.value)
    let n4=Number(nota4.value)
    let media = ((n1+n2+n3+n4) /4).toFixed(2)

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
