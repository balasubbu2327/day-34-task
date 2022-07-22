import React from "react";

export function Dashboard() {
    return (
        <div >
            <div className="d-sm-flex align-items-center bg-light justify-content-between db-head mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>

            <div className="row dash">

                <div className="col-xl-3 col-md-6 mb-4">
                    <div class="card text-white bg-primary mb-3" style={{ maxWidth: "18rem" }}>
                        <div class="card-header">Books</div>
                        <div class="card-body">
                            <h5 class="card-title">College Books</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div />
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div class="card text-white bg-secondary mb-3" style={{ maxWidth: "18rem" }}>
                        <div class="card-header">Books</div>
                        <div class="card-body">
                            <h5 class="card-title">School Books</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div />
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div class="card text-white bg-success mb-3" style={{ maxWidth: "18rem" }}>
                        <div class="card-header">Books</div>
                        <div class="card-body">
                            <h5 class="card-title">Novels</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div />
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div class="card text-white bg-danger mb-3" style={{ maxWidth: "18rem" }}>
                        <div class="card-header">Books</div>
                        <div class="card-body">
                            <h5 class="card-title">Media</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div />
                    </div>
                </div>


                <div className="col-xl-3 col-md-6 mb-4">
                    <div class="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                        <div class="card-header">Books</div>
                        <div class="card-body">
                            <h5 class="card-title">Comics</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div />
                    </div>
                </div>


                <div className="col-xl-3 col-md-6 mb-4">
                    <div class="card text-dark bg-success mb-3" style={{ maxWidth: "18rem" }}>
                        <div class="card-header">Books</div>
                        <div class="card-body">
                            <h5 class="card-title">Languages</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div />
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div class="card text-white bg-info mb-3" style={{ maxWidth: "18rem" }}>
                        <div class="card-header">Books</div>
                        <div class="card-body">
                            <h5 class="card-title">Religious</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div />
                    </div>
                </div>


                <div className="col-xl-3 col-md-6 mb-4">
                    <div class="card text-dark bg-Warning mb-3" style={{ maxWidth: "18rem" }}>
                        <div class="card-header">Books</div>
                        <div class="card-body">
                            <h5 class="card-title">Story</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div />
                    </div>
                </div>

            </div>

        </div>

    )
}