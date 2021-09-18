import SignUp from "../screens/SignUp/SignUp"
import SignIn from '../screens/SignIn/SignIn'

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
    ]
}

export default routes