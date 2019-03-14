import React, { memo } from "react"
import ClassNames from "classnames"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const styles = theme => ({
  index: {
    justifyContent: "center",
    padding: "32px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "32px 16px 32px 16px",
    },
  },

  index__grayColor: {
    backgroundColor: " #f1f3f4",
  },
})

function Section({ classes, children, color, className }) {
  return (
    <Grid
      container
      spacing={24}
      className={ClassNames(classes.index, className, {
        [classes.index__grayColor]: color,
      })}
    >
      <Grid item xs={12} sm={8}>
        {children}
      </Grid>
    </Grid>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.bool,
  className: PropTypes.string,
}

Section.defaultProps = {
  color: false,
  className: "",
}

export default memo(withStyles(styles)(Section))
