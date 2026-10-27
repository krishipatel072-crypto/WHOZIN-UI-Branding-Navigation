import { Route, Routes } from 'react-router'
import Layout from './components/layout/Layout.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import { ROUTES } from './routes.js'

// Swap a ComingSoon element for the real page when it is merged,
// e.g. element={<Login />}
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.search} element={<ComingSoon title="Find events" />} />
        <Route
          path={ROUTES.createEvent}
          element={<ComingSoon title="Create an event" />}
        />
        <Route path={ROUTES.login} element={<ComingSoon title="Log in" />} />
        <Route path={ROUTES.signup} element={<ComingSoon title="Sign up" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
