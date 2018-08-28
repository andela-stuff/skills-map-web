import React from 'react';

export class LoadingPlaceholder extends React.PureComponent {
  render() {
    const loadingElements = 'a word that contains 34 characters'.split('');
    return (
      <div className='text-input__loading'>
        {
          loadingElements.map((item, index) => {
            return (
              <div key={index} className='text-input__loading--line'></div>
            );
          })
        }
      </div>
    );
  }
}

export default LoadingPlaceholder;
