import React from "react"
import "./style.scss"
import hero from "../images/hero.jpg"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const Layout = ({
    children
}) => (
    <main>
        <Helmet title="Jaye Hackett">
            <html lang="en" />
            <meta name="description" content="Experience designer & technologist" />
        </Helmet>
        <header className="welcome">
            <div className="welcome__bg" style={{backgroundImage: `url(${hero})`}}></div>
            <div className="container welcome__inner">
                <h1 className="welcome__headline">Jaye Hackett</h1>
                <h2 className="welcome__strapline">Experience designer & technologist</h2>
                <div className="welcome__links">
                    <p>Find me on:</p>
                    <a className="welcome__link" href="https://medium.com/@dinosaurenby">Medium</a>
                    <a className="welcome__link" href="https://www.linkedin.com/in/hackettjaye/">LinkedIn</a>
                    <a className="welcome__link" href="https://twitter.com/dinosaurenby">Twitter</a>
                    <a className="welcome__link" href="https://github.com/jhackett1">Github</a>
                </div>
            </div>
        </header>

        <section className="grid container">
            <h2 className="grid__title">Recent work</h2>
            <ul className="grid__list">
                <li className="list-item">
                    <h3 className="list-item__title"><Link to="/buckinghamshire">Find support near me</Link></h3>
                    <p className="list-item__caption">Buckinghamshire Council <span>2020</span></p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title"><Link to="/kent">Get an EHC plan</Link></h3>
                    <p className="list-item__caption">Kent County Council <span>2019</span></p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title"><Link to="/essex">Ask for social care help</Link></h3>
                    <p className="list-item__caption">Essex County Council <span>2019</span></p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title"><Link to="/samaritans">Become a volunteer</Link></h3>
                    <p className="list-item__caption">Samaritans <span>2018</span></p>
                </li>
            </ul>
        </section>

        <section className="grid container">
            <h2 className="grid__title">Experience</h2>
            <ul className="grid__list grid__list--two-col">
                <li className="list-item">
                    <h3 className="list-item__title">Product designer and developer</h3>
                    <p className="list-item__caption">FutureGov</p>
                    <p className="list-item__description">I design and build the tools to enable 21st century public services, with a healthy dose of prototyping, co-design and product strategy. At the moment, I’m focusing on diversifying my team’s web development skills.</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">Product manager</h3>
                    <p className="list-item__caption">Samaritans</p>
                    <p className="list-item__description">I introduced a new end-to-end experience for new volunteers joining Samaritans: pioneering new digital tools, piloting training methods and ways of working for the charity, plus managing agency relationships.</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">User researcher</h3>
                    <p className="list-item__caption">Department for Work and Pensions</p>
                    <p className="list-item__description">I steered a digital service team through a discovery phase, managing stakeholders, facilitating workshops, guarding the team’s time and conducting pop-up user research.</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">Product owner</h3>
                    <p className="list-item__caption">HMRC</p>
                    <p className="list-item__description">I prepared HMRC’s digital infrastructure for its largest annual traffic spike—the self-assessment deadline. I also conducted user research and trained a cohort of apprentices to become cloud engineers.</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">Media coordinator</h3>
                    <p className="list-item__caption">University of Westminster Students' Union</p>
                    <p className="list-item__description">I trained and managed a cohort of 50+ student journalists, and created a strategic vision for one of the UK’s most awarded student media collectives.</p>
                </li>
            </ul>
        </section>

        <section className="grid container">
            <h2 className="grid__title">Skills</h2>
            <ul className="grid__list grid__list--two-col">
                <li className="list-item">
                    <h3 className="list-item__title">Service design</h3>
                    <p className="list-item__description">Public sector digital services need to be accessible to everyone. I’m comfortable identifying user needs through research and carrying these forward through a project, and considering digital tools as part of an end-to-end service.</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">Web development</h3>
                    <p className="list-item__description">I’ve built countless modern websites and web applications, working primarily with React, Rails and Django. I’m comfortable building front-ends, APIs and database schemas.</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">Training and coaching</h3>
                    <p className="list-item__description">I’m a long-time volunteer with <strong>CodeFirst:Girls</strong> and <strong>Codebar</strong>. Most of my jobs have included a mentoring aspect. I’m at home presenting in front of a crowd, and facilitating co-design workshops with users are a vital part of my design process.</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">Agile delivery</h3>
                    <p className="list-item__description">I’ve trained with and worked alongside many experience agile practitioners, and have led large and small agile teams.</p>
                </li>
            </ul>
        </section>

        <section className="grid container">
            <h2 className="grid__title">Education</h2>
            <ul className="grid__list">
                <li className="list-item">
                    <h3 className="list-item__title">Agile foundation course</h3>
                    <p className="list-item__caption">GDS Academy</p>
                    <p className="list-item__description">Completed 2017</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">PG.Dip Broadcast Journalism</h3>
                    <p className="list-item__caption">University of Sheffield (graduated 2016)</p>
                    <p className="list-item__description">Graduated 2016</p>
                </li>
                <li className="course">
                    <h3 className="list-item__title">B.Sc Biology</h3>
                    <p className="list-item__caption">University of Sheffield</p>
                    <p className="list-item__description">Graduated 2015</p>
                </li>
            </ul>
        </section>

        <footer className="footer">
            <a className="footer__link" href="mailto:hello@jayehackett.com">hello@jayehackett.com</a>
        </footer>

        {children}

    </main>
)

export default Layout
