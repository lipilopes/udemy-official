import { useParams, useLocation, useHistory } from 'react-router-dom';

export const Abc = () => {
  const { slug, name } = useParams();
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <h1>ABC</h1>
      <h3>slug: {slug}</h3>
      <h3>name: {name}</h3>
      <h3>Location: {location}</h3>
      <h3 onClick={() => history.push('/')}>history: {history}</h3>
    </>
  );
};
