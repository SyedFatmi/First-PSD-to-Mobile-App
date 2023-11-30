// import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Signup from '../Screens/Signup';
import ForgetPassword from '../Screens/ForgetPassword';
import VerifyOTP from '../Screens/VerifyOTP';
import ResetPassword from '../Screens/ResetPassword'
import DashBoard from '../Screens/DashBoard'
import DashBoardOrders from '../Screens/DashboardOrders'
import Notifications from '../Screens/Notifications';
import SideMenu from '../Screens/SideMenu';
import Setting from '../Screens/Setting';
import PrivacyPolicy from '../Screens/PrivacyPolicy';
import Support from '../Screens/Support';
import ChangePassword from '../Screens/ChangePassword';
import DeactivateAccount from '../Screens/DeactivateAccount';
import Orders from '../Screens/Orders';
import MainProfile from '../Screens/MainProfile';
import DetailProducts from '../Screens/DetailProducts';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
    animation: 'slide_from_right',
};

export default function MainNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={screenOptions}
                initialRouteName={'Home'}>
                <Stack.Screen name={'Home'} component={Home} />
                <Stack.Screen name={'Signup'} component={Signup} />
                <Stack.Screen name={'ForgetPassword'} component={ForgetPassword} />
                <Stack.Screen name={'verifyOTP'} component={VerifyOTP} />
                <Stack.Screen name={'resetpassword'} component={ResetPassword} />
                <Stack.Screen name={'Dashboard'} component={DashBoard} />
                <Stack.Screen name={'DashboradOrders'} component={DashBoardOrders} />
                <Stack.Screen name={'Notifications'} component={Notifications} />
                <Stack.Screen name={'SideMenu'} component={SideMenu} />
                <Stack.Screen name={'Setting'} component={Setting} />
                <Stack.Screen name={'PrivacyPolicy'} component={PrivacyPolicy} />
                <Stack.Screen name={'Support'} component={Support} />
                <Stack.Screen name={'ChangePassword'} component={ChangePassword} />
                <Stack.Screen name={'DeactivateAccount'} component={DeactivateAccount} />
                <Stack.Screen name={'Orders'} component={Orders} />
                <Stack.Screen name={'MainProfile'} component={MainProfile} />
                <Stack.Screen name={'DetailProducts'} component={DetailProducts} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}