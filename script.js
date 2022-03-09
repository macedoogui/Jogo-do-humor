let elementoNome = document.getElementById('nome')

let elementoForma = document.getElementById ('forma')

let elementoImagem = document.getElementById('imagem')

let elementoEvoluir = document.getElementById('evoluir')

elementoEvoluir.addEventListener ('click' , ()=>{
    
  if (elementoEvoluir.value == 1) {
    elementoNome.innerText = 'Charmeleon'
    elementoImagem.src = 'https://c.tenor.com/WqD4j9MevnYAAAAC/pokemon-charmeleon.gif' 
    elementoImagem.alt='Charmeleon'
    elementoForma.innerText = 'Segunda forma'
   elementoEvoluir.value = 2
     
  }
    
 else if (elementoEvoluir.value == 2) {
    elementoNome.innerText = 'Charizard'
   elementoImagem.src = 'https://gifimage.net/wp-content/uploads/2017/07/charizard-gif-7.gif' 
   elementoImagem.alt='Charizard'
    elementoForma.innerText = 'Terceira forma'
   elementoEvoluir.innerText = ' Voltar '
    elementoEvoluir.value = 3
  }

  else {               
    elementoNome.innerText = 'Charmander'
    elementoImagem.src = 'https://c.tenor.com/imUldC5bpu4AAAAC/pokemon-charmander.gif' 
    elementoImagem.alt='Charmander'
    elementoForma.innerText = 'Primeira forma'
    elementoEvoluir.innerText = 'Evoluir !!!'
    elementoEvoluir.value = 1
    }
         
})













