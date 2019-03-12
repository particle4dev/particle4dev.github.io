import React from "react"
import Typography from "@material-ui/core/Typography"

function SpeakingSection() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Speaking
      </Typography>
      <article>
        <header>
          <Typography variant="h6" gutterBottom>
            Google IO Extended Ha Noi (2017)
          </Typography>
          <span>
            <a
              href="https://docs.google.com/presentation/d/1igUOsI-Oq5XYACZsWibomvcSrMvAcrPaVxrUTau3BcE/edit?usp=sharing"
              target="_blank"
            >
              Progressive Web Apps with ReactJS
            </a>
          </span>
        </header>
      </article>
      and few lightning talk in my friend company
    </>
  )
}

export default SpeakingSection
