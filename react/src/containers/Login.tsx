import { Field, Formik,Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    email:Yup.string().email("Invalid email").required("Email is required"),
    password:Yup.string().min(6,"Password must be at least 6 characters").required("Password is required")
});
function login(){
    const initialValues ={
        email:"",
        password:""
    };
    return (
        <Formik initialValues={initialValues} 
        validationSchema={loginSchema}
        onSubmit={(values)=>console.log(values)}>
            <Form>
                <Field name = "email" type="email" placeholder="email"/>
                <ErrorMessage name="email"/>
                <Field name = "password" type="password" placeholder="password"/>
                <ErrorMessage name = "password"/>
                <button type="submit">Login</button>
            </Form>
        </Formik>
    )
}
export default login;