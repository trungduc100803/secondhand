import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/componentsSub/SideBar/SideBar'
import RoutesConfig from './config/routes'
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import DiffirentLayout from './components/DiffirentLayout/DiffirentLayout';
import SideBarLayout from './components/SideBarLayout/SideBarLayout';
import JustChilLayout from './components/JustChilLayout/JustChilLayout';
import Model from './components/Model/Model';
import './Responsive.css'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {RoutesConfig.map((route, i) => {
            const Page = route.component
            let Layout = DefaultLayout
            if(route.diffirentLayout == true){
              Layout = DiffirentLayout
            }
            if(route.sideBarLayout == true){
              Layout = SideBarLayout
            }
            if(route.justChilLayout == true){
              Layout = JustChilLayout
            }
            return <Route key={i} path={route.path} element={
              <Layout sideBar = {<SideBar/>}>
                <Page/>
              </Layout>
            }/>
          }
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
