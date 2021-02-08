import React from 'react'
import './App.css'
import Button from './components/Button'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'

const App = () => {
    const clickHandlerFunction = text =>{
        console.log("Button.clickHandler ",text);
    }
    return (
       <main className="react-calculator">
           <Result value={"10"}/>
           <div className="numbers">
               <Button text={"0"} clickHandler={clickHandlerFunction}/>
               <button>1</button>
               <button>2</button>
               <button>3</button>
               <button>4</button>
               <button>5</button>
               <button>6</button>
               <button>7</button>
               <button>8</button>
               <button>9</button>
           </div>
           <Functions onContentClear={clear => 
                    console.log("Delete all: ",clear)
                }
                onDelete={delet => 
                    console.log("Delete: ", delet)
                }
            />            
           <MathOperations onClickOperation={operation => 
                    console.log("operacion: ",operation)
                }
                onClickEqual={equal => 
                    console.log("Equal: ", equal)
                }
            />
       </main>
    )
}
export default App