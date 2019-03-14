import React from "react"
import ClassNames from "classnames"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Section from "./Section"

const styles = theme => ({
  index__date: {
    fontFamily: "Roboto Mono",
    fontSize: 14,
    color: "#5f6368",
  },

  index__section: {
    marginBottom: "0.35em",
  },

  index__richText: {
    lineHeight: "34px",
  },

  index__header: {
    position: "relative",
  },
})

function SpeakingSection({ classes }) {
  return (
    <Section>
      <Typography variant="h5" gutterBottom>
        Speaking
      </Typography>
      <div
        className={ClassNames(classes.index__section, classes.index__richText)}
      >
        <header>
          <Typography variant="h6">Google IO Extended Ha Noi (2017)</Typography>
        </header>
        <Typography
          variant="body1"
          gutterBottom
          className={classes.index__richText}
        >
          <a
            href="https://docs.google.com/presentation/d/1igUOsI-Oq5XYACZsWibomvcSrMvAcrPaVxrUTau3BcE/edit?usp=sharing"
            target="_blank"
          >
            Progressive Web Apps with ReactJS
          </a>{" "}
          and few lightning talk in my friend company
        </Typography>
      </div>
    </Section>
  )
}

export default withStyles(styles)(SpeakingSection)
