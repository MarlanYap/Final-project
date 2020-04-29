import React, {Component} from 'react';
import { fireEvent } from '@testing-library/react';

class App extends Component{
  constructor(){
    super()
    this.state={
      confirmed:[],recovered:[],deaths:[],indPos:[],indDeat:[],indSembuh:[]
    }
  }

  async componentDidMount(){
    const res = await fetch("https://covid19.mathdro.id/api/countries/indonesia")
    const dataInd = await res.json()
    this.setState({indPos: dataInd.confirmed, indSembuh: dataInd.recovered, indDeat: dataInd.deaths});
    const resp = await fetch("https://covid19.mathdro.id/api")
    const data = await resp.json()
    this.setState({ confirmed: data.confirmed, recovered: data.recovered, deaths: data.deaths})
  }

  render(){
    return (
      <div>
        <p/>Data covid-19 global<br/>
        Positif : {this.state.confirmed.value}<br/>
        Meninggal : {this.state.deaths.value}<br/>
        Sembuh : {this.state.recovered.value}<br/>
        <p/>Indonesia<br/>
        Positif : {this.state.indPos.value}<br/>
        Meninggal : {this.state.indDeat.value}<br/>
        Sembuh : {this.state.indSembuh.value}<br/>
      </div>
    );
  }
}

export default App;
