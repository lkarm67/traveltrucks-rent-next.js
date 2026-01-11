"use client";

import { Camper } from "@/types/camper";
import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";

type BookingFormProps = {
  camper: Camper;
};

interface BookingFormValues {
  name: string;
  email: string;
  bookingDate: string;
  comment: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name must be 30 characters or less")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  bookingDate: Yup.string()
    .required("Booking date is required"),
  comment: Yup.string()
    .max(500, "Comment must be 500 characters or less"),
});

const BookingForm: React.FC<BookingFormProps> = ({ camper }) => {
  const initialValues: BookingFormValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const handleSubmit = (
    values: BookingFormValues,
    actions: FormikHelpers<BookingFormValues>
  ) => {
    console.log("Booking submitted for camper:", camper.name, values);
    actions.resetForm();
  };

  return (
    <div className={css.bookingForm}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>Stay connected! We are always ready to help you.</p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.fieldGroup}>
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                className={css.input}
              />
              <ErrorMessage name="name" component="span" className={css.error} />
            </div>

            <div className={css.fieldGroup}>
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                className={css.input}
              />
              <ErrorMessage name="email" component="span" className={css.error} />
            </div>

            <div className={css.fieldGroup}>
              <Field
                type="date"
                name="bookingDate"
                className={css.input}
              />
              <ErrorMessage name="bookingDate" component="span" className={css.error} />
            </div>

            <div className={css.fieldGroup}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={css.textarea}
              />
              <ErrorMessage name="comment" component="span" className={css.error} />
            </div>

            <button type="submit" disabled={isSubmitting} className={css.submitButton}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
