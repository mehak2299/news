import React, { Component } from 'react'

export default class NewsItem extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      desCharacters:this.props.description
    }
  }
  showHundredCharacters=()=>{
    let desc=''
    if(this.props.description.length>100)
    {
      const one=this.props.description.substring(0,100)
      desc=one+'...'
    }
    else{
      desc=this.props.description
    }
    
    this.setState({
      desCharacters:desc
    })
  }
  componentDidMount()
  {
    this.showHundredCharacters()
  }
  render() {
    return (
   
        <div className="card card1" key={this.props.index}>
          <img src={this.props.image_url} className="card-img-top image1" alt="Loading ..."/>
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.state.desCharacters}</p>
              <a href={this.props.linkData} className="btn btn-small btn-primary">Read More ...</a>
            </div>
        </div>
      
    )
  }
}
