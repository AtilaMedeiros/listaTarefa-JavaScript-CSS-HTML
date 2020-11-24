(() => {



      function  funcaoCallBack(evento){

        const input = document.querySelector('[data-input]');
          const valorInput = input.value;

        const ulElemento = document.querySelector('[data-list]');
          const liElemento = document.createElement('li')
            liElemento.classList.add('task')
            const pElemento = `<p class="content">${valorInput}</p>`

        liElemento.innerHTML = pElemento

        liElemento.appendChild(CriarBotaoConcluir())
        ulElemento.appendChild(liElemento)
         
        
        evento.preventDefault()

        input.value = ""
      }

      const buttonNovoItem = document.querySelector('[data-button-novoItem]');
      buttonNovoItem.addEventListener('click', funcaoCallBack)

      const CriarBotaoConcluir = () => {
        const botaoConcluir = document.createElement('button')
          botaoConcluir.classList.add('check-button')
          botaoConcluir.innerText = 'Concluir'

        botaoConcluir.addEventListener('click', concluirTarefa)
        return botaoConcluir
      }

      const concluirTarefa = (evento) => {
        const botaoConcluir = evento.target
        const tarefaCompleta = botaoConcluir.parentElement
          tarefaCompleta.classList.toggle('done')
      }


   
})()