import styled from '@emotion/styled';

export const Paragraph = styled('p')`
  font-weight: 200;
  font-size: 1.2rem;
  margin-bottom: 25px;
`;



interface FeatureProps {
  description: string
}

export class Feature {
  static List = styled('ul')`
    list-style: none;
    padding: 0 10px;

    & > li:last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  `;

  static Item = styled.li<FeatureProps>`
    font-size: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 10px;
    margin-bottom: 6px;

    font-weight: 600;
    color: #97aefb;

    &::after {
      font-weight: 400;
      color: rgba(255, 255, 255, 0.8);
      content: " - ${({ description }) => description}";
    }
  `;
}
