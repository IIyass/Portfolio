import React from "react"
import { Link } from "gatsby"
import { Button } from "../../UI/button"
import { Container } from "../../common"
import * as Style from "./styles"
import BlogUndraw from "../../../assests/illustrations/Blog.svg"

export const Blogs = () => {
  return (
    <Style.BlogWrapper id="blog" as={Container}>
      <Style.Thumbnail>
        <img src={BlogUndraw} alt="I’m John and I’m a Software engineer!" />
      </Style.Thumbnail>
      <Style.Details>
        <div>
          <h1>Blogs</h1>
          <p>
            I post on everything that took my attention on technology , and
            interesting problems i faced during my programming journey.I also
            share the new updating related to javascript,in order to come up
            with a summary to help others get an idea of ​​the topic.
          </p>
        </div>
        <Button as={Link} to="/blog">
          Blogs
        </Button>
      </Style.Details>
    </Style.BlogWrapper>
  )
}
