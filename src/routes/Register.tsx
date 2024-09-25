
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";
const Step1 = () => {
    const { register } = useFormContext();
    return (
        <div>
            <label>
                First Name:
                <input {...register("firstName")} />
            </label>
            <label>
                Last Name:
                <input {...register("lastName")} />
            </label>
        </div>
    );
};
const Step2 = () => {
    const { register } = useFormContext();
    return (
        <div>
            <label>
                Username:
                <input {...register("username")} />
            </label>
            <label>
                Email:
                <input {...register("email")} />
            </label>
            <label>
                Password:
                <input type="password" {...register("password")} />
            </label>
        </div>
    );
};
const Step3 = () => {
    const { register } = useFormContext();
    return (
        <div>
            <label>
                Address:
                <input {...register("address")} />
            </label>
            <label>
                City:
                <input {...register("city")} />
            </label>
        </div>
    );
};
const Register = () => {
    const navigate = useNavigate();
    const methods = useForm();
    const [step, setStep] = useState(1);
    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);
    const login = useAuthStore((state: any) => state.login);
    const onSubmit = (data: any) => {
        localStorage.setItem("user", JSON.stringify(data));
        login();
        navigate("/");
    };
    const handleLogin = () => {
        navigate("/login");
    };
    return (
        <>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {step === 1 && <Step1 />}
                {step === 2 && <Step2 />}
                {step === 3 && <Step3 />}
                <div>
                    {step > 1 && <button type="button" onClick={prevStep}>Back</button>}
                    {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
                    {step === 3 && <button type="submit">Submit</button>}
                </div>
            </form>
        </FormProvider>
        
        <div className="mt-10">Already have an account?<button className="text-blue-600 underline" onClick={()=>handleLogin()}>Login.</button></div>
        </>
    );
};
export default Register; 