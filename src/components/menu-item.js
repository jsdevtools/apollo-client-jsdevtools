/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import css from '@emotion/css';
import { Link } from '@reach/router';
import { colors, unit } from '../styles';

export const menuItemClassName = css({
  flexGrow: 1,
  width: 0,
  fontFamily: 'inherit',
  fontSize: 20,
  color: 'inherit',
  letterSpacing: 1.5,
  textTransform: 'uppercase',
  textAlign: 'center',
  svg: {
    display: 'block',
    width: 60,
    margin: `0 auto ${unit}px`,
    fill: colors.secondary
  }
});

const MenuItem = styled(Link)`
  textDecoration: 'none'
`;

export default MenuItem;
