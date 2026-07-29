import './Community.css';
import communityImg from '/src/assets/images/community.jpeg';
function Community() {
  const handleJoinClick = () => {
    alert("Welcome to our community programs! Check out our Services page for upcoming activities.");
  };
  return (
    <section className="community">
      <div className="community-text">
        <h2>Empowering Communities Through Outreach</h2>
        <p className="desc">
          Electrycle believes in the power of education and engagement. Our community initiatives range from local collection drives to educational workshops, fostering a greater understanding of e-waste recycling and its critical role in environmental protection.
        </p>
        <a
          href="#"
          className="btn"
          id="join"
          onClick={handleJoinClick}
        >
          Join Our Community Programs
        </a>
      </div>
      <img src={communityImg} alt="Community" />
    </section>
  );
}
export default Community;
