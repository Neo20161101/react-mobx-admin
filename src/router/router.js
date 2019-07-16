import Loadable from 'react-loadable';
const Loading = () => "<div>Loading...</div>";


const TodoView = Loadable({
    loader: () => import('../home/home/index'),
    loading: Loading,
});

const About = Loadable({
    loader: () => import('../About/About/index'),
    loading: Loading,
});
export default [
    {
        path: '/',
        name: 'TodoList',
        component: TodoView
    },
    {
        path: '/page/about',
        name: 'About',
        component: About
    }
]