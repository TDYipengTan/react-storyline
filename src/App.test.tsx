import { act, render } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('react', function () {
  it('app', function () {
    act(() => {
      render(<App />);
    });

    let header = document?.querySelector('.header');
    expect(header).not.toBeNull();
  });
});
