
import { Game } from '@/app/api';
import GamePages from '../../components/Game/GamePage/GamePages';

export async function getGamePage(context) {
  const {
    params: { game },
  } = context;
  
  const gameCtrl = new Game();
  const response = await gameCtrl.getBySlug(game);

  return {
    game: response
  };
}

export default async function GamePage(props) {
  
  const dataGamePage = await getGamePage(props)
  
  return (
    <>
     <GamePages data = {dataGamePage.game}/>
    </>
  );
}
