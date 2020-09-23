import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import SharedComponent from "../components/sharedComponent"
import CodingUndraw from "../images/undraw_coding_6mjf.png"
import ActivityUndraw from "../images/undraw_developer_activity_bv83.png"
import AboutMeUndraw from "../images/undraw_startup_life_2du2.png"
import BlogUndraw from "../images/undraw_task_31wc.png"
import ContactMeUndraw from "../images/undraw_delivery_address_03n0.png"
import MyEnhancedForm from "../components/ContactMeForm"
import Button from "../components/UI/button"
import Icons from "../components/icons"
import Typewriter from "typewriter-effect"
import { AboutMe, ProjectContent } from "../Utils/Information"

const Home = () => {
  const IntroductionContent = (
    <div>
      <p>
        I'm Ilyass <span id="name">BELKASMI</span>, I'm a Software Engineer ||
        MERN stack Developer !
      </p>
      <Icons />
      <Button>Hire Me</Button>
    </div>
  )
  const AboutMeContent = AboutMe
  const BlogContent = <p>Psps</p>
  const onSubmit = x => {
    console.log(x)
  }

  return (
    <Layout>
      <Head title="Home" />
      <SharedComponent
        content={IntroductionContent}
        title={
          <Typewriter
            options={{
              strings: ["Hello World"],
              autoStart: true,
              loop: true,
            }}
          />
        }
        illustration={CodingUndraw}
        order={0}
      />
      <SharedComponent
        content={ProjectContent}
        title="Projects"
        illustration={ActivityUndraw}
        order={1}
      />
      <SharedComponent
        content={AboutMeContent}
        title="About Me"
        illustration={AboutMeUndraw}
        order={0}
      />
      <SharedComponent
        content={BlogContent}
        title="My Blogs"
        illustration={BlogUndraw}
        order={1}
      />
      <SharedComponent
        content={<MyEnhancedForm />}
        title="Contact Me"
        illustration={ContactMeUndraw}
        order={0}
      />
    </Layout>
  )
}
export default Home
