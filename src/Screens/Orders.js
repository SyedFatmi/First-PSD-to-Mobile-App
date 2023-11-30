import * as React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import OrdersTab from '../Components/OrdersTab';

const FirstRoute = () => (
    <View style={{ flex: 1 }} >
        <OrdersTab title="New Orders" />
    </View>
);

const SecondRoute = () => (
    <View style={{ flex: 1 }}>
        <OrdersTab title="Ongoing Orders" />
    </View>
);

const ThirdRoute = () => (
    <View style={{ flex: 1 }} >
        <OrdersTab title="Sent Orders" />
    </View>
);

const FourthRoute = () => (
    <View style={{ flex: 1 }}>
        <OrdersTab title="Completed Orders" />
    </View>
);

const FifthRoute = () => (
    <View style={{ flex: 1 }}>
        <OrdersTab title="Cancelled Orders" />
    </View>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    Third: ThirdRoute,
    Fourth: FourthRoute,
    Fifth: FifthRoute
});

export default function TabViewExample() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'one' },
        { key: 'second', title: 'two' },
        { key: 'Third', title: 'three' },
        { key: 'Fourth', title: 'four' },
        { key: 'Fifth', title: 'five' },
    ]);


    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
        // initialLayout={{ width: layout.width }}
        />
    );
}

const styles = StyleSheet.create({

});