import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About";
import Blog from "../../components/Blog";
import Category from "../../components/Category";
import Course from "../../components/Course";
import CoursesPage from "../../components/CoursesPage";
import Faqs from "../../components/Faqs";
import Home from "../../components/Home";
import LoginForm from "../../components/LoginForm";
import PageNotFound from "../../components/PageNotFound";
import RegisterForm from "../../components/RegisterForm";
import Main from "../../layouts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')

            },
            {
                path: 'courses/',
                element: <CoursesPage></CoursesPage>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/category/:slug',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.slug}`)

            },
            {
                path: '/:slug',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.slug}`)

            },
            {
                path: 'login/',
                element: <LoginForm></LoginForm>
            },
            {
                path: 'register/',
                element: <RegisterForm></RegisterForm>
            },
            {
                path: 'blog/',
                element: <Blog></Blog>
            },
            {
                path: 'faqs/',
                element: <Faqs></Faqs>
            },
            {
                path: 'about/',
                element: <About></About>
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            }

        ]
    }
])