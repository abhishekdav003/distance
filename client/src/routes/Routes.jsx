import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import University from '../pages/University';
import UniversityComparisonPage from '../pages/UniversityComparisonPage.jsx';
// import Courses from '../pages/Courses.jsx';
import CourseCollegesComponent from '../pages/Courses.jsx'


const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children:[
                {
                    path:'/',
                    element: <Home />
                },
                {
                    path:'about-us',
                    element: <AboutUs />
                },
                {
                    path:'compare-colleges',
                    element: <UniversityComparisonPage />
                },
                {
                    path:'/:university-name',
                    element: <University />
                },
                {
                    path: '/colleges',
                    element: <CourseCollegesComponent />
                }
            ]
        }
    ]
)

export default routes;