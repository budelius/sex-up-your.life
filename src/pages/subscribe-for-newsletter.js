import React from "react";

import addToMailchimp from "gatsby-plugin-mailchimp";
import SEO from "../components/seo";
import { StaticImage as Img } from "gatsby-plugin-image";
import Link from "gatsby-link";
import Footer from "../components/footer";
import Layout from "../components/Layout";

export default class MyGatsbyComponent extends React.Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const result = await addToMailchimp(this.state.email);
    console.log(result.msg);
    this.setState({ message: result.msg });
  };

  render() {
    return (
      <Layout>
        <SEO title="Newsletter" />
        <div className="theta-subpage-header">
          <div className="grid-container">
            <div className="grid-x">
              <div className="large-8 medium-8 small-8">Newsletter</div>
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
          <div className="theta-subpage-back">
            <Link to="/">STARTSEITE</Link> &raquo; NEWSLETTER
          </div>
          <hr />
          <div className="title">Zum Newsletter anmelden</div>
          <br />
          <div className="grid-x grid-padding-x">
            <div className="medium-6 cell">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  onChange={this.handleInputChange}
                  placeholder="Dein Name"
                  name="name"
                  value={this.state.name}
                />
                <input
                  className="subscribe-email"
                  type="email"
                  onChange={this.handleInputChange}
                  placeholder="Deine Email Adresse"
                  name="email"
                  value={this.state.email}
                />
                <br />
                <div className="message" dangerouslySetInnerHTML={{ __html: this.state.message }} />
                <br />
                <button
                  type="button"
                  className="button gold"
                  data-toggle="button"
                  aria-pressed="false"
                  onClick={this.handleSubmit}
                >
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
  }
}
