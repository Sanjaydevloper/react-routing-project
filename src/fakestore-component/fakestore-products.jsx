import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export function FakestoreProducts(){

    const [products, setProducts] = useState([]);

    const params = useParams();

    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data);
        })

    },[]);

    return(
        <div className="mt-4 container">
            <h3> You are Viewing {params.category} </h3>
             <div className="d-flex flex-wrap">
             {
                products.map(product=>
                    <div className="card p-2 m-2">
                        <img  width="100" height="100" src={product.image} className="me-4" />
                        <p style={{whiteSpace:'nowrap', textOverflow:'ellipsis', width:'100px', overflow:'hidden'}}>
                            {product.title}
                        </p>
                        <div className="card-footer">
                            <Link to={`/details/${product.id}`} className="btn btn-warning w-100">see more..</Link>
                        </div>
                    </div>
                    )
             }
             </div>
            <p>
                <Link to="/categories"> Back to Categories </Link>
            </p>
        </div>
    )
}