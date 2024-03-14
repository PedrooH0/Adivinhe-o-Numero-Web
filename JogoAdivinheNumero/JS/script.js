let randomNumber = Math.floor(Math.random() * 100) + 1;
      const guesses = document.querySelector('.guesses');
      const lastResult = document.querySelector('.lastResult');
      const lowOrHi = document.querySelector('.lowOrHi');
      const guessSubmit = document.querySelector('.guessSubmit');
      const guessField = document.querySelector('.guessField');
      const gameOverField = document.querySelector(".gameOver")
      let guessCount = 1;
      let resetButton = gameOverField;
      document.getElementById('tt').style.display = 'none';
      

      function checkGuess() {
        const userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = 'Respostas anteriores: ';
        }

        guesses.textContent += userGuess + ' ';

        if (userGuess === randomNumber) {
          lastResult.textContent = 'Parabéns você acertou';
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = '';
          setGameOver();
        } else if (guessCount === 10) {
          lastResult.textContent = '!!!Fim de Jogo!!!';
          lowOrHi.textContent = '';
          setGameOver();
        } else {
          lastResult.textContent = 'Errado!';
          lastResult.style.backgroundColor = 'red';
          if(userGuess < randomNumber) {
            lowOrHi.textContent = 'A tentativa anterior foi muito baixa!' ;
          } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'A tentativa anterior foi muito alta!';
          }
        }

        guessCount++;
        guessField.value = '';
        guessField.focus();
      }

      guessSubmit.addEventListener('click', checkGuess);

      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        document.getElementById('tt').style.display = 'inline';
        resetButton.value = 'Começar novo jogo';
        resetButton.addEventListener('click', resetGame);
      }

      function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll('.resultParas p');
        for (const resetPara of resetParas) {
          resetPara.textContent = '';
        }

        document.getElementById('tt').style.display = 'none';
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        lastResult.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }