import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const timestamp = new Date().toISOString();
            const dataWithTimestamp = { ...data, timestamp };
        
            const response = await fetch('https://bytesync-server-9t3y.onrender.com/client', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataWithTimestamp),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to submit the form.');
            }

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your message has been sent successfully",
                showConfirmButton: false,
                timer: 1500
            });
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: error.message || 'Failed to submit the form.',
                showConfirmButton: true,
            });
        }
    };
    

    return (
        <div className="py-2">
            <div className="min-h-screen bg-black py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-center text-white mb-8 uppercase">
                        Get in Touch with Us
                    </h1>

                    <p className="text-lg text-center text-gray-300 mb-12">
                        Have a question or want to start a project? We’d love to hear from you! Fill out the form below or reach us through our contact details, and we’ll get back to you shortly.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
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
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
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
                                        htmlFor="message"
                                        className="block text-lg font-medium text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        className="textarea textarea-bordered w-full h-32 bg-gray-900 text-gray-300 placeholder-gray-500"
                                        placeholder="Your Message"
                                        {...register("message", { required: "Message is required" })}
                                    ></textarea>
                                    {errors.message && (
                                        <span className="text-red-500 text-sm">
                                            {errors.message.message}
                                        </span>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-full bg-blue-600 text-white hover:bg-blue-500"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y4 text-gray-300">
                            <div className="flex justify-center items-center gap-12 mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Contact Info</h2>
                                    <p className="mt-2">
                                        Email:{" "}
                                        <a
                                            href="mailto:info@bytesync.com"
                                            className="text-blue-500 hover:underline"
                                        >
                                            bytesync1@gmail.com
                                        </a>
                                    </p>
                                    <p>
                                        Phone:{" "}
                                        <a href="tel:+880123456789" className="text-blue-500 hover:underline">
                                            +880-1844662344
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Our Location</h2>
                                    <p className="mt-2">
                                        Byte Sync Tech IT Firm,
                                        <br /> Mirpur, Dhaka, Bangladesh
                                    </p>
                                </div>
                            </div>

                            <div>
                                <iframe
                                    className="w-full h-80 rounded-lg shadow-lg"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902096761479!2d90.39267231536372!3d23.750917494604264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374b9923248349eb%3A0x32c5b2b5f4d1a56a!2sDhaka%20IT%20Park!5e0!3m2!1sen!2sbd!4v1625847775083!5m2!1sen!2sbd"
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Byte Sync Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
