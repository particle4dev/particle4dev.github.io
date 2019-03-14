import React, { memo } from "react"
import ClassNames from "classnames"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  richText: {
    lineHeight: "34px",
  },
})

function RichText({ classes, children, className }) {
  return (
    <div className={ClassNames(classes.richText, className)}>{children}</div>
  )
}

RichText.propTypes = {
  children: PropTypes.node.isRequired,
}

RichText.defaultProps = {}

export default memo(withStyles(styles)(RichText))
