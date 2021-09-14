import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {


  return (
    <div className='flex flex-col items-stretch text-center'>
      <h1 className='font-extralight'>
        Exercício React-Redux (Simples)
      </h1>
      <div className='flex'>
        <Intervalo ></Intervalo>
      </div>
      <div className='flex'>
        <Media ></Media>
        <Soma ></Soma>
        <Sorteio></Sorteio>
      </div>

    </div>
  );
}

export default App;
