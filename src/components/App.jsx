import { PlayerInfo } from './playerInfo/PlayerInfo';
import './styles.less';
import { userData } from '../constants/userData';
import { Spinner } from './spinner/Spinner';
import { Loader } from './loader/Loader';

export const App = () => {
  return (
    <div className='app-container'>
      <h2 className='app-title'>Poker</h2>
      <div className='spinner-wrapper'>
        <Spinner />
      </div>
      <div className='player-info-wrapper'>
        <PlayerInfo {...userData} />
      </div>

      <Loader />
    </div>
  );
};
