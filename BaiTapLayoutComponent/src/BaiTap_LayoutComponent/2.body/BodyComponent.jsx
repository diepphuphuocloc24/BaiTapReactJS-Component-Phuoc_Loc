import React from 'react'
import BannerComponent from './banner/BannerComponent.jsx'
import ItemComponent from './item/ItemComponent.jsx'

const BodyComponent = () => {
    return (
        <div className='my-5'>
            <div className='container mx-auto'>
                <BannerComponent />
                <ItemComponent />
            </div>
        </div>
    )
}

export default BodyComponent
