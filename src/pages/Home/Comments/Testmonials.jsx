import"./Testmonials.css"
import C1 from "/src/assets/images/ss.jpg"
import C2 from "/src/assets/images/dd.jpg"
import C3 from "/src/assets/images/aa.jpg"
export default function Comments() {
  return (
    <section id="testimonials" className="py-5 text-white">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" data-key="testimonials-heading">
          What Our Valued Customers Say
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div
              id="testimonialCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {/* Slide 1 */}
                <div className="carousel-item active">
                  <div className="card bg-dark text-white h-100 shadow-sm p-4 text-center rounded-4">
                    <img src={C1} alt="Customer 1" className="rounded-circle mx-auto mb-3" width="80" height="80" />
                    <p className="fst-italic" data-key="testimonial-1-text">
                      "Electrycle made recycling my old electronics incredibly
                      easy. Their pickup service was a lifesaver, and I feel
                      great knowing my devices are handled responsibly!"
                    </p>
                    <h6 className="mt-3 fw-bold" data-key="testimonial-1-name">
                      Ben M.
                    </h6>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item">
                  <div className="card bg-dark text-white h-100 shadow-sm p-4 text-center rounded-4">
                    <img src={C2} alt="Customer 2" className="rounded-circle mx-auto mb-3" width="80" height="80" />
                    <p className="fst-italic" data-key="testimonial-2-text">
                      "Professional, efficient, and truly committed to
                      sustainability. Electrycle is my go-to for e-waste
                      disposal. Highly recommend their secure data wiping
                      service."
                    </p>
                    <h6 className="mt-3 fw-bold" data-key="testimonial-2-name">
                      Sophia K.
                    </h6>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="carousel-item">
                  <div className="card bg-dark text-white h-100 shadow-sm p-4 text-center rounded-4">
                    <img src={C3} alt="Customer 3" className="rounded-circle mx-auto mb-3" width="80" height="80" />
                    <p className="fst-italic" data-key="testimonial-3-text">
                      "A fantastic initiative! It’s so important to properly
                      recycle electronics, and Electrycle makes it simple and
                      worry-free. Their impact reports are very inspiring."
                    </p>
                    <h6 className="mt-3 fw-bold" data-key="testimonial-3-name">
                      David T.
                    </h6>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
                style={{ paddingRight: "45px" }}
                data-key="carousel-prev-btn"
              >
                <span className="visually-hidden">Previous</span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
                style={{ paddingLeft: "30px" }}
                data-key="carousel-next-btn"
              >
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
