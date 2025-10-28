import { Button } from '@shared/ui';
import { useTourHotel } from '@features';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

import { DetailedCard, DetailedCardData } from './ui';

import './style.scss';

export const HotelPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { id } = useParams();
  const priceId = searchParams.get('priceId') ?? '';

  const backToSearch = () => {
    navigate('/', { replace: true });
  };

  const { data, isLoading } = useTourHotel({
    id,
    priceId,
    onError: backToSearch,
  });

  const isData = Object.keys(data || {}).length > 0;

  return (
    <section className="hotel-page">
      <Button
        as="link"
        to="/"
        className="hotel-page__back-button"
      >{`< Назад до пошуку`}</Button>

      {!isLoading && isData && <DetailedCard data={data as DetailedCardData} />}

      {isLoading && <h3>Loading...</h3>}
    </section>
  );
};
