import React from 'react'
import './Title.css'

const Title = ({subtitle,title}) =>{
    return (
        <div id = "program" className ='title container'>
            <h3>{subtitle}
            </h3>
            <h2>{title}</h2>
        </div>
    )
}

export default Title