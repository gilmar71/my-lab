/* Components */
import { Container } from 'components/data/container';
import { Form, InputComponent } from 'components/data/inputs/core';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { appContext } from 'src/contexts/MainContext/MainContext';

/* Styles */
import * as S from './styles';

export function Banner() {
  const [input, setInput] = useState({
    name: '',
    surname: '',
  });

  const [user, setUser] = useState({
    name: '',
    surname: '',
  });

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser({
        name: '',
        surname: '',
      });
    }
  });
  const handleLogin = () => {
    localStorage.setItem('user', JSON.stringify(input));
    setUser(input);
  };
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser({
      name: '',
      surname: '',
    });
  };
  return (
    <S.Banner>
      <Container>
        <h1>Login</h1>

        <input
          type="text"
          onChange={(e) =>
            setInput({ name: e.target.value, surname: e.target.value })
          }
        />
        <input type="text" />
        <button onClick={handleLogin} type="submit">
          Login
        </button>
        <button onClick={handleLogout}>Logout</button>
        <h2>{user.name}</h2>
      </Container>
    </S.Banner>
  );
}
