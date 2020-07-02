
    const divContainer = document.querySelector('.divContainer');

    function createGrid(nrTiles){
      divContainer.style.gridTemplateColumns = `repeat(${nrTiles}, ${80/nrTiles}vh)`;
      divContainer.style.gridTemplateRows = `repeat(${nrTiles}, ${80/nrTiles}vh)`;
      
      
      for(let i = 0; i < (nrTiles * nrTiles); i++){
        const tile = document.createElement('div');
        tile.className = 'tile';
        let brightnessStart = 100;
        tile.addEventListener('mouseover', () => {          
          let red = Math.floor(Math.random()*256);
          let green = Math.floor(Math.random()*256);
          let blue = Math.floor(Math.random()*256);
          tile.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue}) ;
          filter: brightness(${brightnessStart -= 10}%)`);
        });
        divContainer.appendChild(tile);
      }

    }
    createGrid(16);

    const button = document.querySelector('.resetBtn');
    button.addEventListener('click', resetGrid);

    function resetGrid(){
      const oldTiles = document.querySelectorAll('.tile');
      oldTiles.forEach((e) => {
        e.remove();
      });

      let nrTiles;
      while(isNaN(nrTiles)|| nrTiles<1 || nrTiles>64){
        let askUser = prompt("Please enter grid size between 1 and 64", '');
        nrTiles = parseInt(askUser);      
        if(isNaN(nrTiles)|| nrTiles<1 || nrTiles>64){
        alert('Invalid grid size\nPlease try again');
        }
        createGrid(nrTiles);      
      }
    }   

