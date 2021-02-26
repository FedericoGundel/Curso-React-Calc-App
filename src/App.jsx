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
                    modificarResultado("")
                }
                onDelete={() => {
                    if(resultado.length>0){
                        const newResultado = resultado.substring(0,resultado.length-1)
                        modificarResultado(newResultado)
                    }
                    
                }
                    
                }
            />            
           <MathOperations onClickOperation={operation => 
                    modificarResultado(`${resultado}${operation}`)
                }
                onClickEqual={equal => 
                    modificarResultado(`${resultado}${equal}`)
                }
            />
       </main>
    )
}
export default App