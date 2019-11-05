import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ContactWeb from './ContactWeb';
import ContactLocal from './ContactLocal';

const MainTabbar = createBottomTabNavigator({
    Web: ContactWeb,
    Local: ContactLocal
});

export default createAppContainer(MainTabbar);