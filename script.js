let elementoNome = document.getElementById('nome')

let elementoForma = document.getElementById ('forma')

let elementoImagem = document.getElementById('imagem')

let elementoNav = document.getElementById('nav')

let elementoSection = document.getElementById('section')

let elementoEvoluir = document.getElementById('evoluir')

let elementoLuaSol = document.getElementById('luaSol')



elementoLuaSol.addEventListener ('click' , () => {

  if (elementoLuaSol.value == 'claro') {
      elementoNav.style.backgroundColor = "black";
      elementoSection.style.backgroundColor = "blue";      
      elementoLuaSol.value = 'escuro';
      elementoEvoluir.value = 'escuro0';
  }  


  else if (elementoLuaSol.value == 'escuro') {
      elementoNav.style.backgroundColor = "red";
      elementoSection.style.backgroundColor = "white";

      elementoLuaSol.value = 'claro'
      elementoEvoluir.value = 'claro0'
}  
})



elementoEvoluir.addEventListener ('click' , ()=>{

  if (elementoEvoluir.value == 'escuro1') {
    elementoNome.innerText = 'Golbat'
    elementoImagem.src = 'https://professorlotus.com/Sprites/Golbat.gif'
    elementoImagem.alt = 'Golbat'
    elementoForma.innerText = 'Segunda Forma'
    elementoEvoluir.value = 'escuro2'
  }

  else if (elementoEvoluir.value == 'escuro2') {
    elementoNome.innerText = 'Crobat'
    elementoImagem.src = 'https://professorlotus.com/Sprites/Crobat.gif'
    elementoImagem.alt = 'Crobat'
    elementoForma.innerText = 'Terceira Forma'
    elementoEvoluir.innerText = ' Voltar '
    elementoEvoluir.value = 'escuro0'
  }

  else if ( elementoEvoluir.value == 'escuro0' ){
    elementoNome.innerText = 'Zubat'
    elementoImagem.src = 'https://professorlotus.com/Sprites/Zubat.gif'
    elementoImagem.alt = 'Zubat'
    elementoForma.innerText = 'Primeira Forma'
    elementoEvoluir.innerText = 'Evoluir !!!'
    elementoEvoluir.value = 'escuro1'
  }
     
 
  else if (elementoEvoluir.value == 'claro1') {
    elementoNome.innerText = 'Charmeleon'
    elementoImagem.src = 'https://c.tenor.com/WqD4j9MevnYAAAAC/pokemon-charmeleon.gif'
    elementoImagem.alt = 'Charmeleon'
    elementoForma.innerText = 'Segunda forma'
    elementoEvoluir.value = 'claro2'
     
  }
    
  else if (elementoEvoluir.value == 'claro2') {
    elementoNome.innerText = 'Charizard'
    elementoImagem.src = 'https://gifimage.net/wp-content/uploads/2017/07/charizard-gif-7.gif'
    elementoImagem.alt = 'Charizard'
    elementoForma.innerText = 'Terceira forma'
    elementoEvoluir.innerText = ' Voltar '
    elementoEvoluir.value = 'claro3'
  }

  else {               
    elementoNome.innerText = 'Charmander'
    elementoImagem.src = 'https://c.tenor.com/imUldC5bpu4AAAAC/pokemon-charmander.gif'
    elementoImagem.alt = 'Charmander'
    elementoForma.innerText = 'Primeira forma'
    elementoEvoluir.innerText = 'Evoluir !!!'
    elementoEvoluir.value = 'claro1'
    }
         
})
                                