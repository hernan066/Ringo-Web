import "./auth.css";

import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <main className="auth__container">
      
      <section className="auth__form">
        <LoginForm routeNav={'/'}/>
      </section>
    </main>
  );
};
