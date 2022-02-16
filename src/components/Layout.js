import Widgets from './Widgets';
import Header from './Header';
import Feed from '../Pages/Feed';
import Sidebar from './Sidebar';
import './Layout.css';

function Layout() {
return (
    <>
        <Header /> 

        <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
        </div>

    </>
)
};

export default Layout;
