

const Team = () => {
    return (
        <div>
            <div className="max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Meet our Team Member</h2>
                <p className="mt-6 text-lg leading-8 text-gray-400 px-4">
                    BYTE SYNC's elite team: Your strategic partners in navigating the digital frontier.
                </p>
            </div>
            <div className="md:flex justify-center items-center gap-6 md:gap-16 mx-8">
                <div className="card">
                    <div className="avatar mx-auto">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-80 ring-offset-0.3">
                            <img src="https://i.ibb.co/dBP34wX/IMG-20240215-WA005822.jpg" />
                        </div>
                    </div>
                    <div className="card-body mx-auto">
                        <h2 className="card-title">Md. Nafim Islam<br /> </h2>
                        <span className="text-xl mx-auto text-primary">Web developer</span>

                        {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Details</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Md. Nafim Islam</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog> */}


                    </div>

                </div>
                <div className="card">
                    <div className="avatar mx-auto">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-80 ring-offset-0.3">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="card-body mx-auto">
                        <h2 className="card-title">Ahasan Ullah<br /> </h2>
                        <span className="text-xl mx-auto text-primary">Web developer</span>

                        {/* <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Details</button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Ahasan Ullah</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog> */}


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Team;