import React,{ useState } from 'react'
import './App.css'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'

const App = () => {
    const [resultado, modificarResultado]= useState("")
    return (
       <main className="react-calculator">
           <Result value={resultado}/>
           <Numbers onClickNumber={number=>
                    modificarResultado(`${resultado}${number}`)
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