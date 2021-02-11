import { FunctionComponent } from 'react';
import styled from 'styled-components';

const HeroWidget = styled.section`
  min-height: 35vh;
  display: grid;
  justify-items: center;
  align-content: center;
`;

interface IHeroPost {
  title: string;
  subtitle: string;
}

const HeroPost: FunctionComponent<IHeroPost> = ({ title, subtitle }) => {
  return (
    <article>
      <HeroWidget>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href="#"></a>
      </HeroWidget>
    </article>
  );
};

export default HeroPost;
