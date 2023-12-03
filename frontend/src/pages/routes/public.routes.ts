import { RouteProps } from "react-router-dom"
import { ROUTES } from "../../shared/constants"
import { HomePage } from "../home.page"

type PublicRouteConfig = RouteProps & {
  element: React.ComponentType
}

export const publicRoutes: PublicRouteConfig[] = [
  {
    path: ROUTES.home,
    // @ts-expect-error
    element: HomePage,
  },
]
