import { LoginForm } from "@/components/Auth/LoginForm";
import Link from "next/link";
import { JoinLayout } from "../../../layouts/JoinLayout/page";
import styles from "./sign-in.module.scss";
import { Seo } from '../../../components/Shared/Seo/Seo';


export default function SignInPage() {
  return (
    <>
      <Seo title="Iniciar sesión" />
      <JoinLayout>
        <div>
          <h3>Iniciar sesión</h3>
          <LoginForm />

          <div className={styles.actions}>
            <Link href="/join/sign-up">¿No tienes una cuenta?</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}