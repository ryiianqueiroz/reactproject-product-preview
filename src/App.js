import './App.css';
import Photo from './Model/images/image-product-desktop.jpg'
import Cart from './Model/images/icon-cart.svg'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="photo">
          <img src={Photo} alt="#" id="photoPrincipal" />
        </div>
        <div className="textContent">
          <h5>PREVIEW</h5>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL.</p>
          <div className="prices">
            <h2>$149.99</h2>
            <s>$169.99</s>
          </div>
          <button><img src={Cart} alt="#" id="cart"/> Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
