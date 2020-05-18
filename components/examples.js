/* eslint-disable camelcase */
import useSWR from 'swr';

import A from './elements/a';
import Li from './elements/li';
import Ul from './elements/ul';

const fetcher = async (path) => {
  const res = await fetch(path);

  return res.json();
};

const Examples = () => {
  const { data, error } = useSWR(
    'https://api.github.com/repositories/70107786/contents/examples',
    fetcher
  );

  if (error) {
    return <div>Failed to load examples.</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Ul>
      {data.map(({ name, html_url }) => (
        <Li key={html_url}>
          <A href={html_url}>{name}</A>
        </Li>
      ))}
    </Ul>
  );
};

export default Examples;
/* eslint-enable camelcase */
