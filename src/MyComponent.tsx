import {
  AppliedPrompts,
  Context,
  onDrillDownFunction,
  ResponseData,
  TContext
} from '@incorta-org/component-sdk';
import React from 'react';
import SpreadsheetDemo from './components/SpreadsheetDemo';
interface Props {
  context: Context<TContext>;
  prompts: AppliedPrompts;
  data: ResponseData;
  drillDown: onDrillDownFunction;
}

const MyComponent = ({ context, prompts, data, drillDown }: Props) => {
  console.log({ context, prompts, data, drillDown });
  return (
    <div className="test">
      <SpreadsheetDemo />
    </div>
  );
};

export default MyComponent;
