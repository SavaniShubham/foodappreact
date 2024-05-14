import { useRouteError } from "react-router-dom";

const Error = ()=>
    {
        const err=useRouteError();
        console.log(err);
        console.log(typeof err);
        return (
        <div>
        <h1>OPPS!</h1>
        <h2>there is some error</h2>
        <h3>  {err.status} :{err.statusText}</h3>
        </div>

    )
    }

export default Error ;