import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import RichText from "./RichText"
import Section from "./Section"

const styles = theme => ({
  index: {
    justifyContent: "center",
    padding: "32px 0",
    backgroundColor: " #f1f3f4",
  },
})

function OrganizationsSection({ classes }) {
  return (
    <Section color>
      <Typography variant="h5" gutterBottom>
        Organizations
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Admin at React VietNam Group where are largest and active ReactJS
          community in Vietnam.
        </p>
        <p>Member of nodejs.org</p>
      </Typography>
    </Section>
  )
}

export default withStyles(styles)(OrganizationsSection)
