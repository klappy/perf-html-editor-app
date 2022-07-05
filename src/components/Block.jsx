import React, { useContext } from 'react';

import { AppContext } from '../hooks/App.context';
import { getTarget } from '../core/getTarget';

import PerfEditorWrapper from './PerfEditorWrapper';
import useLifecycleLog from '../hooks/useLifecycleLog';

export default function Block({ content, style, index, verbose, ...props }) {
  const { state: { preview } } = useContext(AppContext);
  
  useLifecycleLog(Block, index);

  let component;
  let editable = !!content.match(/class="[\w\s]*block[\w\s]*"/);

  if (editable) component = <div {...props} />;

  if (!editable) {
    const _sequenceId = getTarget({ content });

    if (_sequenceId && !preview) {
      component = <PerfEditorWrapper sequenceId={_sequenceId} />;
    };
    component ||= <div {...props} contentEditable={false} />;
  };
  
  return component;
};