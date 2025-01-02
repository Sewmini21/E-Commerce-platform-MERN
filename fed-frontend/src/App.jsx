
import Navigation from './Navigation.jsx'
import Hero from './Hero.jsx';
import Product from './Products.jsx';


function App() {
  let count = 0;
  let name = "Sewmini";
  return (
    <div>
      <Navigation name={name} count={count} />
      <Hero />
      <Product/>
    </div>


  )
}

export default App
