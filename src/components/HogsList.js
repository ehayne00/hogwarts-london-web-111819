import React from 'react'
import Hog from './Hog'

const HogsList = ({ hogs }) => <ul className='indexWrapper'> 
    {hogs.map(hog => <Hog hog={hog} />)}</ul>


export default HogsList;