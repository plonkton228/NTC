import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routs from './modules/Routing/Routs';
import { Provider } from 'react-redux';
import { setUpStore } from './store';
import Cookies from 'js-cookie';
import axios from 'axios';
import { reAuthUser } from './store/actions/reducers/reAuthUserReducer';




const store = setUpStore();
const accessToken = Cookies.get('token');
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
   <BrowserRouter>
    <React.StrictMode>
     <Routs/>
    </React.StrictMode>
   </BrowserRouter>
  </Provider>
 
 
);

if(accessToken)
{ 
axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
axios.get("http://127.0.0.1:8080/auth/me")
.then(res => store.dispatch(reAuthUser(res.data.username)))
}


 