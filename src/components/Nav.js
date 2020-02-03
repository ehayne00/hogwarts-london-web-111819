import piggy from '../porco.png'
import React from 'react'

const Nav = ({showOnlyGreased, toggleShowGreasedOnly, updateSortedBy }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<br/>
			<label>Show greased only:</label>
			<input type='checkbox' checked={showOnlyGreased} onChange={toggleShowGreasedOnly}/>
			<br/>
			<label>Sort by:</label>
			<select onChange={updateSortedBy} > 
				<option value="all">All</option>
				<option value="weight">Weight</option>
				<option value="name">Name</option>
			</select>
		</div>// need to get select working
	)
}

export default Nav
