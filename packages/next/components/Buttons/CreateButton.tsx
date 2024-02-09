'use client';

import * as React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function CreateButton() {
  return (
    <div className="py-6">
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        size="large"
        className="px-4 py-2 border rounded-md bg-[#1976d2]"
      >
        Create
      </Button>
    </div>
  );
}
