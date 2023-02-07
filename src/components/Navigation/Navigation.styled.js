import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  color: brown;
  &:hover,
  &:focus,
  &.active {
    color: blue;
  }
`;
