import React from 'react'
import Information from './Information'
import classes from "./InformationList.module.css"
function InformationList({InformationProps}) {
    return (
        <ul className={classes.flexContainerUl}>
            {InformationProps.map((Info) => <Information key = {Info.id} InfoProps = {Info}/>)}    
        </ul>
    )
}

export default InformationList
