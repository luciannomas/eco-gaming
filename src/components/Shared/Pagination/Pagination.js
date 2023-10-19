import { Pagination as PaginationSU } from "semantic-ui-react";
import { useRouter } from "next/navigation";
import styles from "./Pagination.module.scss";

export function Pagination(props) {
  const { currentPage, totalPages, slug } = props;
  const router = useRouter();

  const onPageChange = (_, data) => {
    const { activePage } = data;
    
    router.replace(slug+'?page='+ activePage);
    //router.replace({ query: { ...router.query, page: activePage } }); // old version
  };

  return (
    <div className={styles.container}>
      <PaginationSU
        defaultActivePage={currentPage}
        totalPages={totalPages}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        onPageChange={onPageChange}
      />
    </div>
  );
}
