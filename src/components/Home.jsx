import React from "react";
import files from "../images/illustration-intro.png";
import bg from "../images/bg-curvy-mobile.svg";

function Home() {
  return (
    <main className="home" id="home">
      <section className="home-container">
        <img className="file" src={files} alt="files" />
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family and co-workers.
        </p>
        <button>Get Started</button>
        <img className="mt" src={bg} alt="mountain" />
      </section>
    </main>
  );
}

export default Home;
