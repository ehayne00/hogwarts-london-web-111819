import React from 'react'

class Hog extends React.Component {
    
    state = {
        showDetails: false,
        showPigTile: true
    }

    toggleDetails = () => {
      this.setState({showDetails: !this.state.showDetails})
    }

    hidePigTile = () => {
        this.setState({showPigTile: !this.state.showPigTile})
    }

    render() {
      const {hog} = this.props
      const {showDetails} = this.state
      const {toggleDetails} = this
      const {hidePigTile} = this
      const {showPigTile} = this.state

      const filePath = hog.name.toLowerCase().replace(/ /g, '_')
      const imageSrc = require(`../hog-imgs/${filePath}.jpg`)
      
      // put the return in front of the ternary expression.

      return showPigTile
    ? (
     <li className='pigTile pigTile:hover'>
        <button onClick={hidePigTile}>x</button>
        <h3>{hog.name}</h3>
        <img src={imageSrc} />
        <br/>
        {
            showDetails ? <div>
                <h4>Specialty: {hog.specialty}</h4>
                <h4>{hog.greased ? 'Greased: greased' : 'Greased: not greased'}</h4>
                <h4>Weight: {hog.weight}</h4>
            </div>
            : null
        }
        <button onClick={toggleDetails}>
            {showDetails ? 'Hide' : 'Show'} More</button>
    </li>
    
  )
    
  : null

 }
}

export default Hog;