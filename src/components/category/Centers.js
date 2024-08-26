import { Box, Image, AspectRatio, Center, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Centers = ({ item }) => {
  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate(`/products/${item.id}`);
    // Replace with actual route and params handling based on your application's routes
  };

  return (
    <Box width="50%" padding={10}>
      <div onClick={navigateToProducts}>
        <Box alignItems="center" my={3}>
          <Box overflow="hidden">
            <Box width="100%" sx={{marginLeft:"15%",marginTop:"40px",marginBottom:"-250px"}}>
              <AspectRatio w="100%" ratio={1 / 1} >
                {/* <Image src={`http://192.168.1.94:8000${item.image_path}`} alt="image" style={{width:"60%", height:"60%", boxShadow:"5px 5px 30px 1px #2196f3",borderRadius:"50px"}}/> */}
                <Image src={`http://127.0.0.1:8000${item.image_path}`} alt="image" style={{width:"60%", height:"60%", boxShadow:"5px 5px 30px 1px #2196f3",borderRadius:"50px"}}/>
              </AspectRatio>
              {/* <Center>
                <Text color="amber.500" fontSize="16" fontWeight="bold">
                  {item.name}
                </Text>
              </Center> */}
            </Box>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Centers;
