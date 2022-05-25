import { act, render } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('react', function () {
  it('app', function () {
    act(() => {
      render(<App />);
    });

    const app = document?.querySelector('.app');
    expect(app).not.toBeNull();
  });
});
