import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';

export default function ContextMenu({ children }) {

  return (
    <div onContextMenu={handleContextMenu} style={{}}>
      {children}
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.y, left: contextMenu.x }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>Section Heading</MenuItem>
        <MenuItem onClick={handleClose}>Section Cross Reference</MenuItem>
        <MenuItem onClick={handleClose}>Chapter</MenuItem>
        <MenuItem onClick={handleClose}>Verse</MenuItem>
        <MenuItem onClick={handleClose}>Footnote</MenuItem>
      </Menu>
    </div>
  );
}
