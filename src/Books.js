import axios from 'axios';

import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";

export function Books() {
    const [booksData, setbooksData] = useState([]);
    useEffect(() => { getdata() }, []);


    const getdata = async () => {
        try {
            let bdata = await axios.get("https://61eeed07d593d20017dbb208.mockapi.io/form/books");

            setbooksData(bdata.data)

        } catch (error) {
            console.log(error)
        }
    }

    let handleDelete = async (id) => {
        /*eslint no-restricted-globals: ["error","event"]*/
        let res = confirm("Are you want to delete?")

        if (res) {
            try {
                let ddata = await axios.delete(`https://61eeed07d593d20017dbb208.mockapi.io/form/books/${id}`)

                alert("data deleted");
                getdata();

            } catch (error) {
                console.log(error)
            }

        }
    }
    return (
        <>
            <div className="d-sm-flex align-items-center bg-light justify-content-between db-head mb-4">
                <h1 className="h3 mb-0 text-gray-800">Book list</h1>
                <Link to="/addbook" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Add New Book</Link>
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Category</th>
                                    <th>Count</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Category</th>
                                    <th>Count</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    booksData.map((item) => {

                                        return <tr>
                                            <td>{item.title}</td>
                                            <td>{item.author}</td>
                                            <td>{item.category}</td>
                                            <td>{item.count}</td>

                                            <td>
                                                <Link to={`/viewbook/${item.id}`} className="btn btn-primary mr-1">View</Link>
                                                <Link to={`/editbook/${item.id}`} className="btn btn-primary mr-1">Edit</Link>
                                                <button onClick={() => handleDelete(item.id)} className="btn btn-primary ">Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}