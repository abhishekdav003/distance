import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import University from '../pages/University';


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
                    path:'/:university-name',
                    element: <University />
                },
            ]
        }
    ]
)

export default routes;