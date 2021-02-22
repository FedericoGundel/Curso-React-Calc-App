import React from 'react'
import './App.css'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'

const App = () => {
    return (
       <main className="react-calculator">
           <Result value={"10"}/>
           <Numbers onClickNumber={number=>
                    console.log("number: ",number)
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