
import NavBar from '../components/Shared/NavBar/NavBar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-120px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;