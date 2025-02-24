/* eslint-disable indent */
import useRoutesElements from './routes/routes.js'
import MainLayout from './layouts/MainLayout/MainLayout.jsx'

const App = () => {
  const elements = useRoutesElements()
  return (
    <MainLayout>
      <div className='container'>{elements}</div>
      <div id='portal-root' />
    </MainLayout>
  )
}

export default App
