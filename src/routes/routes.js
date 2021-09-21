import SignUp from "../screens/SignUp/SignUp"
import SignIn from '../screens/SignIn/SignIn'
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword'
import Home from "../screens/Home/Home"

const routes = {
    auth: [
        {
            name: "Sign-Up",
            component: SignUp,
            options: { headerShown: false }
        },
        {
            name: "Sign-In",
            component: SignIn,
            options: { headerShown: false }
        },
        {
            name: "Forgot-Password",
            component: ForgotPassword,
            options: { headerShown: false }
        },
    ],
    main: [
        {
            name: "Home",
            component: Home,
            options: { headerShown: false }
        },
    ]
}

export default routes