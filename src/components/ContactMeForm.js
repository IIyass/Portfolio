import React from "react"
import { withFormik } from "formik"
import * as Yup from "yup"

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
      <input
        validation={validation("fullname")}
        label="Fullname"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.fullname}
        name="fullname"
        placeholder="Fullname"
        feedback={feedback("fullname")}
      />

      <input
        type="text"
        name="object"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.object}
      />

      <button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
        Submit
      </button>
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

      object: values.object,
    })

    setSubmitting(false)
  },
  displayName: "ContactMeForm",
})(ContactMeForm)

export default MyEnhancedForm
