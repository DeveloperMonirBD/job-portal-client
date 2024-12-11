import logo from '../../assets/logo.png'
const Footer = () => {

    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
                <div className="flex items-center gap-1">
                    <img className="w-16 shadow-lg" src={logo} alt="" />
                    <h3>Job Portal</h3>
                </div>
                <p>
                    Job Portal Industries Ltd.
                    <br />
                    Providing reliable job since 2024
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;