import { render } from '@testing-library/react';

import MyorgComponents from './components';

describe('MyorgComponents', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<MyorgComponents />);
    expect(baseElement).toBeTruthy();
  });
  
});
