export default function SectionStart({ title, activeBreadcrumb }) {
    return (
        <>
            <section
                className="breadcrumb-section section-b-space"
                style={{ paddingTop: 20, paddingBottom: 20 }}
            >
                <ul className="circles">
                    {[...Array(10)].map((_, index) => (
                        <li key={index} />
                    ))}
                </ul>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>{title}</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.htm">
                                            <i className="fas fa-home" style={{ color: '#e87316' }} />
                                        </a>
                                    </li>
                                    <li className={`breadcrumb-item ${activeBreadcrumb ? 'active' : ''}`} aria-current="page">
                                        {title}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            

        </>
    )
}
