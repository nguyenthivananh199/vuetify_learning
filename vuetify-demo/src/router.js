import Home from './components/Home.vue';
import project from './components/Project.vue';
import team from './components/Team.vue';
import MyProject from './components/MyProject.vue';
export default[
    {path:'/',component: Home},
    {path:'/projects',component: project},
    {path:'/team',component: team},
    {path:'/myprojects',component: MyProject},
]