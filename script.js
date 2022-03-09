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
  
   elementoLuaSol.value = 'escuro'
  }
   
else if (elementoLuaSol.value == 'escuro') {
    elementoNav.style.backgroundColor = "red";
   elementoSection.style.backgroundColor = "white";

   elementoLuaSol.value = 'claro' 
}

})




elementoEvoluir.addEventListener ('click' , ()=>{

  
    
  if (elementoEvoluir.value == 'claro1') {
    elementoNome.innerText = 'Charmeleon'
    elementoImagem.src = 'https://c.tenor.com/WqD4j9MevnYAAAAC/pokemon-charmeleon.gif'
    elementoForma.innerText = 'Segunda forma'
   elementoEvoluir.value = 'claro2'
     
  }
    
 else if (elementoEvoluir.value == 'claro2') {
    elementoNome.innerText = 'Charizard'
   elementoImagem.src = 'https://gifimage.net/wp-content/uploads/2017/07/charizard-gif-7.gif'
    elementoForma.innerText = 'Terceira forma'
   elementoEvoluir.innerText = ' Voltar '
    elementoEvoluir.value = 'claro3'
  }

 else {               
    elementoNome.innerText = 'Charmander'
    elementoImagem.src = 'http://i.imgur.com/VexuoSc.gif?noredirect'
    elementoForma.innerText = 'Primeira forma'
    elementoEvoluir.innerText = 'Evoluir !!!'
    elementoEvoluir.value = 'claro1'
    }
         
})
                                  