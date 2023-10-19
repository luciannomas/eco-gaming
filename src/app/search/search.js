import { Game } from '@/app/api';
import  Search from '../../components/Search/Search'
export async function loadSearchGames(context) {
 /*  constsecond {
    query: { s, page = 1 },
  } = context; */
  const { searchParams: { s, page = 1 } } = context;
  const gameCtrl = new Game();
  const response = await gameCtrl.searchGames(s, page);

  return {
      games: response.data,
      pagination: response.meta.pagination,
      searchText: s,
  }
}

export default async function SearchPage(context){
  
  const dataSearch = await loadSearchGames(context);
  
  return (
    <>
      <Search dataSearch = {dataSearch}/>
    </>
  );
}
