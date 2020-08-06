import React from 'react';
import Highlight from '../Highlight';

interface Props {
  children: string;
  languages: Array<string>;
  className?: string;
}

const CodeCard: React.FC<Props> = (props: Props) => {
  const { className, children, ...rest } = props;
  const cls = ['codecard hljs', className ? className : ''].join(' ');
  return (
    <div
      className={cls}
      style={{
        padding: '14px',
        position: 'relative',
        overflow: 'auto',
        borderRadius: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.55) 0 8px 16px',
        margin: '1.5rem 0',
      }}
    >
      <div
        className='codecard-head'
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <div
          className='circle red'
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            margin: '0 6px 0 0',
            background: '#ff5f56',
            border: '0.5px solid #e0443e',
          }}
        ></div>
        <div
          className='circle yellow'
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            margin: '0 6px 0 0',
            background: '#ffbd2e',
            border: '0.5px solid #dea123',
          }}
        ></div>
        <div
          className='circle green'
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            margin: '0 6px 0 0',
            background: '#27c93f',
            border: '0.5px solid #1aab29',
          }}
        ></div>
      </div>
      <Highlight {...rest}>{children}</Highlight>
    </div>
  );
};

CodeCard.defaultProps = {
  className: '',
  languages: [],
};

export default CodeCard;
