import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Container } from "../../common"
import * as Style from "./styles"
import BlogUndraw from "../../../assests/illustrations/Blog.svg"

export const Blogs = () => {
  return (
    <Style.BlogWrapper id="blogs" as={Container}>
      <Style.Thumbnail>
        <img src={BlogUndraw} alt="I’m John and I’m a Software engineer!" />
      </Style.Thumbnail>
      <Style.Details>
        <h1>Blogs</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy.
        </p>
      </Style.Details>
    </Style.BlogWrapper>
  )
}
