import "./Sevices.scss";
export const Sevices = () => {
    return (
        <>
            <div className="card">
                <div className="content">
                    <div className="back">
                        <div className="back-content">

                            <strong>Hover Me</strong>
                        </div>
                    </div>
                    <div className="front">

                        <div className="img">
                            <div className="circle">
                            </div>
                            <div className="circle" id="right">
                            </div>
                            <div className="circle" id="bottom">
                            </div>
                        </div>

                        <div className="front-content">
                            <small className="badge">Pasta</small>
                            <div className="description">
                                <div className="title">
                                    <p className="title">
                                        <strong>Spaguetti Bolognese</strong>
                                    </p>

                                </div>
                                <p className="card-footer">
                                    30 Mins &nbsp; | &nbsp; 1 Serving
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}