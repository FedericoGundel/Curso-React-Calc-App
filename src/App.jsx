import React,{ useState } from 'react'
import './App.css'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'

const App = () => {
    const arrayState= useState("");
    const resultado = arrayState[0]
    const modificarResultado = arrayState[1]
    
    return (
       <main className="react-calculator">
           <Result value={resultado}/>
           <Numbers onClickNumber={number=>
                    modificarResultado(number)
                }
            />
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