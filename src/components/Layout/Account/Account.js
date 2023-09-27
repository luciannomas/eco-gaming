import { Button, Icon, Label } from "semantic-ui-react";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { useAuth } from "@/hooks";
import styles from "./Account.module.scss";

export function Account() {
  const { user } = useAuth();
  // const { total } = useCart();
  const total = 5;
  const router = useRouter();

  const goToLogin = () => router.push("/join/sign-in");
  const goToAccount = () => router.push("/account");

  const goToCart = () => {
    if (!user) goToLogin();
    else router.push("/cart");
  };

  return (
    <div className={styles.account}>
      <Button icon className={styles.cart}>
        <Icon name="cart" onClick={goToCart} />
        {total > 0 && <Label circular>{total}</Label>}
      </Button>

      <Button icon className={classNames({ [styles.user]: user })}>
        <Icon name="user outline" onClick={user ? goToAccount : goToLogin} />
      </Button>
    </div>
  );
}
