import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ArrowDown } from "heroicons-react";



const Faq = () => {
    return (
        <div>
            <div className="mx-4 md:mx-16 my-6 lg:my-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
                    <p className="text-lg md:text-xl text-gray-400 mt-2">Your Questions Answered: Insights into Our Process and Services</p>
                </div>
                <div className="">
                    <Accordion className="bg-black text-white rounded-lg shadow-md">
                        <AccordionSummary
                            expandIcon={<ArrowDown className="text-black" />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className="border-b"
                        >
                            <span className="font-semibold text-base md:text-lg lg:text-xl">What types of businesses do you work with?</span>
                        </AccordionSummary>
                        <AccordionDetails className="p-4">
                            We work with a wide range of businesses, from startups to established enterprises across various industries.
                            Our solutions are customized to fit the unique needs of each client.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="bg-gray-800 text-white rounded-lg shadow-md">
                        <AccordionSummary
                            expandIcon={<ArrowDown className="text-black" />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            className="border-b border-gray-700"
                        >
                            <span className="font-semibold text-base md:text-lg lg:text-xl">How long does it take to complete a project?</span>
                        </AccordionSummary>
                        <AccordionDetails className="p-4">
                            Project timelines vary depending on the scope and complexity. On average, web development projects take 3-8 weeks,
                            while more advanced solutions like AI or blockchain may take longer. We ensure timely delivery with clear milestones.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="bg-gray-800 text-white rounded-lg shadow-md">
                        <AccordionSummary
                            expandIcon={<ArrowDown className="text-black" />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                            className="border-b border-gray-700"
                        >
                            <span className="font-semibold text-base md:text-lg lg:text-xl">How do you ensure the security of my project?</span>
                        </AccordionSummary>
                        <AccordionDetails className="p-4">
                            We take security seriously, using industry-standard protocols such as data encryption, secure coding practices,
                            and regular security audits to ensure the safety of your information and applications.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="bg-gray-800 text-white rounded-lg shadow-md">
                        <AccordionSummary
                            expandIcon={<ArrowDown className="text-black" />}
                            aria-controls="panel4-content"
                            id="panel4-header"
                            className="border-b border-gray-700"
                        >
                            <span className="font-semibold text-base md:text-lg lg:text-xl">What is your approach to client collaboration?</span>
                        </AccordionSummary>
                        <AccordionDetails className="p-4">
                            We believe in transparency and constant communication. Our team keeps you updated at every stage, with regular progress
                            reports and opportunities for feedback to ensure your vision is fully realized.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="bg-gray-800 text-white rounded-lg shadow-md">
                        <AccordionSummary
                            expandIcon={<ArrowDown className="text-black" />}
                            aria-controls="panel6-content"
                            id="panel6-header"
                            className="border-b border-gray-700"
                        >
                            <span className="font-semibold text-base md:text-lg lg:text-xl">How do I get started with Byte Sync?</span>
                        </AccordionSummary>
                        <AccordionDetails className="p-4">
                            You can get started by contacting us through our website's contact form or emailing us directly.
                            We’ll arrange a consultation to understand your requirements and provide a tailored solution for your business.
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>

        </div>
    );
};

export default Faq;