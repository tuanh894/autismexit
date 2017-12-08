import React, {Component} from "react";
import HomeScreen from "./HomeScreen.js";
import Profile from "../ProfileScreen/index.js";
import Exam from "../ExamScreen/index.js";
import News from "../NewsScreen/index.js";
// import DrawNav from '../NewsScreen/index';
import Rank from "../RankScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import {DrawerNavigator, StackNavigator, TabNavigator} from "react-navigation";
import Semester from "../SemesterScreen/index.js";
import HighSchool from "../HighSchoolScreen/index.js";
import Setting from "../SettingScreen/index.js";
import Logout from "../LoginScreen/index.js";
import ListScreen from "../ListScreen/index.js";
import TabSystem from "../NewsScreen/TabSystem.js";
import MainScreenNavigator from "../ChatScreen/index.js";
import Detail from "../ChatScreen/Detail.js";
import TabEdu from "../ListScreen/edu.js";


const SideBarRouter = DrawerNavigator(
    {
        Home: {screen: HomeScreen},
        Exam: {screen: Exam},
        Semester: {screen: Semester},
        HighSchool: {screen: HighSchool},
        Rank: {screen: Rank},
        News: {screen: News},
        Profile: {screen: Profile},
        Setting: {screen: Setting},
        Login: {screen: Logout},
        // Detail: {screen: Detail},
        // ListScreen: {screen: ListScreen},
        // TabSystem: {screen: TabSystem},
        // TabEdu: {screen: TabEdu},
    },
    {
        contentComponent: props => <SideBar {...props} />,
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#063f77',
            itemStyle: {
                borderBottomWidth:1,
                borderBottomColor: '#95b0e2',
            }

        }
    }
);

export default SideBarRouter;
