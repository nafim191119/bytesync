import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddService = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/service', data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Service added successful",
                showConfirmButton: false,
                timer: 1500
            });
            reset();
        } catch (error) {
            console.error("Error adding team member:", error);
        }
    };
    return (
        <div>
            <div className="py-2">
                <div className="mb-20 bg-black pt-16">
                    <div className="max-w-2xl mx-auto px-4">
                        <h1 className="text-4xl font-bold text-center text-white mb-8 uppercase">
                            Add New Service
                        </h1>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-medium text-white"
                                >
                                    Service Name
                                </label>
                                <input
                                    type="name"
                                    id="name"
                                    className="input input-bordered w-full bg-gray-900 text-gray-300 placeholder-gray-500"
                                    placeholder="Service Name"
                                    {...register("name", {
                                        required: "Name is required",
                                    })}
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
                                    Description
                                </label>
                                <textarea
                                    maxLength={400}
                                    type="additional_info"
                                    id="additional_info"
                                    className="input input-bordered w-full bg-gray-900 text-gray-300 placeholder-gray-500"
                                    placeholder="Description"
                                    {...register("additional_info", {
                                        required: "description is required",
                                    })}
                                />
                                {errors.role && (
                                    <span className="text-red-500 text-sm">
                                        {errors.role.message}
                                    </span>
                                )}
                            </div>

                            <div>
                                <label htmlFor="imageUrl" className="block text-lg font-medium text-white">
                                    Service Image URL
                                </label>
                                <input
                                    id="image"
                                    type="imageURL"
                                    {...register("image", { required: "Image URL is required" })}
                                    className="input input-bordered w-full bg-gray-900 text-gray-300 placeholder-gray-500"
                                    placeholder="Enter Image URL"
                                />
                                {errors.imageUrl && (
                                    <span className="text-red-500 text-sm">{errors.imageUrl.message}</span>
                                )}
                            </div>


                            <button
                                type="submit"
                                className="btn btn-primary w-full bg-blue-600 text-white hover:bg-blue-500"
                            >
                                Add Service
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;