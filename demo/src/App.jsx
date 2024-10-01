
import './App.css';
import Demo2 from './component/Demo2';
import Demo1 from './component/Demo1';
import Test from './component/Test';
import UseState from './UseState';
import Counter from './Counter';
import Form from './Form';
import Spreading from './Spreading';
import Crud from './component/Crud';










function App() {
const fruits ="mango";
const name = "dev";




  return (
    <>
     <h1 className='h1tag'>hello world</h1>
     <Demo2/>
    <Demo1/>
    <Test/>
    <Test fruit={fruits} name={name}/>


    
    <Counter/>
   
   
<Form/>
<Spreading/>

<Crud/>


<UseState/>
  
</>  
  )
}

export default App
