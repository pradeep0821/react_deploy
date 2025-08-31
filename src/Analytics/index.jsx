import AnalaticalTable from "./Table";
import { Box, Typography } from "@mui/material";

const Analytics = () => {
  return (
    <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
      <Typography
        variant="h6"
        align="center"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "0.9rem", sm: "1.2rem", md: "1.5rem" },
          mb: { xs: 2, sm: 3 },
        }}
      >
        SHER ABHI APNI SKILLS PR KAAM KR RHA HAI JALD HI CHARCHE ME AAYEGA
        (BANE RHE)
      </Typography>

      <Box sx={{ mt: { xs: 2, sm: 3 } }}>
        <AnalaticalTable />
      </Box>
    </Box>
  );
};

export default Analytics;
