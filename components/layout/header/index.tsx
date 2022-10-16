/* Next/React */
import { useState } from 'react';
import { useRouter } from 'next/router';

/* Components */

/* Styles */
import * as S from './styles';
import { Container } from '../../data/container';
import { Button } from '../../data/button';

export function HeaderComponent() {
  return (
    <S.Header>
      <Container>
        <h1>My work Lab</h1>
        <Button text="Menu" />
      </Container>
    </S.Header>
  );
}
