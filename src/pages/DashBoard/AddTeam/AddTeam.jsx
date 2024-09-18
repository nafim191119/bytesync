import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddTeam = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('https://bytesync-server-phi.vercel.app/team', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data, 
                    email: 'nafim191119@gmail.com'
                }),
            });
    
            if (response.ok) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Team member added successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            } else {
                const errorData = await response.json();
                throw new Error(`Failed to add team member: ${errorData.error}`);
            }
        } catch (error) {
            console.error("Error adding team member:", error.message);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: error.message,
                showConfirmButton: true,
            });
        }
    };

    return (
        <div>
            <div className="py-2">
                <div className="mb-20 bg-black pt-16">
                    <div className="max-w-2xl mx-auto px-4">
                        <h1 className="text-4xl font-bold text-center text-white mb-8 uppercase">
                            Add Team Member
                        </h1>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-medium text-white"
                                >
                                    Name
                                </label>
                                <input
                                    type="name"
                                    id="name"
                                    className="input input-bordered w-full bg-gray-900 text-gray-300 placeholder-gray-500"
                                    placeholder="Team Member Name"
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
                                    Role
                                </label>
                                <input
                                    type="role"
                                    id="role"
                                    className="input input-bordered w-full bg-gray-900 text-gray-300 placeholder-gray-500"
                                    placeholder="Team Member Name"
                                    {...register("role", {
                                        required: "Role is required",
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
                                    Image URL
                                </label>
                                <input
                                    id="imageUrl"
                                    type="url"
                                    {...register("imageUrl", { required: "Image URL is required" })}
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
                                Add Team
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTeam;