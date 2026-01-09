import { Camper } from "@/lib/api/api";
import React from "react";
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './BookingForm.module.css';

type BookingFormProps = {
    camper: Camper;
};

interface BookingFormValues {
    name: string;
    email: string;
    bookingDate: string;
    comment?: string;
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(30, "Name must be 30 characters or less")
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    bookingDate: Yup.date()
        .required("Booking date is required"),
    comment: Yup.string()
        .max(500, "Comment must be 500 characters or less"),
});

const BookingForm: React.FC<BookingFormProps> = ({ camper }) => {
    const handleSubmit = (
        values: BookingFormValues,
        action: FormikHelpers<BookingFormValues>
    ) => {
        console.log("Booking form submitted:", values);
        action.resetForm();
    };

    return (
        <div className="bookingForm">
            <h3 className="bookingFormTitle">Book your campervan now</h3>
            <p className="bookingFormText">Stay connected! We are always ready to help you.</p>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    bookingDate: "",
                    comment: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log("Booking form submitted:", values);
                }}
            >
                {
                    ({ values, handleChange, handleSubmit }) => (
                        <Form onSubmit={handleSubmit} className="bookingFormElement">
                            <Field
                                type="text"
                                name="name"
                                placeholder="Name*"
                                className="bookingFormInput"
                            />
                            <ErrorMessage name="name" component="span" className={css.error} />
                            
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email*"
                                className="bookingFormInput"
                            />
                            <ErrorMessage name="email" component="span" className={css.error} />
                            
                            <Field
                                type="date"
                                name="bookingDate"
                                placeholder="Booking Date*"
                                className="bookingFormInput"
                            />
                            <ErrorMessage name="bookingDate" component="span" className={css.error} />

                            <Field as="textarea"
                                name="comment"
                                placeholder="Comment"
                                className="bookingFormInput"
                            />
                            <ErrorMessage name="comment" component="span" className={css.error} />

                            <button type="submit" className="bookingFormButton">Send</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}

export default BookingForm;
