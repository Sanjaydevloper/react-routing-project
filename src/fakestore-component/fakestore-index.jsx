

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function FakestoreIndex(){

    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    function handlePwdChange(e) {
        setPassword(e.target.value);
    }

    function handleLoginClick(){
        if(password==="admin"){
            navigate("/categories");
        } else {
            navigate("/invalid");
        }
    }

    return (
        <div className="container-fluid">
           
            <section>
                <main className="text-center">
                    <h1>Fakestore - Online Shopping</h1>
                   
                </main>
                <div>
                <dl>
                        <dt>User Id</dt>
                        <dd><input type="text" /></dd>
                        <dt>Password</dt>
                        <dd><input type="password" onChange={handlePwdChange} /></dd>
                    </dl>
                 <button className="btn btn-primary" onClick={handleLoginClick}>Login</button>
                </div>
            </section>
        </div>
    )
}