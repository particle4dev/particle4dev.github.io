import React from "react"
import { Link, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
// import Bio from "../components/bio"
import AboutSection from "../components/AboutSection"
import Layout from "../components/layout"
import Section from "../components/Section"
import SEO from "../components/seo"
import Date from "../components/Date"

const styles = theme => ({
  index__item: {
    marginBottom: 32,
  },
  index__headline: {
    marginTop: 9,
  },
  index__richText: {
    lineHeight: "34px",
  },
})

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { classes, pageContext } = this.props
    const { previous, next } = pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <AboutSection />
        <Section>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <Date>{post.frontmatter.date}</Date>
          <Typography
            variant="h5"
            gutterBottom
            className={classes.index__headline}
          >
            {post.frontmatter.title}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.index__richText}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Section>
        <Section color>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </Section>
      </Layout>
    )
  }
}

export default withStyles(styles)(BlogPostTemplate)

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
