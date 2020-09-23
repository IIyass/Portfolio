import React from "react"
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Style from "../styles"

const Icons = () => {
  return (
    <Style.Icons>
      <ul>
        <li>
          <a href="https://www.linkedin.com/company/finamaze/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/finamaze/">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/finamaze/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </Style.Icons>
  )
}

export default Icons
