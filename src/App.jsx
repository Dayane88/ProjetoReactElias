import './app.css'
import IMG1 from './assets/IMG1.jpg'
import IMG2 from './assets/IMG2.jpg'
import IMG3 from './assets/IMG3.jpg'
import IMG4 from './assets/IMG4.jpg'

function App() {

  return (
    <>
      <div>
        <h1 className='Titulo1'>Itens mais vendidos</h1>
      </div>
      <div className='Container1'>
        <div>
          <div>
            <img className='BlusaBasica' src={IMG1} />
            <span>Camisa Básica </span>
            <span className='Preco'>R$ 35</span>
          </div>
          <span>Preta</span>
        </div>
        <div>
          <div>          
              <img className='BlusaBasica' src={IMG2} />
              <span>Camisa Básica </span>
              <span className='Preco'>R$ 56</span>
            </div>
            <span>Azul</span>
        </div>
        <div>
          <div>
            <img className='BlusaBasica' src={IMG3} />
            <span>Camisa Básica </span>
            <span className='Preco'>R$ 65</span>
            </div>
          <span>Vermelha</span>
        </div>
        <div>
          <div>
            <img className='BlusaBasica' src={IMG4} />
            <span>Camisa Básica Roxa </span>
            <span className='Preco'>R$ 89</span>
          </div>
          <span>Roxa</span>
        </div>
      </div>
    </>
  )
}

export default App
