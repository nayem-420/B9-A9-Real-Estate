const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/y4Gm9TQ/Real.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-cyan-100">Hello there</h1>
          <p className="mb-5 text-yellow-300">
          Unlike general real estate websites, we focus exclusively on [specific niche, e.g., single-family homes, student housing, senior living, etc.]. This specialization allows us to provide more targeted and detailed information for our users.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
