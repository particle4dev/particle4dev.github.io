import React from "react"
import { Link, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import Date from "../components/Date"
import AboutSection from "../components/AboutSection"

const styles = theme => ({
  index__item: {
    marginBottom: 32,
  },
  index__headline: {
    marginTop: 9
  }
})

class BlogIndex extends React.Component {
  renderNewfeedItem = ({ node }) => {
    const title = node.frontmatter.title || node.fields.slug
    const { classes } = this.props

    return (
      <div key={node.fields.slug} className={classes.index__item}>
        <Date>{node.frontmatter.date}</Date>
        <Typography variant="h5" gutterBottom className={classes.index__headline}>
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            {title}
          </Link>
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </div>
    )
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <AboutSection />
        <Section>{posts.map(this.renderNewfeedItem)}</Section>
      </Layout>
    )
  }
}

export default withStyles(styles)(BlogIndex)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
