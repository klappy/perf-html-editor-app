export const getTypeFromPerf = ({ htmlPerf, sequenceId }) => {
  const sequenceHtml = htmlPerf?.sequencesHtml[sequenceId];
  let type = getTypeFromSequenceHtml({ sequenceHtml });

  if (type === 'main') {
    const { h, toc, toc2 } = htmlPerf?.metadata?.document || {};
    type = toc || toc2 || h;
  };

  return type;
};

export const getTypeFromSequenceHtml = ({ sequenceHtml }) => {
  let type = sequenceHtml?.match(/data-type="(\w+)"/);
  type &&= type[1];
  return type;
};
