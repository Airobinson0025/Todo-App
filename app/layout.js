import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
