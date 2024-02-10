'use client';

import * as React from 'react';

import Login from '@/components/Login';
import { Aligning } from '@/styles/form/loginform';

export default function AuthPage() {
  return (
    <Aligning>
      <Login />
    </Aligning>
  );
}
