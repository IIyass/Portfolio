import React from "react"
import { withFormik } from "formik"
import * as Yup from "yup"
import Input from "../components/UI/input"
import Textarea from "../components/UI/textarea"
import Button from "../components/UI/button"

const ContactMeForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  const validation = field => {
    if (errors[field] && touched[field]) return "error"
    return null
  }
  const feedback = field => {
    if (errors[field] && touched[field]) return errors[field]
    return null
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        validation={validation("fullname")}
        label="Fullname"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.fullname}
        name="fullname"
        placeholder="Jon Snow"
        feedback={feedback("fullname")}
      />

      <Input
        type="text"
        placeholder="Example@Example.com"
        name="email"
        label="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        feedback={feedback("email")}
      />
      <Textarea
        type="text"
        name="object"
        label="Object"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.object}
        rows="5"
        feedback={feedback("object")}
      />

      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  )
}

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    fullname: "",
    email: "",
    object: "",
  }),

  validationSchema: Yup.object().shape({
    fullname: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    object: Yup.string().required("Required"),
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    console.log({
      fullname: values.fullname,
      email: values.email,
      object: values.object,
    })
    // setSubmitting(false)
  },
  displayName: "ContactMeForm",
})(ContactMeForm)

export default MyEnhancedForm
