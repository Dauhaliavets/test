import { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import iconSrcBounty from '../../../public/icons/type/Bounty.svg';
import iconSrcFreeRoll from '../../../public/icons/type/FreeRoll.svg';
import iconSrcKnockout from '../../../public/icons/type/Knockout.svg';
import iconSrcProBounty from '../../../public/icons/type/ProBounty.svg';
import iconSrcRapid from '../../../public/icons/type/Rapid.svg';
import iconSrcTime from '../../../public/icons/type/Time.svg';

/**
 *
 * @param {{
 * type: string,
 * }} props Props for the component
 *
 */

const TagItem = ({ type }) => {
  let iconSrc;

  switch (type) {
    case 'time':
      iconSrc = iconSrcTime;
      break;
    case 'freeRoll':
      iconSrc = iconSrcFreeRoll;
      break;
    case 'rapid':
      iconSrc = iconSrcRapid;
      break;
    case 'knockout':
      iconSrc = iconSrcKnockout;
      break;
    case 'bounty':
      iconSrc = iconSrcBounty;
      break;
    case 'proBounty':
      iconSrc = iconSrcProBounty;
      break;

    default:
      break;
  }

  return <img src={iconSrc} alt={type} className='main__info-tags--type' />;
};

TagItem.propTypes = {
  type: PropTypes.string.isRequired,
};

/**
 *
 * @param {{
 * id: number,
 * isCanceled: boolean,
 * isPin: boolean,
 * tag: string,
 * types: string[],
 * title: string,
 * date: string,
 * players: {
 *   current: number,
 *   max: number,
 * },
 * tourney: number,
 * }} props Props for the component
 *
 */

const TournamentItem = ({ isCanceled, isPin, tag, types, title, date, players, tourney }) => {
  const [selected, setSelected] = useState(false);

  const toogleSelect = () => setSelected(!selected);

  return (
    <li className={selected ? 'item item--selected' : 'item'} onClick={toogleSelect}>
      {isCanceled ? (
        <div className='item__label item__label--canceled'>{'Canceled'}</div>
      ) : (
        <div className='item__label'>{'Registering'}</div>
      )}
      <div className='item__content'>
        <div className='item__content-main'>
          <div className='main__info'>
            <div className='main__info-tags'>
              {isPin && <span className='main__info-tags--pin'></span>}
              <span className='main__info-tags--main'>{tag}</span>
              {types.map((type, ind) => (
                <TagItem key={ind} type={type} />
              ))}
            </div>
            <h5 className='main__info-title'>{title}</h5>
          </div>
          <button className='main__btn' disabled={isCanceled}>
            {isCanceled ? 'Canceled' : 'Join table'}
          </button>
        </div>
        <div className='item__content-about'>
          <span className='about__item about__item-time'>{date}</span>
          <span className='about__item about__item-player'>{`${players.current}/${players.max}`}</span>
          <span className='about__item about__item-tourney'>{tourney}</span>
        </div>
      </div>
    </li>
  );
};

TournamentItem.propTypes = {
  id: PropTypes.number.isRequired,
  isCanceled: PropTypes.bool.isRequired,
  isPin: PropTypes.bool.isRequired,
  tag: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  players: PropTypes.shape({
    current: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }),
  tourney: PropTypes.number.isRequired,
};

export { TournamentItem };
