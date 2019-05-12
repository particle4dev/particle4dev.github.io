import React from "react"
import { Link, graphql } from "gatsby"
import Disqus from "disqus-react"
import rehypeReact from "rehype-react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import BioSection from "../components/BioSection"
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

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { typography: Typography },
}).Compiler

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { classes, pageContext } = this.props
    const { previous, next } = pageContext
    const { host } = this.props.data.site

    const disqusShortname = "meteornotes"
    const disqusConfig = {
      url: `https://${host}${post.fields.slug}`,
      identifier: post.id,
      title: post.frontmatter.title,
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <BioSection />
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
          {/* <Typography
            variant="body1"
            gutterBottom
            className={classes.index__richText}
            dangerouslySetInnerHTML={{ __html: post.html }}
          /> */}
          <Typography
            variant="body1"
            gutterBottom
            className={classes.index__richText}
          >
            {renderAst(post.htmlAst)}
          </Typography>
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
                <Typography variant="body1" className={classes.index__richText}>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </Typography>
              )}
            </li>
            <li>
              {next && (
                <Typography variant="body1" className={classes.index__richText}>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </Typography>
              )}
            </li>
          </ul>
        </Section>
        <Section>
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
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
      host
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      htmlAst # previously html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        slug
      }
    }
  }
`
