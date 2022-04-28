import { lazy } from 'react'

// import { mainConfig } from '../config'

const Home = lazy(() => import('./Home'))
const Thanks = lazy(() => import('./Thanks'))
// const About = lazy(() => import('./About'))
// const Help = lazy(() => import('./Help'))
const Page404 = lazy(() => import('./Route404'))

const routes = [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: Thanks,
    path: '/thanks',
    exact: true
  },
  {
    component: Page404
  }
]

export default role => {
  const routesForRole = routes.filter(
    route => !route.roles || route.roles.includes(role)
  )

  return {
    sidebar: routesForRole.filter(route => !!route.name),
    browser: routesForRole
      .reduce(
        (routes, route) => [
          ...routes,
          ...(route.childrens ? route.childrens : [route])
        ],
        []
      )
      .filter(route => !!route.component)
  }
}
