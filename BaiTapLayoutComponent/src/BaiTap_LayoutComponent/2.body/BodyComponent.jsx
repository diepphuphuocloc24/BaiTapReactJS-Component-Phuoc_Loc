import React from 'react'
import BannerComponent from './banner/BannerComponent.jsx'
import ItemComponent from './item/ItemComponent.jsx'

const BodyComponent = () => {
    return (
        <div className='container mx-auto mt-5'>
            <BannerComponent />
            <ItemComponent />
        </div>
    )
}

export default BodyComponent
