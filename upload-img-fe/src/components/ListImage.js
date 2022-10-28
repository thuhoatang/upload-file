import './ImgDetail.css'
import React from 'react'
import ItemList from './ItemList'

function ListImage({listUrl,setImgSelected}) {
    const renderListImg = listUrl.map((item, index) => {
        return (<ItemList item={item} key={index} setImgSelected={setImgSelected}/>)
    })
  return (
    <>
        <div className="ui middle aligned divided list">
        {renderListImg}
{/*             
            <div className="item">
                <div className="right floated content">
                <div className="ui button">Delete</div>
                </div>
                <img className="ui image" src="https://images.unsplash.com/photo-1662581871625-7dbd3ac1ca18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"/>             
            </div>

            <div className="item">
                <div className="right floated content">
                <div className="ui button">Delete</div>
                </div>
                <img className="ui image" src="https://images.unsplash.com/photo-1662581871625-7dbd3ac1ca18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"/>             
            </div>

            <div className="item">
                <div className="right floated content">
                <div className="ui button">Delete</div>
                </div>
                <img className="ui image" src="https://images.unsplash.com/photo-1662581871625-7dbd3ac1ca18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"/>             
            </div> */}
            
        </div>
    </>
  )
}

export default ListImage