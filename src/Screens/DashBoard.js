import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBoardOrders from '../Screens/DashboardOrders'
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SideMenu from './SideMenu';
import Orders from './Orders';
import mainProfile from './MainProfile';


const Tab = createBottomTabNavigator();

const CustomIcon = ({
    isFocused,
    seletedIcon,
    unSelectedIcon,
    type,
    style,
}) => {
    return (
        <View style={{ alignItems: 'center' }}>
            {/* <Icon
                type={type}
                name={isFocused ? seletedIcon : unSelectedIcon}
                color={isFocused ? COLORS.primary : COLORS.brownGrey}
                size={SIZES.twentyFive * 1.05}
            /> */}
            <Icon
                name={isFocused ? seletedIcon : unSelectedIcon}
                color={isFocused ? '#102689' : '#bfc7d7'}
                size={10 * 2.7}

            // style={styles.leftArrow}
            />
        </View>
    );
};


function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false, tabBarShowLabel: false }}
        >
            <Tab.Screen
                name="DashBoardOrders"
                component={DashBoardOrders}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <CustomIcon
                            isFocused={focused}
                            seletedIcon={'signal-cellular-alt'}
                            unSelectedIcon={'signal-cellular-alt'}
                        />
                    ),
                }}

            />
            <Tab.Screen
                name="verifyOTP"
                component={Orders}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <CustomIcon
                            isFocused={focused}
                            seletedIcon={'shopping-cart'}
                            unSelectedIcon={'shopping-cart'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="MainProfile"
                component={mainProfile}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <CustomIcon
                            isFocused={focused}
                            seletedIcon={'person'}
                            unSelectedIcon={'person'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="SideMenu"
                component={SideMenu}
                options={{
                    tabBarIcon: ({ color, focused, size }) => (
                        <CustomIcon
                            isFocused={focused}
                            seletedIcon={'menu'}
                            unSelectedIcon={'menu'}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({

});

export default MyTabs;