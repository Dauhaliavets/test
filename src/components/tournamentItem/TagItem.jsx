import PropTypes from 'prop-types';
import iconSrcBounty from '../../../public/icons/type/Bounty.svg';
import iconSrcFreeRoll from '../../../public/icons/type/FreeRoll.svg';
import iconSrcKnockout from '../../../public/icons/type/Knockout.svg';
import iconSrcProBounty from '../../../public/icons/type/ProBounty.svg';
import iconSrcRapid from '../../../public/icons/type/Rapid.svg';
import iconSrcTime from '../../../public/icons/type/Time.svg';
import './styles.less';

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

export { TagItem };
