import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando se o componente não aparece caso o campo e-mail esteja vazio.', () => {
  render(<ValidEmail email="" />)
  const isValidText = screen.queryByTestId('id-is-email-valid');
  expect(isValidText).not.toBeInTheDocument();
});