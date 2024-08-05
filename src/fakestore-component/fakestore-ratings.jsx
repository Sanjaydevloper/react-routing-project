import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export function FakestoreRatings(){

    const [product, setProduct] = useState({id:0, title:'', price:0, description:'', category:'', image:'', rating:{rate:0, count:0}});

    const params = useParams();

    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=> {
            setProduct(res.data);
        })

    },[])

    return(
        <div>
            <h3>Ratings & Description {params.id} </h3>
            <span className="badge bg-success rounded p-2">
                 {product.rating.rate} <span className="bi bi-star-fill text-white"></span>
            </span>
            <div className="mt-3">
                <h4>Description</h4>
                <textarea rows="4" cols="40" value={product.description}></textarea>
            </div>
        </div>
    )
}