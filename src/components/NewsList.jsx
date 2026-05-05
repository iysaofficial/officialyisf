export default function NewsList(props) {
    return (
        <>
            <div className="news-home-card card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.img} className="news-home-img" alt="" />
                    </div>

                    <div className="col-md-8 d-flex">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title news-home-title">{props.title}</h5>
                            <p className="card-text news-home-desc">{props.desc}</p>
                            <p className="card-text"><small className="text-muted">{props.time}</small></p>
                            <a href={props.link} className="btn btn-primary btn-sm mt-auto align-self-start">VIEW</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}