import React from 'react';
import { useDeepCompareMemo } from 'use-deep-compare';
import { AccordionSummary, Typography } from '@mui/material';
import useLifecycleLog from '../hooks/useLifecycleLog';

export default function SectionHeading({ type: _type, content, show, index, ...props }) {
  useLifecycleLog(SectionHeading, index);

  let type = index && `Chapter ${index}`;
  type ||= (_type === "main") ? "Title & Introduction" : _type;

  const component = useDeepCompareMemo(() => (
    <AccordionSummary {...props}>
      <Typography className="sectionHeading" variant="h5">
        {type}
      </Typography>
    </AccordionSummary>
  ), [props, type]);

  return component;
};
