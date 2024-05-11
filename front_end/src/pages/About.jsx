import SectionStart from "@Components/SectionStart";


export default function About() {
    return (
        <>
            <SectionStart title="About Us" activeBreadcrumb="About Us"/>
            <section className="overflow-hidden">
                <div className="container">
                    <div className="row g-5">
                    <div className="col-xl-5 offset-xl-1">
                        <div className="row g-3">
                        <div className="col-md-6">
                            <img
                            src="assets/images/poster/6.jpg"
                            className="img-fluid rounded-3 about-image"
                            alt=""
                            />
                        </div>
                        <div className="col-md-6">
                            <img
                            src="assets/images/poster/7.jpg"
                            className="img-fluid rounded-3 about-image"
                            alt=""
                            />
                        </div>
                        <div className="col-12 ratio_40">
                            <div>
                            <img
                                src="assets/images/poster/8.jpg"
                                className="img-fluid rounded-3 team-image bg-img"
                                alt=""
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="about-details">
                        <div>
                            <h2>WHO WE ARE</h2>
                            <h3>largest Online fashion destination</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                            culpa! Asperiores labore amet nemo ullam odit atque adipisci, hic,
                            aliquid animi fugiat praesentium quidem. Perspiciatis, expedita!
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                            culpa! Asperiores labore amet nemo ullam odit atque adipisci, hic,
                            aliquid animi fugiat praesentium quidem. Perspiciatis, expedita!
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </>
    )
}

