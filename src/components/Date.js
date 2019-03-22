import React, { memo } from "react"
import ClassNames from "classnames"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  index__date: {
    fontFamily: 'Roboto Mono',
    fontSize: 16,
    color: '#5f6368'
  },
})

function Date({ classes, children, className }) {
  return (
    <div className={ClassNames(classes.index__date, className)}>{children}</div>
  )
}

Date.propTypes = {
  children: PropTypes.node.isRequired,
}

Date.defaultProps = {}

export default memo(withStyles(styles)(Date))
