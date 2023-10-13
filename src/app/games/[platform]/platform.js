// import { Container } from "semantic-ui-react";
import { Game } from '@/app/api';
import { Platform as PlatformCtrl } from '@/app/api/platform';
import { Platform } from '../../../components/Platform/Platform';

async function loadPlatform(platform, page) {

  const platformCtrl = new PlatformCtrl();
  const responsePlatform = await platformCtrl.getBySlug(platform);

  const gameCtrl = new Game();
  const responseGames = await gameCtrl.getGamesByPlatformSlug(platform, page);
  
  return {
    platform: responsePlatform,
    games: responseGames.data,
    pagination: responseGames.meta.pagination,
  };
}

export default async function PlatformPage(context) {

  const { params , searchParams: { page = 1 }, } = context;
  const dataPlatform = await loadPlatform(params.platform, page);
  
  return (
    <>
      <Platform dataPlatform={dataPlatform} />
    </>
  );
}
