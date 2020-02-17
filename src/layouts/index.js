import React from "react"
import "./style.scss"
import hero from "../images/hero.jpg"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const Layout = ({
    children
}) => (
    <main>
        <Helmet title="Jaye Hackett">
            <html lang="en" />
            <meta name="description" content="Strategic designer & technologist" />
        </Helmet>
        <header className="welcome">
            <div className="welcome__bg" style={{backgroundImage: `url(${hero})`}}></div>
            <div className="container welcome__inner">
                <h1 className="welcome__headline">Jaye Hackett</h1>
                <h2 className="welcome__strapline">Strategic designer & technologist</h2>
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
 

                <StaticQuery 
                    query={graphql`
                        query HomeQuery {
                            allMarkdownRemark {
                                edges {
                                    node {
                                        id
                                        frontmatter {
                                            title
                                            slug
                                            year
                                            tags
                                        }
                                    }
                                }
                            }
                        }
                    `}
                    render={data => (
                        <ul className="grid__list">
                            {console.log(data)}
                            {data.allMarkdownRemark.edges.map(edge =>
                                <li className="list-item">
                                    <h3 className="list-item__title"><Link to={edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link></h3>
                                    <p className="list-item__caption">{edge.node.frontmatter.tags} <span>{edge.node.frontmatter.year}</span></p>
                                </li>
                            )}
                        </ul>
                    )}
                />
        </section>

        <section className="grid container">
            <h2 className="grid__title">Selected <br/>experience</h2>
            <ul className="grid__list grid__list--two-col">
                <li className="list-item">
                    <h3 className="list-item__title">Product designer & developer</h3>
                    <p className="list-item__caption">FutureGov</p>
                    <p className="list-item__description">I use participatory design to prototype and build the digital tools to enable 21st century public services. At the moment, I’m building a new community of practice for technology and software engineering.</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">Product manager</h3>
                    <p className="list-item__caption">Samaritans</p>
                    <p className="list-item__description">I designed and implemented a new end-to-end experience for new volunteers, including facilitating stakeholder workshops, conducting user research and managing agency relationships.</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">User researcher</h3>
                    <p className="list-item__caption">Department for Work and Pensions</p>
                    <p className="list-item__description">I built working HTML/CSS prototypes, wrote discussion guides, conducted user interviews and synthesised findings for a new digital service going through a discovery phase.</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">Product owner</h3>
                    <p className="list-item__caption">HMRC</p>
                    <p className="list-item__description">I prepared HMRC’s digital infrastructure for its largest annual traffic spike—the self-assessment tax deadline. I also conducted trained a cohort of apprentices to become developers and cloud engineers.</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">Media coordinator</h3>
                    <p className="list-item__caption">University of Westminster</p>
                    <p className="list-item__description">I mentored and trained dozens of student journalists for one of the UK’s most awarded student media collectives.</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">Freelance UX designer & developer</h3>
                    <p className="list-item__caption">Since 2015</p>
                    <p className="list-item__description">I use an agile, lean approach to build products ranging from new websites for large city investment firms to MVPs for small health start-ups.</p>
                </li>
            </ul>
        </section>

        <section className="grid container">
            <h2 className="grid__title">Skills</h2>
            <ul className="grid__list grid__list--two-col">
                <li className="list-item">
                    <h3 className="list-item__title">Mentoring and coaching</h3>
                    <p className="list-item__description">I’ve taught four CodeFirst:Girls courses and I’m a regular Codebar coach. I care deeply about bringing under-represented people into tech.</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">Strategic design</h3>
                    <p className="list-item__description">I treat digital products as part of an end-to-end service composed of teams, processes, policies and tools.</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">Web development</h3>
                    <p className="list-item__description">At the moment I work mainly with React, Node and Rails, but I’m open to learning any and all new tech.</p>
                </li>
                <li className="list-item">
                    <h3 className="list-item__title">Agile delivery</h3>
                    <p className="list-item__description">I’ve lead small and large agile teams, and I’m an experienced scrum facilitator.</p>
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
                    <p className="list-item__caption">University of Sheffield</p>
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
