import React, {Component} from "react";
import HomeScreen from "./HomeScreen.js";
import Profile from "../ProfileScreen/index.js";
import Exam from "../ExamScreen/index.js";
import News from "../NewsScreen/index.js";
import Rank from "../RankScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import {DrawerNavigator} from "react-navigation";
import Semester from "../SemesterScreen/index.js";
import HighSchool from "../HighSchoolScreen/index.js";
import Setting from "../SettingScreen/index.js";
import Login from "../LoginScreen/index.js";
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
        Login: {screen: Login},Chat: { screen: MainScreenNavigator },
        Detail: {screen: Detail},
        ListScreen: {screen: ListScreen},
        TabSystem: {screen: TabSystem},
        TabEdu: {screen: TabEdu},
        Setting: {screen: Setting}
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default SideBarRouter;
