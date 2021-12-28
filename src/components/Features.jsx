import React from "react";
import access from '../images/icon-access-anywhere.svg'
import security from "../images/icon-security.svg";
import collab from "../images/icon-collaboration.svg";
import any from "../images/icon-any-file.svg";

function Features() {
  return (
    <main className="features-container" id="features">
      <section className="feature1">
        <div>
          <img src={access} alt="access" />
          <h1>Access your files, anywhere</h1>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div>
          <img className="shield" src={security} alt="security" />
          <h1>Security you can trust</h1>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allowe to help secure your files.
          </p>
        </div>
      </section>
      <section className="feature2">
        <div>
          <img src={collab} alt="collaboration" />
          <h1>Real-time collaboration</h1>
          <p>
            Securely share files and folders with friends, family and colleagues
            for the live collaboration. No email attachments required.
          </p>
        </div>
        <div>
          <img src={any} alt="any files" />
          <h1>Store any type of file</h1>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared/
          </p>
        </div>
      </section>
    </main>
  );
}

export default Features;
