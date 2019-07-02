import * as React from 'react';
import { ShapeProps } from './ShapeAsset';

export const ShapeArrow1: React.FC<ShapeProps> = ({ width, height, backgroundColor, borderColor, borderWidth }) => (
  <svg version='1.0' xmlns='http://www.w3.org/2000/svg'
    width={width} height={height} viewBox='0 0 18.000000 20.000000'
    preserveAspectRatio='xMidYMid meet'>
    <metadata>
      Created by potrace 1.15, written by Peter Selinger 2001-2017
  </metadata>
    <g transform='translate(0.000000,20.000000) scale(0.100000,-0.100000)'
      fill={backgroundColor} stroke={borderColor} strokeWidth={borderWidth}>
      <path d='M45 150 l49 -50 -49 -50 -49 -50 45 0 c41 0 49 5 94 50 l49 50 -49 50 c-45 45 -53 50 -94 50 l-45 0 49 -50z' />
    </g>
  </svg>
)