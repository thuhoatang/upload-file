import "./App.css";import axios from 'axios';
import ImgDetail from "./components/ImgDetail";
import InputUploadFile from "./components/InputUploadFile";
import ListImage from "./components/ListImage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function App() {
  const [urls, setUrls] = useState([]);
  const [imgSelected,setImgSelected] = useState(null)
  let { id } = useParams();

  useEffect(()=>{
    getImages()
  },[])
  const getImages = ()=>{
    axios.get('http://localhost:3001/images/'+id)
    .then(function (response) {
      setUrls(response.data.urlImage)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })


  }

  const uploadFile = (event)=> {
    let file = event.target.files[0];
    console.log(file);
    
    if (file) {
      
      // data.append('file', file);
      axios.post('http://localhost:3001/images', {
        file: file,
        id: id
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(function (response) {
        setUrls([...urls, response.data.url])
        console.log(response);
      })
    }
}
  return (
    <div className="App">
      <InputUploadFile onChangeSelected={uploadFile} />
      <div className="content-top">
        <ImgDetail imgSelected={imgSelected} />
        <ListImage listUrl={urls} setImgSelected = {setImgSelected}/>
      </div>

    </div>
  );
}

export default App;
