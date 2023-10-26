import { Basket } from "./Basket/page";
import { Resume } from "./Resume/page";
import styles from "./StepOne.module.scss";

export function StepOne(props) {
  const { games } = props;

  return (
    <div className={styles.stepOne}>
      <div className={styles.center}>
        <Basket games={games} />
      </div>
      <div className={styles.right}>
        <Resume games={games} />
      </div>
    </div>
  );
}
