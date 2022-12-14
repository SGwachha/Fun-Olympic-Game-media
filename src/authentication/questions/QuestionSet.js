import { Button, Stack,FormLabel,Box,Input } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"

const QuestionSet=({datas}) =>{
    const {register, handleSubmit, formState:{isSubmitting, errors}} = useForm();
    const onSubmit = (data) => {
    }
    //to navigate to dashboard
    const navigate = useNavigate();
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing='24px'>
              <Box>
            <FormLabel htmlFor="petname" isRequired>Your Pet Name ?</FormLabel>
            <Input
              {...register("petname")}
              placeholder="Please enter your Pet name"
            />
          </Box>
          <Box>
            <FormLabel htmlFor="contactnumber" isRequired>Your Contact Number ?</FormLabel>
            <Input
              {...register("contactnumber")}
              placeholder="Please enter your Contact Number"
            />
          </Box>
          <Box>
            <FormLabel htmlFor="country" isRequired>Your Country ?</FormLabel>
            <Input
              {...register("country")}
              placeholder="Please enter your Country name"
            />
          </Box>
                <Button
                bg={isSubmitting ? "gray.300" : "black"}
                color={isSubmitting ? "gray.800" : "white"}
                isLoading={isSubmitting}
                type="submit"
                _hover={isSubmitting ? "gray.300" : "black"}
               size="lg"
               onClick={() => navigate('/login')}
                >
                    Confirm
                </Button>
              </Stack>
           </form>
      </>
    )
  }
    export default QuestionSet;