// https://material-ui.com/customization/themes/#themes

import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  // https://material-ui.com/style/typography/#strategies
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: "light",
  },
})

export default theme
