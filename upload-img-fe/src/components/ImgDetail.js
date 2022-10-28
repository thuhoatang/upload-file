import './ImgDetail.css';
import React from 'react'

const ImgDetail = (props) => {
  // console.log(imgSelected);
  return (
    <div className="">
        <img src={"http://localhost:3001/"+props.imgSelected}/>
    </div>
  )
}

export default ImgDetail