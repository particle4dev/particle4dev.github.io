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

function InterestsSection({ classes }) {
  return (
    <Section color>
      <HeaderSection title="Interests" />
      <RichText className={classes.index__section}>
        <Typography variant="h6">Professional interests</Typography>
        <div className={classes.index__date}>
          Open web standards, Cloud computing, Software development, Web
          development, Web architecture
        </div>
      </RichText>

      <RichText className={classes.index__section}>
        <Typography variant="h6">Research interests</Typography>
        <div className={classes.index__date}>
          Blockchain, Machine Learning, AI, Deep Learning
        </div>
      </RichText>
    </Section>
  )
}

export default withStyles(styles)(InterestsSection)

//
//
//
//
