import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { RootState } from '../../store/store';

interface ProtectedRouteProps extends RouteProps {}
const ProtectedRoute = ({ children, ...rest }: ProtectedRouteProps) => {
  const sesion = useSelector((state: RootState) => state.Sesion)

  const toRender =({ location }: {location: any}) => {
    if(sesion.token) {
      return children
    } else {
      return <Redirect to={{
        pathname: "/login",
        state: { from: location }
      }} />
    }
  }

  return <Route {...rest} render={toRender} />
}

// const Evaluador = ({ isAuth=false }: { isAuth: boolean }) => {
//   return isAuth ? <Redirect  to="/" />
// }

export default ProtectedRoute;