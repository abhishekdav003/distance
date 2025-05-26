import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import University from '../pages/University';
import UniversityComparisonPage from '../pages/UniversityComparisonPage.jsx';
import CourseCollegesComponent from '../pages/Courses.jsx'
import UniversityDetailPage from '../pages/UniversityDetailPage.jsx';

const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children:[
                {
                    path: '',  // Changed from '/' to '' for index route
                    element: <Home />
                },
                {
                    path: 'about-us',  // Removed leading slash
                    element: <AboutUs />
                },
                {
                    path: 'compare-colleges',  // Removed leading slash
                    element: <UniversityComparisonPage />
                },
                {
                    path: 'colleges',  // Removed leading slash and moved before dynamic route
                    element: <CourseCollegesComponent />
                },
               {
                    path:'/:university-name',
                    element: <University />
                },
                {
                    path: '/university/:universityId/:courseId',
                    element: <UniversityDetailPage />
                }
                
            ]
        }
    ]
)

export default routes;