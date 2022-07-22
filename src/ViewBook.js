import axios from "axios";

import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function ViewBook() {

    let params = useParams();
    let [data, setdata] = useState({})
    useEffect(() => {
        getdata();
    }, []);
    let getdata = async () => {
        let userdata = await axios.get(`https://61eeed07d593d20017dbb208.mockapi.io/form/books/${params.id}`);
        let data = userdata.data;
        console.log(data);
        setdata(data);

    }
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Book Detail {params.id}</h1></div>
            <p>Title : {data.title}</p>
            <p>Author : {data.author}</p>
            <p>Category : {data.category}</p>
            <p>Count : {data.count}</p>
        </>

    )
}

export default ViewBook