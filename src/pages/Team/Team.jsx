import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch("https://bytesync-server-9t3y.onrender.com/team")
            .then((data) => data.json())
            .then((res) => setTeam(res));
    }, []);

    return (
        <div className="py-2">
            <div className="bg-black px-4 py-12 sm:py-16">
                <div className="text-center text-white mb-16">
                    <h2 className="text-4xl font-bold sm:text-4xl uppercase tracking-tight pb-3">Our Success Team</h2>
                    <p className="text-xl text-semibold">
                        Our team of experts combines experience and creativity. We're here to deliver solutions that exceed expectations.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {team.map((person) => (
                        <TeamCard key={person.name} item={person} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
