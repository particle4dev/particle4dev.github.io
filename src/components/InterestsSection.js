import React from "react"
import { withStyles } from "@material-ui/core/styles"
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
})

function InterestsSection({ classes }) {
  return (
    <Section color>
      <HeaderSection title="Interests" />
      <RichText className={classes.index__section}>
        <time className={classes.index__date}>
          Hacking, learning new thing, travelling and hangout with my friends :)
        </time>
      </RichText>
    </Section>
  )
}

export default withStyles(styles)(InterestsSection)
