import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import RichText from "./RichText"
import Section from "./Section"

const styles = theme => ({})

function InterestsSection({ classes }) {
  return (
    <Section color>
      <Typography variant="h5" gutterBottom>
        Interests
      </Typography>
      <Typography variant="body1" gutterBottom>
        Music, Movies, Travelling
      </Typography>
    </Section>
  )
}

export default withStyles(styles)(InterestsSection)
