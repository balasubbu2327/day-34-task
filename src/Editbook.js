import axios from "axios";

import { useFormik } from "formik";

import React, { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";


export function Editbook() {
    let params = useParams();
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            title: "",
            author: "",
            category: "",
            count: ""

        },
        validate: (values) => {
            let errors = {};
            if (!values.title) {
                errors.title = "Please enter the title";
            }
            else if (!values.author) {
                errors.author = "Please enter the author";

            } else if (!values.category) {
                errors.category = "Please enter the category"
            } else if (!values.count) {
                errors.count = "Please enter the count"
            }
            return errors

        },

        onSubmit: async (values) => {

            try {
                await axios.put(`https://61eeed07d593d20017dbb208.mockapi.io/form/books/${params.id}`, values)

                alert("data updated");
                navigate("/books");
            } catch (error) {
                console.log(error)
            }
        }

    })
    const getdata = async () => {
        let bookdata = await axios.get(`https://61eeed07d593d20017dbb208.mockapi.io/form/books/${params.id}`)
        formik.setValues(bookdata.data)
    }
    useEffect(() => {
        getdata();
    }, [])



    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Edit Book</h1></div>
            <div className="container">
                <form onSubmit={formik.handleSubmit} >
                    <div className="row">
                        <div className="col-lg-6" >
                            <label>Title</label>
                            <input type="text" name="title" value={formik.values.title} onChange={formik.handleChange} className="form-control" />
                            {
                                formik.errors.title ? <span style={{ color: "red" }}>{formik.errors.title}</span> : null
                            }
                        </div>
                        <div className="col-lg-6">
                            <label>Author</label>
                            <input type="text" name="author" value={formik.values.author} onChange={formik.handleChange} className="form-control" />
                            {
                                formik.errors.author ? <span style={{ color: "red" }}>{formik.errors.author}</span> : null
                            }
                        </div>
                        <div className="col-lg-6">
                            <label>Category</label>
                            <input type="text" name="category" value={formik.values.category} onChange={formik.handleChange} className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label>Count</label>
                            <input type="number" name="count" value={formik.values.count} onChange={formik.handleChange} className="form-control" />
                        </div>

                        <div>

                            <input type="submit" className="btn btn-primary mt-3" />
                        </div>

                    </div>
                </form>
            </div>



        </>
    )
}