import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="main">
      <head>
      <link rel="stylesheet" href="./App.css"></link>
      </head>
      <div class='buttons'>
      <button class="duplicateBtn">Duplicate Card</button>
      <button class="deleteCardBtn">Delete Last Card</button>
      <button class="changeColorBtn">Change Color</button>
      <button class="changeTextBtn">Change Text</button>
      </div>
    <div class="card">
      <button class="detailsBtn" onclick="hideText()">Details</button>
      <h4 class="title">Pikachu</h4>
      <img class="pikachuImage"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYVal1cEpqlLP77-gaeY8Jd_AZpKhvo9RJA&usqp=CAU">
      </img>
      <p class="paragraph" hidden>Pikachu, the Mouse Pokémon. It can generate electric attacks from the electric pouches located in both of its cheeks.</p>
      </div>
    </div>
  );
}

export default App;
