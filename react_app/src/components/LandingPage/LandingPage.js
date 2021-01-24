/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Hero from "./Hero";

export default function LandingPage({ setAuthenticated }) {
    window.document.title = "Castaway | Landing";
    return (
        <div style={{ overflowY: "hidden", overflowX: "hidden" }}>
            <Hero setAuthenticated={setAuthenticated} />
            <div className="footer__container">
                <a
                    href="https://github.com/gardensgreen/"
                    className="footer-link"
                >
                    Github
                </a>
                <a
                    href="https://www.linkedin.com/in/danieltillero/"
                    className="footer-link"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/gardensgreen/sailbnb/"
                    className="footer-link"
                >
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a
                    href="https://angel.co/u/daniel-tillero"
                    className="footer-link"
                >
                    Angelist
                </a>

                <a href="#" className="footer-link">
                    Resume
                </a>
            </div>
        </div>
    );
}
