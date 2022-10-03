import React from 'react'
import './ImgDetail.css'

const  ItemList = ({item,setImgSelected}) => {
  const onClickImg = ()=>{
    console.log("qwe");
    setImgSelected(item)
  }

  return (
    <>
        <div  className="item">
                <div className="right floated content">
                <div className="ui button">Delete</div>
                </div>
                <img onClick={()=>{onClickImg()}} className="ui image" src={`http://localhost:3001/${item}`}/>             
        </div>
    </>
  )
}

export default ItemList