
import React from 'react'
import './InputUploadFile.css'

const InputUploadFile = ({onChangeSelected}) => {
    

  return (
    <div className="file-upload">
        <input onChange={(e) => onChangeSelected(e)} type="file" id="myFile" name="myFile" accept="image/png, image/jpeg"/>
    </div>
  )
}

export default InputUploadFile