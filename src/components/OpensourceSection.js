import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import RichText from "./RichText"
import Section from "./Section"

const styles = theme => ({})

function OpensourceSection({ classes }) {
  return (
    <Section>
      <Typography variant="h5" gutterBottom>
        Open source
      </Typography>
      <Typography variant="body1" gutterBottom>
        Music, Movies, Travelling
      </Typography>
    </Section>
  )
}

export default withStyles(styles)(OpensourceSection)
