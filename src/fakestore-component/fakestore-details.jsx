import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom"


export function FakestoreDetails(){

    const [product, setProduct] = useState({});

    const params = useParams();

    useEffect(()=>{
         axios.get(`https://fakestoreapi.com/products/${params.id}`)
         .then(res=> {
             setProduct(res.data);
         })
    },[])

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                <h3>Details </h3>
                <dl>
                    <dt>Title</dt>
                    <dd>{product.title}</dd>
                    <dt>Price</dt>
                    <dd>{product.price}</dd>
                    <dt>Preview</dt>
                    <dd>
                        <img src={product.image} width="200" height="200" />
                    </dd>
                    <dd>
                        <Link to={`ratings/${product.id}`} className="btn btn-success">Ratings & Description</Link>
                    </dd>
                </dl>
                </div>
                <div className="col">
                        <Outlet />
                </div>
            </div>
            <p>
                <Link to={`/products/${product.category}`}>Back to Products</Link>
            </p>
        </div>
    )
}
