import SignUp from "../screens/SignUp/SignUp"
import SignIn from '../screens/SignIn/SignIn'
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword'

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
    ]
}

export default routes