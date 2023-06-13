import { useEffect } from "react";

const Login = ({ content }: { content: string }) => {
  useEffect(() => {
    document.title = 'Log In - Sign Up | Airbnb clone';
  }, []);
  return <>{content}</>;
};

export default Login;
