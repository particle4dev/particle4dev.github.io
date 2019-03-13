/* eslint-disable max-len */

import React from "react"
import SvgIcon from "@material-ui/core/SvgIcon"

function Mail(props) {
  return (
    <SvgIcon {...props}>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </SvgIcon>
  )
}

Mail.muiName = "SvgIcon"

export default Mail
