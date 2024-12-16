import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import Bilgi from "../components/info";


const Detail = () => {

    const {id} =useParams();

     const   [books,setBook]= useState(null);

    useEffect(()=>{
        axios.get(`http://localhost:3000/books/${id}`)
        .then((res)=>setBook(res.data)
        )
    },[]);

  
    
  return (
  <div className="row my-5 p-5 mx-auto container">

        <div className="col-md-6 d-flex justify-content-center align-items-center ">

        <img src={books?.image} className="rounded img-fluid shadow" alt="" />

        </div>
        

        <div className="col-md-6 d-flex  flex-column justify-content-center align-items-center my-4">
            <h1> {books?.title} </h1>

                <div className="my-4">
                   <Bilgi title="yazar" value={books?.author} />
                   <Bilgi title="yıl"value={books?.year}  />
                   <Bilgi title="sayfa sayısı" value={books?.page} />
                   <Bilgi title="ücret" value={books?.price} />
                   <Bilgi title="açıklama"value={books?.description}  />
                </div>

        </div>

  </div>
  )
}

export default Detail;