import React from "react"
import { Link } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import AboutSection from "../components/AboutSection"
import EducationSection from "../components/EducationSection"
import EmploymentSection from "../components/EmploymentSection"
import SpeakingSection from "../components/SpeakingSection"
import SkillsSection from "../components/SkillsSection"
import OrganizationsSection from "../components/OrganizationsSection"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  index: {
    justifyContent: "center",
  },

  index__sectionGray: {
    backgroundColor: " #f1f3f4",
  },

  index__date: {
    fontFamily: "Roboto Mono",
    fontSize: 14,
    color: "#5f6368",
  },

  index__header: {
    marginTop: 54,
  },

  index__firstSection: {
    marginTop: 32,
  },
})

const IndexPage = ({ classes }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <AboutSection />
    <EmploymentSection />
    <SpeakingSection />

    <Grid container spacing={24} className={classes.index}>
      <Grid item xs={12} sm={8} className={classes.index__firstSection} />
      <Grid item xs={12} sm={8} />
      <Grid item xs={12} sm={8} className={classes.index__sectionGray}>
        <EducationSection />
      </Grid>

      <Grid item xs={12} sm={8}>
        <SkillsSection />
      </Grid>

      <Grid item xs={12} sm={8} className={classes.index__sectionGray}>
        <Typography variant="h5" gutterBottom>
          Open source
        </Typography>
      </Grid>

      <Grid item xs={12} sm={8} className={classes.index__sectionGray}>
        <OrganizationsSection />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant="h5" gutterBottom>
          Interests
        </Typography>
      </Grid>
    </Grid>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default withStyles(styles)(IndexPage)
