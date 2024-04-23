
import { Provider } from 'react-redux'
import './App.css'
import { store } from './config/redux/store/store'
import { RouterProvider } from 'react-router-dom';
import MainRouter from './routes/MainRouter';

function App() {

    return (
        <Provider store={store}>
            <RouterProvider router={MainRouter} />
        </Provider>
    )
}

export default App
