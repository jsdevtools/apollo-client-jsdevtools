import React from 'react';
import styled from '@emotion/styled';

import MenuItem from './menu-item';
import LogoutButton from '../containers/logout-button';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/profile.svg';
import { colors, unit } from '../styles';

const Container = styled('footer')({
  flexShrink: 0,
  marginTop: 'auto',
  backgroundColor: 'white',
  color: colors.textSecondary,
  position: 'sticky',
  bottom: 0,
});

const InnerContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  maxWidth: 460,
  padding: unit * 2.5,
  margin: '0 auto',
});

export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        <MenuItem style={{ textDecoration: 'none' }} to="/">
          <HomeIcon
            style={{
              display: 'block',
              width: 60,
              margin: `0 auto ${unit}px`,
              fill: `${colors.secondary}`,
            }}
          />
          <span
            style={{
              flexGrow: 1,
              width: 0,
              fontFamily: 'inherit',
              fontSize: 20,
              color: 'inherit',
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            Home
          </span>
        </MenuItem>
        <MenuItem style={{ textDecoration: 'none' }} to="/cart">
          <CartIcon
            style={{
              display: 'block',
              width: 60,
              margin: `0 auto ${unit}px`,
              fill: `${colors.secondary}`,
            }}
          />
          <span
            style={{
              flexGrow: 1,
              width: 0,
              fontFamily: 'inherit',
              fontSize: 20,
              color: 'inherit',
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            Cart
          </span>
        </MenuItem>
        <MenuItem style={{ textDecoration: 'none' }} to="/profile">
          <ProfileIcon
            style={{
              display: 'block',
              width: 60,
              margin: `0 auto ${unit}px`,
              fill: `${colors.secondary}`,
            }}
          />
          <span
            style={{
              flexGrow: 1,
              width: 0,
              fontFamily: 'inherit',
              fontSize: 20,
              color: 'inherit',
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            Profile
          </span>
        </MenuItem>
        <LogoutButton />
      </InnerContainer>
    </Container>
  );
}
