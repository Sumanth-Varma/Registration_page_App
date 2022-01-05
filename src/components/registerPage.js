import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './styles.css';

class RegisterPage extends React.Component {
    validationSchema() {
        return Yup.object().shape({
            fullname: Yup.string().required('Fullname is required'),
            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid'),
            password: Yup.string()
                .required('Password is required')
                .min(6, 'Password must be at least 6 characters')
                .max(40, 'Password must not exceed 40 characters'),
            confirmPassword: Yup.string()
                .required('Confirm Password is required')
                .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
            phone: Yup.string()
                .required('Phone number is required')
                .max(10, 'Invalid phone number'),
        });
    }
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(data) {
        console.log(JSON.stringify(data, null, 2));
        alert('You are a VALID User!!');
        window.location.replace('/home');
    }
    render() {
        const initialValues = {
          fullname: '',
          email: '',
          password: '',
          confirmPassword: '',
          phone: '',
          acceptTerms: false,
        };

        return (
          <div className="register-form">
          <div className='register-form-body'>
            <h1>Registration Form</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={this.validationSchema}
              onSubmit={this.handleSubmit}
            >
              {({ resetForm }) => (
                <Form>
                  <div className="form-group">
                    <label>Full Name</label>
                    <Field name="fullname" type="text" className="form-control" placeholder="Enter your Name" />
                    <ErrorMessage
                      name="fullname"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <Field name="email" type="email" className="form-control" placeholder="Enter your Email" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="password"> Password </label>
                    <Field name="password" type="password" className="form-control" placeholder="Enter your password" />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="confirmPassword"> Confirm Password </label>
                    <Field name="confirmPassword" type="password" className="form-control" placeholder="Re-enter your Password" />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone</label>
                    <Field name="phone" type="tel" className="form-control" placeholder="Enter your phone number" />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group form-check">
                    <Field name="acceptTerms" type="checkbox" className="form-check-input" />
                    <label htmlFor="acceptTerms" className="form-check-label">
                      I have read and agree to the Terms
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <div className="button-group"> 
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="btn btn-warning float-right"
                    >
                      Reset
                    </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          </div>
        );
      }
}
  
export default RegisterPage;