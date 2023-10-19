'use client'
import { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from "@/layouts/BasicLayout/BasicLayout";
import { NoResult } from '../Shared/NoResult/NoResult';
import { GridGames, Separator,} from "@/components/Shared/page";
import { Pagination } from '../Shared/Pagination/Pagination';

export default function SearchPage(props) {

  const { games, pagination, searchText } = props.dataSearch;
  const hasResult = size(games) > 0;
  console.log("pagination", pagination)

  useEffect(() => {
    document.getElementById("search-games").focus();
  }, []);

  return (
    <>
      <BasicLayout relative isOpenSearch>
        <Container>
          <Separator height={50} />

          <h2>Buscando: {searchText}</h2>
          {hasResult ? (
            <>
              <GridGames games={games} />
              <Separator height={30} />
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
                slug = "/search?s="
              />
            </>
          ) : (
            <NoResult text="No se han encontrado resultados" />
          )}

          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}
