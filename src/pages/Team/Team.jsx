import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch("../../../public/team.json")
            .then((data) => data.json())
            .then((res) => setTeam(res));
    }, []);

    return (
        <div>
            <div className="bg-white px-4 py-12 sm:py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 sm:text-4xl uppercase tracking-tight pb-3">Our Success Team</h2>
                    <p className="text-xl text-gray-600 text-semibold">
                        Our team of experts combines experience and creativity. We're here to deliver solutions that exceed expectations.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                    {team.map((person) => (
                        <TeamCard key={person.name} item={person} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;