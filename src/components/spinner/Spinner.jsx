import spinnerImg from '../../../public/spiner.svg';
import './styles.less';

export const Spinner = () => {
  return (
    <div className='spinner-container'>
      <img className='spinner' src={spinnerImg} alt={'spiner'} />
    </div>
  );
};
