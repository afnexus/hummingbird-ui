import { primary } from './Colors';
import { Button } from '@mui/material';

function ColorExample() {
  return (
    <Button style={{ color: primary[800], background: primary[50] }} variant='contained'>Hello</Button>
  );
}

export default ColorExample;
