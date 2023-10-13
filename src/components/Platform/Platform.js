'use client'
import { Seo } from "../Shared/page";
import { BasicLayout } from '@/layouts/BasicLayout/BasicLayout';
import { Container } from 'semantic-ui-react';
import { Separator, GridGames } from '@/components/Shared/page';
import { size } from "lodash";
import { NoResult } from '../Shared/NoResult/NoResult';
import { Pagination } from '../Shared/Pagination/Pagination';

export function Platform(props) {
  const { games, platform, pagination } = props.dataPlatform;
  const hasProducts = size(games) > 0;
  
  return (
    <>
      <Seo title={`Juegos de ${platform.attributes.title}`} />

      <BasicLayout relative>
        <Container>
          <Separator height={50} />
        
          <h2>{platform.attributes.title}</h2>

          {hasProducts ? (
            <>
              <GridGames games={games} />
              <Separator height={30} />
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
                slug = {platform.attributes.slug}
              />
            </>
          ) : (
            <NoResult
              text={`La categoria ${platform.attributes.title} aun no tiene productos`}
            />
          )}

          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}
