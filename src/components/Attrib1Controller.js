import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setAttrib1, selectAttrib1 } from '../pages/Main/mainPageSlice'

export default function Attrib1Controller() {
    const attrib = useSelector(selectAttrib1);
    
    const dispatch = useDispatch();
    
    const [attribVal, setAttribVal] = useState(attrib);
    
    return (
        <div>
            <div>
                Attrib 1 : {attrib} :
                <input
                    value={attribVal}
                    onChange={e => setAttribVal(e.target.value)}
                    />
                &nbsp;
                <button
                    aria-label="set attrib 1"
                    onClick={() =>{ 
                        dispatch(setAttrib1(attribVal));
                        }
                    }
                    >
                    Set Value
                </button>
            </div>
        </div>
    )
}