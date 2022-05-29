import { Outlet } from 'react-router-dom'
import { Header } from 'src/component/header'

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
