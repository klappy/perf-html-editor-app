import { useContext } from "react";
import { Skeleton, Stack } from "@mui/material";

import { AppContext } from "../hooks/App.context";
import useLifecycleLog from "../hooks/useLifecycleLog";

import PerfEditorWrapper from "./PerfEditorWrapper";

export default function Editor() {
  const { state: { sequenceIds, isSaving, isLoading } } = useContext(AppContext);
  const sequenceId = sequenceIds.at(-1);

  useLifecycleLog(Editor);
  const style = (isSaving || isLoading || !sequenceId) ? { cursor: 'progress' } : {};

  const skeleton = (
    <Stack spacing={1}>
      <Skeleton key='1' variant="text" height="8em" sx={{ bgcolor: 'white' }} />
      <Skeleton key='2' variant="rectangular" height="16em" sx={{ bgcolor: 'white' }} />
      <Skeleton key='3' variant="text" height="8em" sx={{ bgcolor: 'white' }} />
      <Skeleton key='4' variant="rectangular" height="16em" sx={{ bgcolor: 'white' }} />
    </Stack>
  )

  return (
    <div className="Editor" style={style}>
      {sequenceId ? <PerfEditorWrapper sequenceId={sequenceId} /> : skeleton}
    </div>
  );
};
