import { PlayerInfo } from './playerInfo/PlayerInfo';
import './styles.less';
import { userData } from '../constants/userData';
import { Spinner } from './spinner/Spinner';
import { Loader } from './loader/Loader';
import { tourmanentDate } from '../constants/tournament';
import { TournamentItem } from './tournamentItem/TournamentItem';

export const App = () => {
  const tournamentItems = tourmanentDate.map((item) => <TournamentItem key={item.id} {...item} />);

  return (
    <div className='app-container'>
      <h2 className='app-title'>Poker</h2>

      <div className='spinner-wrapper'>
        <Spinner />
      </div>

      <div className='player-info-wrapper'>
        <PlayerInfo {...userData} />
      </div>

      <div className='loader-wrapper'>
        <Loader />
      </div>

      <ul className='tournament__list'>{tournamentItems}</ul>
    </div>
  );
};
