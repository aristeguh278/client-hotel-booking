import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedProperty from '../../components/featuredProperties/FeaturedProperty'
import Header from '../../components/header/Header'
import MailList from '../../components/mail/MailList'
import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/footer/Footer"

import './home.css'
import PropertyList from '../../components/propertyList/PropertyList'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>

                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>

                <FeaturedProperty />
                <MailList />

                <Footer />
            </div>

        </div>
    )
}

export default Home
