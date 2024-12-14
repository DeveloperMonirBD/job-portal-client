/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const { _id, title, company_logo, company, requirements, description, location, salaryRange, category, deadline } = useLoaderData();
    
    return (
        <div className="m-10">
            <h2 className="text-3xl">Job Details for {title}</h2>
            <p>Apply for: {company}</p>
            <p>Dedline: {deadline}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className="btn btn-primary mt-4">Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;