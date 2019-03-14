import React from "react"
// import { Link } from "gatsby"
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

const styles = theme => ({})

const IndexPage = ({ classes }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <AboutSection />
    <ExpertiseSection />
    <EmploymentSection />
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

export default withStyles(styles)(IndexPage)
