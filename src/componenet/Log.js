import React from 'react';
import Fragment from 'react';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';




const Log = () => {

const formInitialSchema={ email:'',password:''};  



const formValidationSchema = yup.object().shape({
    email: yup.string().required('Email is required'),
    password: yup.string().required('password required')
});
    const handleFormSubmit=(values)=>{
        console.log( values)
    }
    return (
        <div>
            <Fragment>
           <Formik initialValues={formInitialSchema} onSubmit={(values=> handleFormSubmit(values))} formValidationSchema={formValidationSchema}>
            
            <Form>
                <Field type="email" name="email" placeholder="enter email" className="form-control "/>
                <p className="text-denger"> <ErrorMessage name="email"/></p>

                <Field type="password" name="password" placeholder="enter password" className="form-control "/>
                <p className="text-denger"> <ErrorMessage name="email"/></p>
                     
                <button type="submit" className="btn btn-primary   ">Login</button>
            </Form>
           </Formik>
            </Fragment>
        </div>
    )
}

export default Log;
