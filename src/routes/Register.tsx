
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";
const Step1 = () => {
    const { register } = useFormContext();
    return (
        <div className="w-full">
            <label className="bg-gray-700 text-white w-full">
                First Name:
                <input className="placeholder:text-gray-600 h-8 w-full border-2 rounded-md" {...register("firstName")} />
            </label>
            <label className="bg-gray-700 text-white w-full">
                Last Name:
                <input className="placeholder:text-gray-600 h-8 w-full border-2 rounded-md" {...register("lastName")} />
            </label>
        </div>
    );
};
const Step2 = () => {
    const { register } = useFormContext();
    return (
        <div className="w-full">
            <label className="bg-gray-700 text-white w-full">
                Username:
                <input className="placeholder:text-gray-600 h-8 w-full border-2 rounded-md" {...register("username")} />
            </label>
            <label className="bg-gray-700 text-white w-full">
                Email:
                <input className="placeholder:text-gray-600 h-8 w-full border-2 rounded-md" {...register("email")} />
            </label>
            <label className="bg-gray-700 text-white w-full">
                Password:
                <input className="placeholder:text-gray-600 h-8 w-full border-2 rounded-md" type="password" {...register("password")} />
            </label>
        </div>
    );
};
const Step3 = () => {
    const { register } = useFormContext();
    return (
        <div className="w-full">
            <label className="bg-gray-700 text-white w-full">
                Address:
                <input className="placeholder:text-gray-600 h-8 w-full border-2 rounded-md" {...register("address")} />
            </label>
            <label className="bg-gray-700 text-white w-full">
                City:
                <input className="placeholder:text-gray-600 h-8 w-full border-2 rounded-md" {...register("city")} />
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
        <div className="flex flex-col items-center mt-10">
            <div className="shadow-xl w-1/4 mt-10">

            <FormProvider {...methods}>
                <form className="flex flex-col gap-6 p-4 border w-full" onSubmit={methods.handleSubmit(onSubmit)}>
                    {step === 1 && <Step1 />}
                    {step === 2 && <Step2 />}
                    {step === 3 && <Step3 />}
                    <div>
                        {step > 1 && <button type="button" className="mx-2 bg-gray-600 py-2 px-3 rounded-lg text-white" onClick={prevStep}>Back</button>}
                        {step < 3 && <button type="button" className="mx-2 bg-gray-600 py-2 px-3 rounded-lg text-white" onClick={nextStep}>Next</button>}
                        {step === 3 && <button type="submit" className="mx-2 bg-gray-600 py-2 px-3 rounded-lg text-white">Submit</button>}
                    </div>
                </form>
            </FormProvider>
            </div>

            <div className="mt-10">Already have an account?<button className="text-blue-600 underline" onClick={()=>handleLogin()}>Login.</button></div>
        </div>
        </>
    );
};
export default Register; 