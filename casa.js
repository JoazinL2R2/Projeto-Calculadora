function Casa(){
    metros = parseFloat(document.getElementById('MquadradoCasa').value)
    quartos = parseFloat(document.getElementById('QuartosCasa').value)
    metro2 = parseFloat(document.getElementById('PrecoMquadrado').value)
    let total

    if(metros == '' || quartos == '' || metro2 == ''){
        window.alert('Preencha todos os Campos e tente novamente!')
        return false
    }
    else{
    switch(quartos){
        case 1:
            default:
                total = metros*metro2
                window.alert('O resultado é ' + total)
                break;
                
        case 2:
            total = metros * (metro2*1.2)
            window.alert('O resultado é ' + total)
            break;

        case 3:
            total = metros * (metro*1.5)
            window.alert('O resultado é ' + total)
            break;

        case quartos > 3:
            total = metros * (metro * 2)
            window.alert('O resultado é ' + total)
            break;
    }
  }  
}
function Apartamento(){
    metros = parseFloat(document.getElementById('MquadradoAp').value)
    quartos = parseFloat(document.getElementById('QuartosAp').value)
    andar = parseFloat(document.getElementById('Andar').value)
    metroquadrado = parseFloat(document.getElementById('PrecoMquadrado').value)
    taxa = parseFloat(document.getElementById('Taxa').value)
    taxa = taxa /100
    let total
    if(metros == '' || quartos == '' || andar == '' || metroquadrado == '' || taxa == ''){
        window.alert('Preencha todos os Campos e tente novamente!')
    }
    else{
        switch(quartos){
            case 1:
                default:
                    total = metros*(metro2*taxa)
                    window.alert('O resultado é ' + total)
                    break;
                    
            case 2:
                total = metros * (taxa*(metro2*1.2))
                window.alert('O resultado é ' + total)
                break;
    
            case 3:
                total = metros * (taxa*(metro*1.5))
                window.alert('O resultado é ' + total)
                break;
    
            case quartos > 3:
                total = metros * (taxa*(metro * 2))
                window.alert('O resultado é ' + total)
                
                break;
        }
    }
}