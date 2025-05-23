import { Outlet } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import FooterSection from './components/Footer/FooterSection'


export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <FooterSection />
        </>
    )
}
