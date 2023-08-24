import { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import stars from '../../../public/icons/stars.svg';
import visibleIcon from '../../../public/icons/visible16x16.svg';
import unVisibleIcon from '../../../public/icons/unvisible16x16.svg';

const PlayerInfo = ({ userName, avatarSrc, rating, balance }) => {
  const [isShowBalance, setIsShowBalance] = useState(true);

  const toggleShowBalance = () => setIsShowBalance(!isShowBalance);

  return (
    <div className='player__info-container'>
      <div className='user-info'>
        <p className='user-info__name'>{userName}</p>
        <img className='user-info__rating' src={stars} alt={`rating-${rating}`} />
      </div>
      <img className='user-avatar' src={avatarSrc} alt='avatar' />
      <div className='btn__balance-container'>
        {isShowBalance ? (
          <div className='btn__balance'>
            <button className='btn__balance-btn' onClick={toggleShowBalance}>
              <img src={visibleIcon} alt='visible' />
            </button>
            <span className='btn__balance-value'>{balance}</span>
          </div>
        ) : (
          <div className='btn__balance btn__balance--green'>
            <button className='btn__balance-btn' onClick={toggleShowBalance}>
              <img src={unVisibleIcon} alt='unvisible' />
            </button>
            <span className='btn__balance-label'>{'Show balance'}</span>
          </div>
        )}
      </div>
    </div>
  );
};

PlayerInfo.propTypes = {
  userName: PropTypes.string,
  avatarSrc: PropTypes.string,
  rating: PropTypes.number,
  balance: PropTypes.string,
};

export { PlayerInfo };
