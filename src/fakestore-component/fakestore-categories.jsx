import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export function FakestoreCategories()
{
    const [categories, setCategories] = useState([]);

    useEffect(()=>{

        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=> {
            setCategories(response.data);
        })

    },[])

    return(
        <div className="mt-4">
            <ol className="mt-4">
                {
                    categories.map(category=> <li key={category}> <Link to={`/products/${category}`}>{category.toUpperCase()}</Link> </li>)
                }
            </ol>
        </div>
    )
}