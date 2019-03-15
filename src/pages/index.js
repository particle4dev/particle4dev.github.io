import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import AboutSection from "../components/AboutSection"
import ExpertiseSection from "../components/ExpertiseSection"
import EducationSection from "../components/EducationSection"
import EmploymentSection from "../components/EmploymentSection"
import SpeakingSection from "../components/SpeakingSection"
import SkillsSection from "../components/SkillsSection"
import OrganizationsSection from "../components/OrganizationsSection"
import InterestsSection from "../components/InterestsSection"
import OpensourceSection from "../components/OpensourceSection"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  query EmploymentQuery {
    diceappImages: allFile(filter: { name: { regex: "/^diceapp/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    atomicdexImages: allFile(filter: { name: { regex: "/^atomicdex/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ classes, data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <AboutSection />
    <ExpertiseSection />
    <EmploymentSection data={data} />
    <EducationSection />
    <SkillsSection />
    <SpeakingSection />
    <OrganizationsSection />
    <OpensourceSection />
    <InterestsSection />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
