import { type PropsWithChildren} from "react";
import { Navigate } from "react-router";

function PrivateRoute({ children }: PropsWithChildren) {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return <>{children}</>;
    } else{
        return <Navigate to="/login" />;
    }
}
export default PrivateRoute;