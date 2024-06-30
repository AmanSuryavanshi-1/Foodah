import React from "react";
import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
    <div>
        <h1>OOPS!!!</h1>
        <h2> Something went Wrong</h2>
        <h3>Customized error component</h3>
        <h4>{err.status}: {err.statusText}</h4>
    </div>
    );
};

export default Error;
