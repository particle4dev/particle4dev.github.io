import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Section from "./Section"
import HeaderSection from "./HeaderSection"

const styles = theme => ({
  index: {
    justifyContent: "center",
    padding: "32px 0",
    backgroundColor: " #f1f3f4",
  },
})

function OrganizationsSection({ classes }) {
  return (
    <Section>
      <HeaderSection title="Organizations" />

      <Typography variant="body1" gutterBottom>
        Admin at React VietNam Group where are largest and active ReactJS
        community in Vietnam.
      </Typography>

      <Typography variant="body1" gutterBottom>
        Member of nodejs.org
      </Typography>
    </Section>
  )
}

export default withStyles(styles)(OrganizationsSection)
