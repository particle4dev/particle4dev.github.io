import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import RichText from "./RichText"
import Section from "./Section"
import HeaderSection from "./HeaderSection"

const styles = theme => ({
  index__date: {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "1rem",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    letterSpacing: "0.00938em",
  },

  index__section: {
    marginBottom: "32px",
  },
})

function EducationSection({ classes }) {
  return (
    <Section>
      <HeaderSection title="Education" />
      <RichText className={classes.index__section}>
        <Typography variant="h6">
          Bachelors of Information Technology
        </Typography>
        <time className={classes.index__date}>
          Posts and Telecommunications Institute of Technology of Ha Noi -
          09/2008 - 02/2013
        </time>
      </RichText>
      <RichText className={classes.index__section}>
        <Typography variant="h6">M102: MongoDB for DBAs</Typography>
        <time className={classes.index__date}>
          MongoDB University - 07/2013 - 09/2013 (2 months)
        </time>
      </RichText>
      <RichText className={classes.index__section}>
        <Typography variant="h6">
          M101JS: MongoDB for Node.js Developers
        </Typography>
        <time className={classes.index__date}>
          MongoDB University - 10/2013 - 12/2013 (2 months)
        </time>
      </RichText>
      <RichText>
        <Typography variant="h6">
          M202: MongoDB Advanced Deployment and Operations
        </Typography>
        <time className={classes.index__date}>
          MongoDB University - 03/2016 - 05/2016 (2 months)
        </time>
      </RichText>
    </Section>
  )
}

export default withStyles(styles)(EducationSection)
