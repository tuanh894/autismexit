import React, {Component} from "react";
import Setting from "./Setting.js";
import Guide from "../GuideScreen/Guide.js";
import Adviser from "../AdviserScreen/Adviser.js";
import About from "../AboutScreen/About.js";
import DetailGuide from "../GuideScreen/DetailGuide.js";
import DetailAdviser from "../AdviserScreen/DetailAdviser.js";

import {StackNavigator} from "react-navigation";

export default (DrawNav = StackNavigator({
    Setting: {screen: Setting},
    Guide: {screen: Guide},
    About: {screen: About},
    Adviser: {screen: Adviser},
    DetailGuide: {screen: DetailGuide},
    DetailAdviser: {screen: DetailAdviser},

}));
