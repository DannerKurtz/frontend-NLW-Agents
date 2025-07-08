import { Navigate, useParams } from 'react-router';

type RoomParams = {
  roomId: string;
};

export function Room() {
  const params = useParams<RoomParams>();

  if (!params.roomId) {
    return (
      <Navigate
        replace={true}
        to='/'
      />
    );
  }

  return <div>{params.roomId}</div>;
}
