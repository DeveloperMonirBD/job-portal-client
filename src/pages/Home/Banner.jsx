import { motion } from 'framer-motion';
import team1 from '../../assets/team-1.jpg'
import team3 from '../../assets/team-3.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        src={team1}

                        animate={{ y: [30, 60, 20]}}
                        transition={{duration: 15, repeat:Infinity}}
                        className="max-w-sm w-72 rounded-t-[36px] rounded-br-[36px] border-l-4 border-b-4 shadow-2xl" />
                    
                    <motion.img
                        src={team3}

                        animate={{ x: [200, 150, 200]}}
                        transition={{duration: 15, delay: 2, repeat:Infinity}}
                        className="max-w-sm w-56 rounded-t-[36px] rounded-br-[36px] border-l-4 border-b-4 shadow-2xl" />
                </div>
                <div className="flex-1">
                    <motion.h1 animate={{ x: 30 }} transition={{ duration: 2, delay: 1, ease: 'linear', repeat: Infinity }} className="text-5xl font-bold">
                        Latest{' '}
                        <motion.span animate={{ color: ['#acff33', '#82ff33', '#33ff77', '#33ffc0 ', '#33f9ff ', '#3350ff ', '#8233ff', '#e633ff', '#ff33c6 ', '#ff335a '] }} transition={{ duration: 1.5, repeat: Infinity}}>
                            Jobs
                        </motion.span>{' '}
                        For You!
                    </motion.h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
