import './App.css';
import { RouterProvider, createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom';
import Root from "../Components/Root/Root";
import Posts from "../Components/Posts/Posts";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route path="/" element={ <Posts/> }/>
      <Route path="/:subreddit" element={ <Posts/> }/>
    </Route>
  ));

  return (
    <div>
      <RouterProvider router={ router } />
    </div>

  );
}

export default App;
