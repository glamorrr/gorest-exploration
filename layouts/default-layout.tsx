import { Navbar } from '@/components/navbar';
import { Box, Container, Typography } from '@mui/material';

type Props = {
  children?: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Container maxWidth="sm" sx={{ flex: 1, my: 4, pb: 2 }}>
        {children}
      </Container>
      <Box py="24px" px="16px">
        <Typography fontSize="14px" color="text.disabled" textAlign="center">
          Synapsis Challenge © 2024. Made with ❤
        </Typography>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
