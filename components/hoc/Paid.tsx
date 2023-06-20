"use client"

import { ReactNode, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const Paid = ({ children }:{children:ReactNode}) => {
  const { data: session, status: sessionStatus } = useSession();

  const [isLoading, setIsLoading] = useState(true);
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    if (sessionStatus === "loading") {
      setIsLoading(true);
      return;
    }

    if (!session) {
      setIsLoading(false);
      return;
    }

    const getUser = async () => {
      try {
        const response = await axios.post("/api/getUser", {
          username: session?.user?.name,
          email: session?.user?.email,
        });

        if (response.data.payment.paid) {
          setGranted(true);
        }

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };

    getUser();
  }, [session, sessionStatus]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (!session) {
    return <p>You are not logged in.</p>;
  } else if (!granted) {
    return <p>You haven't paid for the feature.</p>;
  } else {
    return <div className="">{children}</div>;
  }
};

export default Paid;
