import "./About.css"
import Circ from "/src/assets/images/circ.jpg"
import Un from "/src//assets/images/Untitled.jpg"
import Cables from "/src/assets/images/cables.jpg"
export default function About() {
  return (
    <section id="about" class="py-5" animate-on-scroll>
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold" data-key="about-heading">Our Commitment to a Greener Future</h2> 
      <p class="text-secondary" data-key="about-text">We aim to reduce e-waste and promote sustainable recycling practices through our services.</p> 
    </div>

    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0 rounded-4">
          <div class="card-body text-center p-4">
            <img src={Circ} alt="Recycling icon"  class="mb-3" width="60" />
            <h5 class="fw-bold" data-key="about-card-1-heading">Eco-Friendly Recycling</h5> 
            <p class="text-secondary mb-0 " data-key="about-card-1-text">Responsible disposal and recovery of valuable electronic materials.</p> 
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0 rounded-4">
          <div class="card-body text-center p-4">
            <img src={Un} alt="Impact icon"  class="mb-3" width="60" />
            <h5 class="fw-bold" data-key="about-card-2-heading">Positive Impact</h5> 
            <p class="text-secondary mb-0" data-key="about-card-2-text">Protecting our environment while creating a healthier community.</p> 
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0 rounded-4">
          <div class="card-body text-center p-4">
            <img src={Cables} alt="innovation icon" class="mb-3" width="60"/>
            <h5 class="fw-bold" data-key="about-card-3-heading">Innovation</h5> 
            <p class="text-secondary mb-0" data-key="about-card-3-text">Using advanced methods to maximize material recovery and reuse.</p> 
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}