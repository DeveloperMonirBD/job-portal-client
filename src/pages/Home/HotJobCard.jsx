/* eslint-disable react/prop-types */
import { CiLocationOn } from 'react-icons/ci';
import { FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    const {_id, company_logo, company, requirements, description, location, salaryRange, category } = job;
    return (
        <div className="card card-compact bg-gray-900 shadow-xl pt-4 pb-2 rounded-2xl">
            <div className="flex gap-2 m-2">
                <figure>
                    <img className="w-16" src={company_logo} alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-2xl">{company}</h4>
                    <p className="flex items-center gap-1 text-base">
                        <CiLocationOn />
                        {location}
                    </p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {category}!<div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="flex gap-2 flex-wrap">
                    {requirements.map((skill, i) => (
                        <p key={i} className="border border-gray-500 rounded-lg text-center px-2 hover:text-blue-300">
                            {skill}
                        </p>
                    ))}
                </div>
                <div className="card-actions justify-end  items-center mt-3">
                    <p className="flex items-center text-xs">
                        Salary: <FaDollarSign /> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
                    </p>

                    <Link to={`/jobs/${_id}`} >
                        <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;
