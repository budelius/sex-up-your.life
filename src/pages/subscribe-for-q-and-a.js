import React from "react";

import { useForm, ValidationError } from "@formspree/react";

import SEO from "../components/seo";
import { StaticImage as Img } from "gatsby-plugin-image";
import Footer from "../components/footer";
// eslint-disable-next-line import/no-unresolved
import Layout from "../components/Layout";

const SubscribeForQAndA = () => {
  const [state, handleSubmit] = useForm("mleaobpo");
  if (state.succeeded) {
    return (
      <Layout>
        <SEO title="Q&A" />
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
            <div className="medium-6 cell">Thanks for joining!</div>
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

  return (
    <Layout>
      <SEO title="Q&A" />
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
      <div className="grid-container theta-content">
        <div className="theta-spacer-sm" />
        <div className="title">Anmeldung zur Q&A Live Challenge ✨🌟</div>
        <div className="description">
          <hr />
          <br />
          <br />
          Du hast Fragen und ich hab die Antworten! ✨💫 Lass dich überraschen wie viel wir zwei in
          einer Stunde aufräumen und geradebiegen !<br />
          <br />
          Schnell noch Name und Email Adresse ausgefüllt und los gehts !<br />
          <br />
        </div>
        <hr />
        <div className="grid-x grid-padding-x">
          <div className="medium-6 cell">
            <form onSubmit={handleSubmit}>
              <input
                id="name"
                type="text"
                placeholder="Dein Name"
                name="name"
                required="required"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <input
                id="email"
                className="subscribe-email"
                type="email"
                placeholder="Deine Email Adresse"
                name="email"
                required="required"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <br />
              <button type="submit" disabled={state.submitting} className="button gold">
                Anmelden
              </button>
            </form>
          </div>
        </div>
        <div className="theta-spacer-sm" />
        <Img
          placeholder="blurred"
          imgClassName="theta-full-image"
          src="../images/marketing.png"
          alt={""}
        />
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

export default SubscribeForQAndA;
