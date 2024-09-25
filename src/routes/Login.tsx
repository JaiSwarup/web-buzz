import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import useAuthStore from "../stores/authStore"


type Inputs = {
  username: string
  password: string
}


export default function App() {
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const login = useAuthStore((state:any) => state.login)
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const string = localStorage.getItem("user")
    if (!string) {
      return
    }
    let user:any = JSON.parse(string)
    console.log(user)
    console.log(data)
    if (data.username === user.username && data.password === user.password) {
      console.log("Logged in")
      login()
      navigate('/discover')
    } else {
      console.log(data.username == user.username)
      console.log(data.password == user.password)
      console.log("Invalid credentials")
    }
  }

  const handleRegister = () => {
    navigate('/register')
  }


  return (
    <div className="flex flex-col items-center mt-10">
        <div className="shadow-xl w-1/4 mt-10">
        <form onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 p-4 border">
            <div>
                <div className="bg-gray-700 text-white w-full">Enter Your Username</div>
                <input {...register("username", { required: true })} placeholder="Username" className="placeholder:text-gray-600 h-8 w-full border-2 rounded-md"/>
                {errors.username && <span>This field is required</span>}
                </div>
            <div>
                <div className="bg-gray-700 text-white w-full">Enter Your password</div>
                <input {...register("password", { required: true })} placeholder="Password" className="placeholder:text-gray-600 h-8 w-full border-2 rounded-md"/>
                {errors.password && <span>This field is required</span>}
            </div>
          <button type="submit">Submit</button>
        </form>
        </div>
        <div className="mt-10">Don't have an account?<button className="text-blue-600 underline" onClick={()=>handleRegister()}>Register</button></div>
    </div>
  )
}