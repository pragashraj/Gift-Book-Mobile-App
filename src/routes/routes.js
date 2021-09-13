import SignUp from "../screens/SignUp"
import SignIn from '../screens/SignIn'

const routes = {
    auth: [
        {
            name: "Sign-Up",
            component: SignUp,
            Options: { headerShown: true }
        },
        {
            name: "Sign-In",
            component: SignIn,
            Options: { headerShown: false }
        },
    ]
}

export default routes