import React, { useState } from "react";

import axios from "axios";

import SEO from "../components/seo";
import { StaticImage as Img } from "gatsby-plugin-image";
import Footer from "../components/footer";
// eslint-disable-next-line import/no-unresolved
import Layout from "../components/Layout";

const SubscribeFor = () => {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: ""
  });

  const handleInputChange = () => e => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post("https://getform.io/f/d7d9b59f-f07c-4997-a83e-2961dc915eb7", formData, {
        headers: { Accept: "application/json" }
      })
      .then(function(response) {
        setFormStatus(true);
        setQuery({
          name: "",
          email: "",
          platform: ""
        });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <Layout>
      <SEO title="Newsletter" />
      <div className="theta-subpage-header">
        <div className="grid-container">
          <div className="grid-x">
            <div className="large-8 medium-8 small-8">Anmeldung</div>
            <div className="large-4 medium-4 small-4 text-right show-for-large">
              <Img
                imgClassName="name"
                placeholder="blurred"
                src="../images/nina_loacker.svg"
                alt={""}
              />
              <Img
                placeholder="blurred"
                src="../images/avatar_5.png"
                alt={""}
                width={70}
                height={85}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="theta-spacer-sm" />
        <hr />
        <div className="grid-x grid-padding-x">
          <div className="medium-6 cell">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={handleInputChange()}
                placeholder="Dein Name"
                name="name"
                required="required"
                value={query.name}
              />
              <input
                className="subscribe-email"
                type="email"
                onChange={handleInputChange()}
                placeholder="Deine Email Adresse"
                name="email"
                required="required"
                value={query.email}
              />
              <br />
              {formStatus ? (
                <>
                  <div className="alert alert-success">Your message has been sent.</div>
                  <br />
                </>
              ) : (
                ""
              )}
              <button type="submit" className="button gold">
                Anmelden
              </button>
            </form>
          </div>
        </div>
        <div className="theta-spacer-sm" />
      </div>
      <div className="theta-subpage-header">
        <div className="grid-container">
          <div className="theta-subpage-footer">
            <div className="grid-container">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubscribeFor;
