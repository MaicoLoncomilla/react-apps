import { HomePage } from 'pages/home'
import { Route, Routes } from 'react-router-dom'
import { Layout } from 'src/component/layout'

export const App = () => {
  return (
    <main className="bg-gray-200 dark:bg-slate-800 min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </main>
  )
}
