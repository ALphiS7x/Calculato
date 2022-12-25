import { useState } from 'react'
import './Script.css'

export const Script = () => {

    const [clik, setClik] = useState('')

    const clikk = (e) => {
        setClik(clik.concat(e.target.value))
    }

    const clic = () => {
        setClik("")
    }

    const clic1 = () => {
        setClik(eval(clik).toString())
    }


    return(
        <div className='conteiner'>
            <div className='tap'>
                <input className='inp' type='text' placeholder='0' value={clik}></input>
                <div className='grid'>
                    <input type='button' value={'9'} className="button" onClick={clikk}></input>
                    <input type='button' value={'8'} className="button" onClick={clikk}></input>
                    <input type='button' value={'7'} className="button" onClick={clikk}></input>
                    <input type='button' value={'6'} className="button" onClick={clikk}></input>
                    <input type='button' value={'5'} className="button" onClick={clikk}></input>
                    <input type='button' value={'4'} className="button" onClick={clikk}></input>
                    <input type='button' value={'3'} className="button" onClick={clikk}></input>
                    <input type='button' value={'2'} className="button" onClick={clikk}></input>
                    <input type='button' value={'1'} className="button" onClick={clikk}></input>
                    <input type='button' value={'0'} className="button" onClick={clikk}></input>
                    <input type='button' value={'.'} className="button" onClick={clikk}></input>
                    <input type='button' value={'+'} className="button" onClick={clikk}></input>
                    <input type='button' value={'-'} className="button" onClick={clikk}></input>
                    <input type='button' value={'*'} className="button" onClick={clikk}></input>
                    <input type='button' value={'/'} className="button" onClick={clikk}></input>
                    <input type='button' value={'%'} className="button" onClick={clikk}></input>
                    <div className='gri'>
                        <input type='button' value={'DEL'} className="button1" onClick={clic}></input>
                        <input type='button' value={'='} className="button1" onClick={clic1}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}