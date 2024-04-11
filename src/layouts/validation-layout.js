import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { verifyUsers } from "../http/post";
import { useEffect } from "react";

function ValidationLayout() {
  const navigate = useNavigate();

  const {
    isLoading: verifyUserIsLoading,
    refetch: verifyUserRefetch,
    isError: verifyUserIsError,
    error: verifyUserError,
  } = useQuery({
    queryKey: ["verify-user"],
    // queryFn: ({ signal }) => verifyUsers({ signal }),
    gcTime: 0,
    staleTime: Infinity,
  });

  useEffect(() => {
    verifyUserRefetch();
  }, [navigate, verifyUserRefetch]);

  useEffect(() => {
    if (verifyUserIsError) {
      if (verifyUserError.code === 500) {
        navigate("/SignIn");
      }
    }
    // eslint-disable-next-line
  }, [verifyUserError, verifyUserIsError, navigate]);

  return (
    <>
      {verifyUserIsError && <div>{verifyUserError.message}</div>}
      {verifyUserIsLoading ? (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Loading...
        </p>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default ValidationLayout;
