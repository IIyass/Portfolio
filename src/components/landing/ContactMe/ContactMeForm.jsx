import React from "react"
import { Formik, Form, FastField, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Input } from "../../UI/input"
import { Textarea } from "../../UI/textarea"
import { Button } from "../../UI/button"
import { Error, InputField } from "./styles"

export default () => (
  <Formik
    initialValues={{
      fullname: "",
      email: "",
      object: "",
    }}
    validationSchema={Yup.object().shape({
      fullname: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      object: Yup.string().required("Required"),
    })}
    onSubmit={async (
      { fullname, email, object },
      { setSubmitting, resetForm, setFieldValue }
    ) => {
      console.log({
        fullname: fullname,
        email: email,
        object: object,
      })
    }}
  >
    {({ values, touched, errors, setFieldValue, isSubmitting }) => (
      <Form>
        <InputField>
          <Input
            as={FastField}
            type="text"
            name="fullname"
            component="input"
            aria-label="fullname"
            placeholder="Full name*"
            error={touched.fullname && errors.fullname}
            feedback={touched.fullname && errors.fullname}
          />
          <ErrorMessage component={Error} name="fullname" />
        </InputField>
        <InputField>
          <Input
            id="email"
            aria-label="email"
            component="input"
            as={FastField}
            type="email"
            name="email"
            placeholder="Email*"
            error={touched.email && errors.email}
            feedback={touched.email && errors.email}
          />
          <ErrorMessage component={Error} name="email" />
        </InputField>
        <InputField>
          <Textarea
            as={FastField}
            component="textarea"
            aria-label="object"
            id="object"
            rows="10"
            type="text"
            name="object"
            placeholder="Object*"
            error={touched.object && errors.object}
            feedback={touched.object && errors.object}
          />
          <ErrorMessage component={Error} name="object" />
        </InputField>

        <Button secondary type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </Form>
    )}
  </Formik>
)
