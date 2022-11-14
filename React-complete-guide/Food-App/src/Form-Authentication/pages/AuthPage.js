import AuthForm from "../Auth/AuthForm";
import classes from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <section className={classes.formContainer}>
      <AuthForm />
    </section>
  );
};

export default AuthPage;
