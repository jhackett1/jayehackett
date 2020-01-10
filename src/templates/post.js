import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Dialog } from "@reach/dialog"
import { navigate } from "gatsby"
import "./style.scss";
import cross from "../images/cross.svg"

const Template = ({
  data
}) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return (
        <Dialog isOpen={true} onDismiss={() => navigate("/")}>
            <Link className="portfolio__close" to="/"><img src={cross} alt="Close"/></Link>
            <header className="portfolio__header">
              <p className="portfolio__client">{frontmatter.client}</p>
              <h1 className="portfolio__title">{frontmatter.title}</h1>
              <p className="portfolio__year">{frontmatter.year}</p>
            </header>
            <article
                className="portfolio__content"
                dangerouslySetInnerHTML={{ __html: html }}
            ></article>
        </Dialog>
    )
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
        frontmatter {
            title
            slug
            client
            year
            read_more
        }
        html
    }
  }
`