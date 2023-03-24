import { Box, Grid, GridItem } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import MessageForm from "../components/MessageForm";
export default function Footer() {
  return (
    <Box position="fixed" bottom="0" width="100%">
      <MessageForm />

      <Grid
        gridTemplateColumns="auto 1fr"
        textAlign="center"
        alignItems="center"
        py="4px"
        px="30px"
        height="40px"
        bg="white"
      >
        <GridItem justifySelf="start">
          {/* Built by{" "} */}
          {/* <a href="http://shimon-wosner.vercel.app" target="_blank"> */}
          <a
            href="https://www.linkedin.com/in/anurag-gupta-839076201/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin style={{ display: "inline" }} />
            @AnuragGupta
          </a>
        </GridItem>
        <GridItem justifySelf="end">
          <a
            href="https://github.com/AnuragGupta16"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub style={{ display: "inline" }} /> Source code
          </a>
        </GridItem>
      </Grid>
    </Box>
  );
}
