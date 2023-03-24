
import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { useAppContext } from "../context/appContext";

export default function Login()
{
    const { auth} =  useAppContext();
    async function GotoLogin()
    {
       await auth.signIn({
            provider: "google",
          })
    }
    return (
           
        // <h1>
        //     Login Page
        // </h1>
        <Button
            size="sm"
            marginRight="2"
            colorScheme="teal"
            rightIcon={<FaGithub />}
            variant="outline"
            onClick={() =>
                
                // console.log(2)
                 GotoLogin()
             
            }
          >
            Login
          </Button>
    )
};