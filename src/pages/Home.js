import React from 'react'
import classes from "./Home.module.css"
import HtmlCssJSLogo1 from "../images/HtmlCSSJS.jpeg"

function Home() {
  return (
    <body className = {classes.body}>

        <main className = {classes.main}>
          <ul className={classes.flexContainerUl}>
            <li className={classes.item}>
              <h2>Inspiration</h2>
              <p>
                I made this website to practice my react skills. I am aspiring to be a web developer in the future which is why I am creating projects that will achieve that goal.
              </p>
            </li>
            <li className={classes.item}>
              <h2>Programming Languages</h2>
                <img src={HtmlCssJSLogo1} alt={"HtmlCSSJsLogo"}/>
              <p>
                These are the programming languages (HTML, Javascript, CSS) that I used to create this website. 
              </p>
            </li>
          </ul>
          <ul className={classes.flexContainerUl}>
            <li className={classes.item}>
              <h2>About the website</h2>
              <p>
                This is a simple shopping website. It has no database/backend, this is for front-end purposes.
              </p>
            </li>
            <li className={classes.item}>
              <h2>About the website</h2>
              <p>
                This is a simple shopping website. It has no database/backend, this is for front-end purposes.
              </p>
            </li>
          </ul>
        </main>
        <footer className = {classes.footer}>Footer</footer>
    </body>
  )
}

export default Home
