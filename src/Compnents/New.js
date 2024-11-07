import React, { Component } from 'react'
import NewsItem from './NewsItem'
import myData from '../Data/data1.json'

export default class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: myData
    }
  }
  render() {
    console.log("DATa", myData)
    return (
 

      <div className='newItemRow'>
        {this.state.data.results.map((item,index)=>{
         return(
           
            <div className='newItemColumn' key={index}>
            <NewsItem  title={item.title} 
            linkData={item.link} description={item.description}
            image_url={item.image_url}/>
            </div>
         )
            
        })}
     
        </div>
      
        
      



     

    )
  }
}

