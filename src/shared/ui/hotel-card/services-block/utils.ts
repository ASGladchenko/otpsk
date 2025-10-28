import { Icons, HotelAmenitiesType } from '@shared';

export const ServicesMock = {
  wifi: { Icon: Icons.Wifi, title: 'Wi-Fi' },
  parking: { Icon: Icons.Parking, title: 'Парковка' },
  tennis_court: { Icon: Icons.TennisCourt, title: 'Тенісний корт' },
  laundry: { Icon: Icons.Laundry, title: 'Пральня' },
  aquapark: { Icon: Icons.Aquapark, title: 'Аквапарк' },
};

export const prepareData = (services: HotelAmenitiesType) => {
  const actualServices = Object.entries(services).filter(
    ([, value]) => value === 'yes'
  );

  return actualServices.map(([key]) => ({
    ...(
      ServicesMock as Record<
        string,
        { Icon: React.FC<React.SVGProps<SVGSVGElement>>; title: string }
      >
    )[key],
  }));
};
