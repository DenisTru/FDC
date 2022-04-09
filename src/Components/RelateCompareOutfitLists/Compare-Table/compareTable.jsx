import React from 'react';

export default function compareTable({ compare, stopComparing }) {
  if (compare) {
    console.log('COMPARING');
    return (
      <div> </div>
    );
  }
  console.log('NOT COMPARING');
  return (
    <div> </div>
  );
}
