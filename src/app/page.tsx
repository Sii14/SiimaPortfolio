

export default function HomePage() {
  return (
    <div className="home-container">
      <h1 className="home-title">Code With;</h1>
      <p className="home-subtitle">SIIMA</p>
      <p className="home-name">SAMSON.</p>
      <p className="home-role">Fullstack Developer!</p>

      {/* Cards */}
      <div className="cards-container">
        <div className="card-style">
          <h3>Resume</h3>
        </div>
        <div className="card-style">
          <h3>Projects</h3>
        </div>
      </div>
    </div>
  );
}
