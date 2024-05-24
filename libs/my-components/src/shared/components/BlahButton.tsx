import { Button } from '@mui/material';

export const BlahButton = ({
  label,
}: {label?: string}) => {
  return (
    <Button>
        {label}
    </Button>
  );
};
