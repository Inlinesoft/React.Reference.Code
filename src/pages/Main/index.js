import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MainController  from '../../components/mainController'
import SummaryController  from '../../components/SummaryController'
import Attrib1Controller  from '../../components/Attrib1Controller'


export default function Main() {
    
    return (
        <div>
        <MainController />
        <br />
        <Attrib1Controller />
        <br />
        <SummaryController />
        
        </div>
    )
}