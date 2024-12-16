import React, { useEffect,useState } from 'react';
import Filter from '../components/Filter';
import axios from 'axios';
import { Cards } from "../components/Card";
import { useSearchParams } from 'react-router-dom';

export const Product = () => {

  const [books,setBooks]=useState([]);

  const [searchParams] = useSearchParams();


  useEffect(()=>{

    const params = {
      q: searchParams.get("search"),
      _sort: "title",
      _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
    };

    // Bileşen ekrana geldiğinde api'a istek at
    axios
      .get("http://localhost:3000/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => {
        navigate("/notfound");
      });
  }, [searchParams]);



 



  return (
  <div className="container m-5">
     <h3>10 Kitap bulundu</h3>
     <Filter/>

     <div className='cards-container'>

      {books.map((book)=> <Cards key={books.id} book= {book} />)}

     </div>
  </div>
  );
}

export default Product;