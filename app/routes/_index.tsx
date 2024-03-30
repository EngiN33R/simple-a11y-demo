import { type MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Onboarding" },
  ];
};

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/welcome');
  }, [navigate]);

  return null;
}
