import { Field, Formik,Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import UserServices from "../services/UserServices";
import { createSession }  from "../store/slices/userSclice";
import { useNavigate } from "react-router";


const loginSchema = Yup.object().shape({
    email:Yup.string().email("Invalid email").required("Email is required"),
    password:Yup.string().min(6,"Password must be at least 6 characters").required("Password is required")
});

function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialValues ={
        email:"",
        password:""
    };
    const doLogin = async(value:any)=>{
        try{
            const res =await UserServices.login(value.email,value.password);
            console.log("success",res.data);
            dispatch(createSession(res.data));
            navigate("/")
        }catch(e){
            console.log("error",e);
        }
    }
    return (
        <Formik initialValues={initialValues} 
        validationSchema={loginSchema}
        onSubmit={(values)=>doLogin(values)}>
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
export default  Login;