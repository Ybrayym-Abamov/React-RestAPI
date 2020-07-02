import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {Shoes:[]}
  }
  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/shoe/')
    .then(res => res.json())
    .then(res => this.setState({Shoes: res}))
  }
  render() {return (
        <div>
          <ul>{this.state.Shoes.map(s =>{
            return(
              <div>
                <ul>
                Shoe : {s.name}
                </ul>
                <ul>
                  Size : {s.size}
                </ul>
                <ul>
                  Manufacturer : {s.manufacturer}
                </ul>
                <ul>
                  Color : {s.color}
                </ul>
                <ul>
                  Material : {s.material}
                </ul>
                <ul>
                  Shoe Type : {s.shoe_type}
                </ul>
                <ul>
                  Fasten Type : {s.fasten_type}
                </ul> <br></br>
            </div>
          )
          })}</ul>
        </div>
      )
  }
}

export default App;
