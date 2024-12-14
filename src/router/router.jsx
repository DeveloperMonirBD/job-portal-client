import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import JobDetails from '../pages/jobDetails/JobDetails';
import PrivetRoute from './PrivetRoute';
import JobApply from '../pages/jobDetails/JobApply';
import MyApplication from '../pages/MyApplication';
import AddJob from '../pages/AddJob';
import MyPostedJobs from '../Components/MyPostedJobs';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <h2>Route not found</h2>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'jobs/:id',
                element: (
                    <PrivetRoute>
                        <JobDetails />
                    </PrivetRoute>
                ),
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: 'jobApply/:id',
                element: (
                    <PrivetRoute>
                        <JobApply />
                    </PrivetRoute>
                )
            },
            {
                path: 'myApplications',
                element: (
                    <PrivetRoute>
                        <MyApplication />
                    </PrivetRoute>
                )
            },
            {
                path: 'addJob',
                element: (
                    <PrivetRoute>
                        <AddJob />
                    </PrivetRoute>
                )
            },
            {
                path: 'myPostedJobs',
                element: (
                    <PrivetRoute>
                        <MyPostedJobs />
                    </PrivetRoute>
                )
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'signIn',
                element: <SignIn />
            }
        ]
    }
]);

export default router;
