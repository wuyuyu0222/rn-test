import React, { useState } from 'react'
import { SceneMap, TabView, TabBar } from 'react-native-tab-view'
import COLORS from '../constants/Colors'
import { SHARED_STYLE } from '../constants/Styles'

export default function Tabs({ routes }) {
    const [index, setIndex] = useState(0)
    const titles = routes.map(r => ({ key: r.title, title: r.title }))
    const scenes = {}

    routes.forEach(r => {
        scenes[r.title] = r.view
    })

    const renderScene = SceneMap(scenes)

    return (
        <TabView
            navigationState={{ index, routes: titles }}
            renderTabBar={renderTabBar}
            renderScene={renderScene}
            onIndexChange={setIndex}
        />
    )
}

const renderTabBar = props => (
    <TabBar
        {...props}
        getLabelText={({ route }) => route.title}
        activeColor={COLORS.black}
        inactiveColor={COLORS.lightBlack}
        style={{ backgroundColor: COLORS.transparent }}
        labelStyle={[SHARED_STYLE.text, SHARED_STYLE.buttonText]}
        tabStyle={{ minHeight: 24, padding: 4, justifyContent: 'flex-end' }}
        indicatorStyle={{ backgroundColor: COLORS.black, shadowOpacity: 0 }}
    />
)