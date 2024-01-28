import React from 'react'
import { useSelector } from 'react-redux'
import { selectAttrib1, selectAttrib2, selectAttrib3, selectAttrib4 } from '../pages/Main/mainPageSlice'

export default function SummaryController() {
    const attrib1 = useSelector(selectAttrib1);
    const attrib2 = useSelector(selectAttrib2);
    const attrib3 = useSelector(selectAttrib3);
    const attrib4 = useSelector(selectAttrib4);
    
    return (
        <div>
            <div>
                Attrib 1 : {attrib1}
            </div>
            <br />
            <div>
                Attrib 2 : {attrib2}
            </div>
            <br />
            <div>
                Attrib 3 : {attrib3}
            </div>
            <br />
            <div>
                Attrib 4 : {attrib4}
            </div>
            <br />
        </div>
    )
}