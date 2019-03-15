import React, { memo } from "react"
import ClassNames from "classnames"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({
  index__section: {
    marginBottom: "32px",
  },
})

function HeaderSection({ classes, id, title, className }) {
  return (
    <Typography
      variant="h5"
      gutterBottom
      id={id}
      className={ClassNames(classes.index__section, className)}
    >
      {title}
    </Typography>
  )
}

HeaderSection.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
}

HeaderSection.defaultProps = {
  className: "",
  id: null
}

export default memo(withStyles(styles)(HeaderSection))
