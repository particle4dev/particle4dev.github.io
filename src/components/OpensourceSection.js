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
        <article>
          <header>
            <h1>
              <a
                href="https://github.com/university-of-ant-solutions/ecmascript-training"
                target="_blank"
              >
                ecmascript training
              </a>
            </h1>
            <span>An open source project to help you learn JS</span>
          </header>
        </article>
        <article>
          <header>
            <h1>
              <a
                href="https://github.com/university-of-ant-solutions/react-mdl-library"
                target="_blank"
              >
                react mdl library
              </a>
            </h1>
            <span>React Components for Material Design Lite</span>
          </header>
        </article>
        To be written ... <br />
        You can check{" "}
        <a href="https://github.com/particle4dev" target="_blank">
          my github
        </a>{" "}
        and{" "}
        <a href="https://gitlab.com/particle4dev" target="_blank">
          my gitlab
        </a>{" "}
        to view more
      </Typography>
    </Section>
  )
}

export default withStyles(styles)(OpensourceSection)
