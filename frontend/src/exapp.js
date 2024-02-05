
import SignIn from './components/SignIn-Admin';
import Nav from './components/NavBar';
import './App.css';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import AdminChoose from './components/AdminChoose';
import AdminPage from './components/AdminPage';
import LawyerDashboard from './components/AdminDashboard';
import CommentDashboard from './components/CommentDashboard';
import LawyerAccount from './components/LawyerAccount';


function App() {
    // Example Lawyer Info
    const lawyerInfo = {
      id:12,
      status: 'pending',
      image: '../media/lawyer.jpg',
      name: 'John Doe',
      speciality: 'Criminal Law',
      address: '123 Main Street, Cityville',
      languages: ['English', 'Spanish'],
      rating: 4.8,
      years: 15,
      password: '123466',
      wilaya: 'Annaba',
      practiseArea: "child abuse , crime international , blah , example..",
      about:
        "Safety and security in our daily lives -- it's something we all take for granted until harm comes to your or a loved one because of another person's bad choice. I dedicate my law practice to helping those harmed by others. This includes not only financial compensation, but also obtaining a sense of justice and accountability for those responsible",
    };
  
  return (


<Router>
    <div className="App">
      

      <div className='login'>
        <Switch>
          <Route exact path="/"  >
          <Nav />
          <SignIn />

          </Route>

          <Route path="/HomeAdmin">
            <div className='HomeContent'>
              <AdminPage />
              <AdminChoose />

            </div>
            

          </Route>

          <Route path='/AccountsDashbord'>
            <AdminPage />
            <h1>Admin Dashboard</h1>
            <LawyerDashboard />
          </Route>
          <Route path='/CommentsDashbord'>
            <AdminPage />
            <CommentDashboard />
          </Route>
          <Route path='/Account'>
            <AdminPage />
            <LawyerAccount />
          </Route>
        </Switch>
      </div>      
    </div>
    </Router>
  );
};
export default App;
