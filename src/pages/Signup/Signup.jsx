import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign In Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
                reset();
            })
    };

    return (
        <div className="py-2">
            <div className="min-h-screen bg-black py-12">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-center text-white mb-8 uppercase">
                        Signup
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-lg font-medium text-white"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="input input-bordered w-full bg-gray-900 text-gray-300 placeholder-gray-500"
                                placeholder="Your Name"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-lg font-medium text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="input input-bordered w-full bg-gray-900 text-gray-300 placeholder-gray-500"
                                placeholder="Your Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-lg font-medium text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="input input-bordered w-full bg-gray-900 text-gray-300 placeholder-gray-500"
                                placeholder="Your Password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters long",
                                    },
                                })}
                            />
                            {errors.password && (
                                <span className="text-red-500 text-sm">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-full bg-blue-600 text-white hover:bg-blue-500"
                        >
                            Signup
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
