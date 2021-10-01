import SignUp from "../screens/SignUp/SignUp"
import SignIn from '../screens/SignIn/SignIn'
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword'

import Home from "../screens/Home/Home"
import Profile from "../screens/Profile/Profile"
import Merchants from "../screens/Merchants/Merchants"
import MyVouchers from "../screens/MyVouchers/MyVouchers"
import NewVoucher from "../screens/NewVoucher/NewVoucher"
import MyPayments from "../screens/Payments/MyPayments"

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
        {
            name: "Profile",
            component: Profile,
            options: { headerShown: false }
        },
        {
            name: "My Vouchers",
            component: MyVouchers,
            options: { headerShown: false }
        },
        {
            name: "New Voucher",
            component: NewVoucher,
            options: { headerShown: false }
        },
        {
            name: "Merchants",
            component: Merchants,
            options: { headerShown: false }
        },
        {
            name: "My Payments",
            component: MyPayments,
            options: { headerShown: false }
        },
    ]
}

export default routes