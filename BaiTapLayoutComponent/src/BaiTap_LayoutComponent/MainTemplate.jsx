import React from 'react'
import HeaderComponent from './1.header/HeaderComponent'
import FooterComponent from './3.footer/FooterComponent'
import BodyComponent from './2.body/BodyComponent'

const MainTemplate = () => {
    return (
        <div>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </div>
    )
}

export default MainTemplate
