import type { RootState } from "../store";
import { type PropsWithChildren} from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function PrivateRoute({ children }: PropsWithChildren) {
  const isLoggedIn = useSelector((state: RootState) => !!state.user);
  if (isLoggedIn) {
    return <>{children}</>;
    } else{
        return <Navigate to="/login" />;
    }
}
export default PrivateRoute;