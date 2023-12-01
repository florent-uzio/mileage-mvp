import { Route, Routes } from "react-router-dom"
import { publicRoutes } from "."
import { AppLayout } from "../../app-layout/app-layouts"

export const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map(({ element: Component, ...rest }) => {
        return (
          <Route
            key={rest.path}
            {...rest}
            element={
              <AppLayout>
                <Component />
              </AppLayout>
            }
          />
        )
      })}
      {/* <Route path="/" element={<MileagesPage />} /> */}

      {/* <Route path="/" element={<Navigate replace={true} to={ROUTES.} />} /> */}
    </Routes>
  )
}
