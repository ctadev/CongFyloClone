import React from "react";
import person1 from "../images/profile-1.jpg";
import person2 from "../images/profile-2.jpg";
import person3 from "../images/profile-3.jpg";
import qoute from "../images/bg-quotes.png";

function Review() {
  return (
    <main className="review-container">
      <section>
        <img className="qoute" alt="quote" src={qoute}></img>
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <section>
          <div className="img">
            <img src={person1} alt="person"></img>
          </div>
          <div className="info">
            <h1>Satish Patel</h1>
            <p>Founder & CEO Huddle</p>
          </div>
        </section>
      </section>

      <section>
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <section>
          <div className="img">
            <img src={person2} alt="person"></img>
          </div>
          <div className="info">
            <h1>Bruce McKenzie</h1>
            <p>Founder & CEO Huddle</p>
          </div>
        </section>
      </section>

      <section>
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <section className="last-review">
          <div className="img">
            <img src={person3} alt="person"></img>
          </div>
          <div className="info">
            <h1>Iva Boyd</h1>
            <p>Founder & CEO Huddle</p>
          </div>
        </section>
      </section>

      <section className="early">
        <h1>Get early access today</h1>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div>
          <input placeholder="Enter Email..." type="text"></input>
          <button>Get Started For Free</button>
        </div>
      </section>
    </main>
  );
}

export default Review;
