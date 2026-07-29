import './Cards.css';
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
function Cards() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setReady(true), 50);
  }, []);

  if (!ready) return null;
  const handleSupportClick = () => {
    alert(
      'Thank you for your interest! Visit our About Us page to learn more about our mission.'
    );
  };
  const co2Data = [
    { month: 'Jan', reduction: 300 },
    { month: 'Feb', reduction: 450 },
    { month: 'Mar', reduction: 600 },
    { month: 'Apr', reduction: 720 },
    { month: 'May', reduction: 850 },
  ];
  const resourceData = [
    { name: 'Metals', value: 40 },
    { name: 'Plastics', value: 25 },
    { name: 'Glass', value: 15 },
    { name: 'Others', value: 20 },
  ];
  const COLORS = ['#1da1f2', '#fbc02d', '#4caf50', '#90a4ae'];
  return (
    <>
      <section className="head">
        <h1>Our Environmental Impact</h1>
        <p>
          Driving a circular economy through responsible electronics recycling,
          positively shaping the future of our planet.
        </p>
        <a
          href="#"
          className="btn"
          id="support"
          onClick={handleSupportClick}
        >
          Learn More About Our Mission
        </a>
      </section>
      <section className="initiatives">
        <h2>Key Initiatives Driving Change</h2>
        <div className="cards">
          <div className="card">
            <h3>Zero-Waste Initiative</h3>
            <p>
              Implementing advanced sorting and processing techniques to maximize
              material recovery and minimize landfill waste.
            </p>
          </div>
          <div className="card">
            <h3>Eco-Friendly Processing Facilities</h3>
            <p>
              Upgrading all our facilities with energy-efficient technologies and
              sustainable operational practices.
            </p>
          </div>
          <div className="card">
            <h3>Reforestation Program</h3>
            <p>
              Partnering with local organizations to plant trees, offsetting our
              operational carbon footprint.
            </p>
          </div>
        </div>
      </section>
      <section className="progress">
        <h2>Our Progress & Achievements</h2>
        <div className="stats">     
          <div className="stat-box">
            <h3>Tons of E-waste Recycled</h3>
            <p>
              <span className="num">78,500</span>
              <span className="wit">Tons</span>
            </p>
            <div className="progress-bar">
              <div className="progress-bar-step" style={{ width: '78.5%' }}></div>
            </div>
            <p className="desc-num">Target: 100,000 Tons</p>
          </div>
          <div className="stat-box">
            <h3>Carbon Footprint Reduction</h3>
            <p className="desc">Monthly CO₂ reduction from recycling efforts.</p>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={co2Data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="reduction" fill="#1da1f2" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="stat-box">
            <h3>Resources Recovered</h3>
            <p className="desc">Breakdown of materials recovered from e-waste.</p>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={resourceData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={4}
                  label
                >
                  {resourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cards;
