import PropTypes from "prop-types";
import {
  Box,
  Card,
  Paper,
  Typography,
  CardHeader,
  CardContent,
  Link,
} from "@mui/material";

SuggestedStudyMaterial.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function SuggestedStudyMaterial({
  title,
  subheader,
  list,
  ...other
}) {
  return (
    <Card {...other} sx={{ height: "100%" }}>
      <CardHeader title={title} subheader={subheader} />

      <CardContent sx={{ padding: '0' }}>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          {list.map((site) => (
            <Paper
              key={site.name}
              variant="outlined"
              sx={{
                py: 2.5,
                textAlign: "center",
                cursor: "pointer",
                minWidth: '150px',
              }}
            >
              <Box sx={{ mb: 0.5 }}>{site.icon}</Box>
              <Link href={site.link}> Go to</Link>

              <Typography variant="h6" sx={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{site.value}</Typography>

              <Typography variant="body2" sx={{ color: "text.secondary", fontSize: '0.8rem' }}>
                {site.name}
              </Typography>
            </Paper>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
