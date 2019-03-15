import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import RichText from "./RichText"
import Section from "./Section"
import HeaderSection from "./HeaderSection"

const styles = theme => ({
  index__date: {
    fontSize: "1rem",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    letterSpacing: "0.00938em",
  },

  index__section: {
    marginBottom: "32px",
  },
})

function OpensourceSection({ classes }) {
  return (
    <Section>
      <HeaderSection title="Open source" />
      <RichText className={classes.index__section}>
        <Typography variant="h6">
          kmd-rpc: Komodo RPC Library for modern JavaScript
        </Typography>
        <Link
          href="https://github.com/particle4dev/komodo-rpc-lib"
          target="blank"
          className={classes.index__date}
        >
          https://github.com/particle4dev/komodo-rpc-lib
        </Link>
      </RichText>
      <RichText className={classes.index__section}>
        <Typography variant="h6">
          ecmascript-training: An open source project to help you learn JS
        </Typography>
        <Link
          href="https://github.com/university-of-ant-solutions/ecmascript-training"
          target="blank"
          className={classes.index__date}
        >
          https://github.com/university-of-ant-solutions/ecmascript-training
        </Link>
      </RichText>
      <RichText className={classes.index__section}>
        <Typography variant="h6">
          react-mdl-library: React Components for Material Design Lite
        </Typography>
        <Link
          href="https://github.com/university-of-ant-solutions/react-mdl-library"
          target="blank"
          className={classes.index__date}
        >
          https://github.com/university-of-ant-solutions/react-mdl-library
        </Link>
      </RichText>
      <RichText className={classes.index__section}>
        <Typography variant="h6">
          feathers-fetch-service: Easy way to create a Fetch Service for
          Feathersjs
        </Typography>
        <Link
          href="https://github.com/university-of-ant-solutions/feathers-fetch-service"
          target="blank"
          className={classes.index__date}
        >
          https://github.com/university-of-ant-solutions/feathers-fetch-service
        </Link>
      </RichText>

      <Typography variant="body1" gutterBottom>
        To be written ... <br />
        You can check{" "}
        <Link href="https://github.com/particle4dev" target="_blank">
          my github
        </Link>{" "}
        and{" "}
        <Link href="https://gitlab.com/particle4dev" target="_blank">
          my gitlab
        </Link>{" "}
        to view more
      </Typography>
    </Section>
  )
}

export default withStyles(styles)(OpensourceSection)
