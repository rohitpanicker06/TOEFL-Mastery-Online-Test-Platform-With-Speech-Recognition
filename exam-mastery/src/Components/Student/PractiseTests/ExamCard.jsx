import {
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Typography,
  Box,
  Chip,
  AvatarGroup,
  Avatar,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActions } from "@mui/material";
import { purple, cyan, teal, deepOrange } from "@mui/material/colors";
import formatDate from "../../../utils/formatDate";
import ReadingIcon from "@mui/icons-material/AutoStories";
import ListeningIcon from "@mui/icons-material/Hearing";
import WritingIcon from "@mui/icons-material/Description";
import SpeakingIcon from "@mui/icons-material/RecordVoiceOver";
import { useTheme } from "@emotion/react";

// import Link from "next/link";
import { Link as RouterLink } from "react-router-dom";

function getComponent(category) {
  if (category === "Reading")
    return <ReadingIcon sx={{ fontSize: 20, color: purple[500] }} />;
  if (category === "Listening")
    return <ListeningIcon sx={{ fontSize: 20, color: cyan[500] }} />;
  if (category === "Writing")
    return <WritingIcon sx={{ fontSize: 20, color: teal[500] }} />;
  if (category === "Speaking")
    return <SpeakingIcon sx={{ fontSize: 20, color: deepOrange[500] }} />;
}

const ExamCard = ({ exam }) => {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {/* {formatDate(new Date(exam.date))} */}
            11th March 2023
          </Typography>
          <Typography variant="h3" component="div">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* <div>{exam.title}</div> */}
              <div>Exam 1</div>
            </Box>
          </Typography>
          <Divider />

          {["Reading", "Listening", "Writing", "Speaking"].map(
            (category, index) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 1,
                }}
                key={index}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {getComponent(category)}
                  <Typography sx={{ ml: 1 }} variant="body2">
                    {category}
                  </Typography>
                </Box>

                <AvatarGroup>
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: 20,
                      height: 20,
                      fontSize: 9,
                    }}
                    // key={section.section}
                  >
                    {/* {section.section} */}
                  </Avatar>
                </AvatarGroup>
              </Box>
            )
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ExamCard;
