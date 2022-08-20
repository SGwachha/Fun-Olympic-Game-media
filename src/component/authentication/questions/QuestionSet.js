import { Button, Stack,FormLabel,Box,Input, Select, Textarea } from "@chakra-ui/react"
import { useForm } from "react-hook-form";

const QuestionSet=({datas}) =>{
console.log(datas, "hello dataa how are you")
    const {register, handleSubmit, formState:{isSubmitting, errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data, datas, "hwllo data how are you")
    }
  
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='username'>Your Organization ?</FormLabel>
                  <Input
                   {...register("organization")} 
                    placeholder='Please enter your organization name'
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor='username'>Your designation ?</FormLabel>
                  <Input
                    {...register("designation")}
                    placeholder='Please enter your designation.'
                  />
                </Box>
               
  
                <Box>
                  <FormLabel htmlFor='owner'>Experience</FormLabel>
                  <Select id='owner' defaultValue='Less than a year' {...register("experience")} >
                  <option value='Less than a year'>Less than a year</option>
                    <option value='1'>1 year</option>
                    <option value='2'>2 years</option>
                    <option value='3'>3 years</option>
                    <option value='4'>4 years</option>
                    <option value='5+'>5+ years</option>

                  </Select>
                </Box>
                <Box>
                  <FormLabel htmlFor='owner' >Data set category</FormLabel>
                  <Select id='owner' defaultValue='sales'>
                    <option value='sales'>Sales</option>
                    <option value='marketing'>Marketing</option>
                    <option value='forcasting'>Forcasting</option>
                    

                  </Select>
                </Box>
  
                <Box>
                  <FormLabel htmlFor='desc'> Description</FormLabel>
                  <Textarea id='desc' placeholder="Write short information about you..." {...register("description")} />
                </Box>

                <Button
                bg={isSubmitting ? "gray.300" : "black"}
                color={isSubmitting ? "gray.800" : "white"}
                isLoading={isSubmitting}
                type="submit"
                _hover={isSubmitting ? "gray.300" : "black"}
               size="lg"
                
                >
                    Confirm
                </Button>
              </Stack>
           </form>
      </>
    )
  }
    export default QuestionSet;