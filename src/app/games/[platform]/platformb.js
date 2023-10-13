import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from '@/layouts/BasicLayout/BasicLayout';
import { Platform } from '@/app/api/platform';
import { Game } from '@/app/api';
import { useEffect, useState } from 'react';
import {
  GridGames,
  Separator,
  NoResult,
  Seo,
} from "@/components/Shared/page";

const aux = async () => {

  /* const {
    params: { platform },
    query: { page = 1 },
  } = context; */

  const platformCtrl = new Platform();
  const responsePlatform = await platformCtrl.getBySlug("playstation");

  const gameCtrl = new Game();
  const responseGames = await gameCtrl.getGamesByPlatformSlug("playstation", 1);
  
  return {
    props: {
      platform: responsePlatform,
      games: responseGames.data,
      pagination: responseGames.meta.pagination,
    },
  };
}


export default function PlatformPage() {
  //const { games, platform, pagination } = props;
  //const hasProducts = size(games) > 0;
  const [aa, setaa] = useState();
  console.log("aa", aa)
  //console.log("aaaa verrr:", aa.props)
  // const { games, platform, pagination } = aa.props
  //console.log("games:", games[0].id)

  useEffect(() => {
    (async () => {
      try {
        let a = await aux();
        console.log("que onda el useeefect", a)
        setaa(a)

      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>

      <BasicLayout relative>
        <Container>
          <Separator height={50} />
        
          
          <>dsds</>
          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}
