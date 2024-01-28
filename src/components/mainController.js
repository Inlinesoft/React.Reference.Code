import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
//import { setAttrib } from '../pages/Main/mainPageSlice'
import { setAttrib1, setAttrib2, setAttrib3, setAttrib4, selectAttrib1, selectAttrib2, selectAttrib3, selectAttrib4 } from '../pages/Main/mainPageSlice'

export default function MainController() {
    const attrib1 = useSelector(selectAttrib1);
    const attrib2 = useSelector(selectAttrib2);
    const attrib3 = useSelector(selectAttrib3);
    const attrib4 = useSelector(selectAttrib4);
    
    const dispatch = useDispatch();
    
    const [attrib1Val, setattrib1Val] = useState('');
    const [attrib2Val, setattrib2Val] = useState('');
    const [attrib3Val, setattrib3Val] = useState('');
    const [attrib4Val, setattrib4Val] = useState('');
  

    return (
        <div>
            <div>
                Attrib 1 : Current Value : {attrib1} :
                <input
                    value={attrib1Val}
                    onChange={e => setattrib1Val(e.target.value)}
                    />
                &nbsp;
                <button
                    aria-label="set attrib 1"
                    onClick={() =>{ 
                        dispatch(setAttrib1(attrib1Val));
                        }
                    }
                    >
                    Set Value
                </button>
            </div>
            <br />
            <div>
                Attrib 2 : Current Value : {attrib2} : 
                <input
                    value={attrib2Val}
                    onChange={e => setattrib2Val(e.target.value)}
                    />
                &nbsp;
                <button
                    aria-label="set attrib "
                    onClick={() => dispatch(setAttrib2(attrib2Val))}
                    >
                    Set Value
                </button>
            </div>
            <br />
            <div>
                Attrib 3 : Current Value : {attrib3} : 
                <input
                    value={attrib3Val}
                    onChange={e => setattrib3Val(e.target.value)}
                    />
                &nbsp;
                <button
                    aria-label="set attrib 3"
                    onClick={() => dispatch(setAttrib3(attrib3Val))}
                    >
                    Set Value
                </button>
            </div>
            <br />
            <div>
                Attrib 4 : Current Value : {attrib4} :  
                <input
                    value={attrib4Val}
                    onChange={e => setattrib4Val(e.target.value)}
                    />
                &nbsp;
                <button
                    aria-label="set attrib 1"
                    onClick={() => dispatch(setAttrib4(attrib4Val))}
                    >
                    Set Value
                </button>
            </div>

        </div>
    )
}