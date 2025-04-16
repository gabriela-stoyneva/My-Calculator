import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <div class="container">
        <h1>Your Calculator</h1>
   
            <form action="">
                <table>
                    <tr>
                        <td title="Display result" colspan="4" class="display-container">
                            <input /> class="display" type="text">
                        </td>       
                    </tr>
                    <tr>
                        <td title="Clear One"><input  class="removeBtn" type="button" value="C"/></td>
                        <td title="Delete All"><input  class="removeBtn" type="button" value="DEL"/></td> 
                        <td title="Percentage"><input  class="operationBtn" type="button" value="%"/></td>   
                        <td title="Divide"><input  class="operationBtn" type="button" value="/"/></td>  
                    </tr>
                    <tr>
                        <td title="SEVEN"><input class="numberBtn" type="button" value="7"/></td>
                        <td title="EIGHT"><input class="numberBtn" type="button" value="8"/></td>
                        <td title="NINE"><input class="numberBtn" type="button" value="9"/></td>
                        <td title="Multiply"><input class="operationBtn" type="button" value="*"/></td>
                        
                    </tr>
                    <tr>
                        <td title="FOUR"><input class="numberBtn" type="button" value="4"/></td>
                        <td title="FIVE"><input class="numberBtn" type="button" value="5"/></td>
                        <td title="SIX"><input class="numberBtn" type="button" value="6"/></td>
                        <td title="Subtract"><input class="operationBtn" type="button" value="-"></td>
                    <tr>
                        <td title="ONE"><input class="numberBtn" type="button" value="1"/></td>
                        <td title="TWO"><input class="numberBtn" type="button" value="2"/></td>
                        <td title="THREE"><input class="numberBtn" type="button" value="3"/></td> 
                        <td title="Add"><input class="operationBtn" type="button" value="+"/></td>
                    </tr>
                    <tr>
                        <td title="ZERO"><input class="numberBtn" type="button" value="0"/></td>
                        <td title="Point"><input class="numberBtn" type="button" value="."/></td>
                        <td title="Equal" colspan="2"><input class="operationBtn" type="button" value="="/></td>
                    </tr>
                </table>
            </form>
          
    </div>
       
      </div>
      
    </>
  )
}

export default App
