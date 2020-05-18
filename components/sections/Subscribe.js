import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Button } from '../shared';

const Input = styled.input`
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  font-weight: 300;
  font-family: 'Open Sans';
  height: 40px;
  padding: 28px 18px;
  width: 100%;
  margin-right: 8px;
  margin-bottom: 8px;

  @media screen and (min-width: 484px) {
    margin-bottom: 0;
  }
`;

const Form = styled.form`
  max-width: 500px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 8px;
  flex-direction: column;

  @media screen and (min-width: 484px) {
    flex-direction: row;
  }
`;

const Error = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const Subscribe = () => {
  const [error, setError] = useState('');
  const inputEl = useRef(null);
  const router = useRouter();

  const subscribe = async (e) => {
    e.preventDefault();

    const req = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const res = await req.json();

    if (res.error) {
      setError(res.error);

      return;
    }

    window.fathom.trackGoal('U59TLCT5', 0);
    inputEl.current.value = '';
    router.push('/success');
  };

  return (
    <>
      <Form>
        <Input
          aria-label="Email Address"
          name="email"
          placeholder="Your Email Address"
          ref={inputEl}
          type="text"
        />
        <Button
          onClick={subscribe}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          {'Subscribe'}
        </Button>
      </Form>
      <Error>{error}</Error>
    </>
  );
};

export default Subscribe;
