'use client'

import { BasicLayout } from '@/layouts/BasicLayout/BasicLayout';
import { Separator } from '../../Shared/Separator/Separator';
import { Seo } from '../../Shared/Seo/Seo';
import { Game } from '../page';


export default function GamePage(props) {
  
  const { data: game } = props;
  console.log("props", game)  
  const wallpaper = game.attributes.walpaper;
  console.log("wallpaper", wallpaper.data.attributes.url)


  return (
    <>
      <Seo
        title={game.attributes.title}
        description={game.attributes.summary}
      />

      <BasicLayout>
        <Game.HeaderWallpaper image={`http://localhost:1337${wallpaper.data.attributes.url}`}/>
        <Game.Panel gameId={game.id} game={game.attributes} />

        <Separator height={50} />

        <Game.Info game={game.attributes} />

        <Separator height={30} />

        {/* <Game.Media
          video={game.attributes.video}
          screenshots={game.attributes.screenshots.data}
        /> */}

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}