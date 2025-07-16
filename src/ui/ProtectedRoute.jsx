import PropTypes from "prop-types";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

const FullPageSpinner = styled.div`
  height: 100vh;
  background-color: var(--color-grei-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  //2. If there is no authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isLoading && !isAuthenticated) navigate("/login");
    },
    [isLoading, isAuthenticated, navigate]
  );

  //3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPageSpinner>
        <Spinner />
      </FullPageSpinner>
    );
  //4. If there IS  an user, render the app
  if (isAuthenticated) return children;
}
export default ProtectedRoute;
