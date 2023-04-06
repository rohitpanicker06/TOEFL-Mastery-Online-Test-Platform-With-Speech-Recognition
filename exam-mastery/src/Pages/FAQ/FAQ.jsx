import { Box, useTheme } from "@mui/material";
import Header from "../../Components/Header/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is TOEFL® Master ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            TOEFL® Master is the only official practice test that gives you the
            experience of taking the real TOEFL iBT® test. You will practice by
            using authentic questions from past tests, and you will receive your
            scores.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is the TOEFL hard/easy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            That is a good question, and not something we can answer with a
            simple yes or no! That’s why we’ve written a whole post about it.
            You can find out whether or not the TOEFL is hard here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is the TOEFL test timed?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! The test takes about 4 hours. The reading section is 60 or 80
            minutes; the listening section is either 60 or 90 minutes (depending
            on whether you have an experimental section); the speaking section
            is 20 minutes; and the writing section is 50 minutes. You can learn
            more about the format of the exam here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is the TOEFL required?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is another great question, and the answer is: it depends. It
            depends on the schools you’re applying to and your level of English
            (some schools will waive the requirement if you have a high GRE/GMAT
            verbal score). Instead of Googling “is the TOEFL required,” I’d
            suggest going to the admissions requirements pages of the schools
            you’re applying to — they’ll have your answers there!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            When do TOEFL scores come out?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your scores will come out online approximately 10 days after your
            test date, and you’ll be able to view them here. If you’re waiting
            for an official score report, that will be sent about 13 days after
            your test date, and then it will take at least another 7-10 days for
            mail delivery (and more outside the US!).
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
