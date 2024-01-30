import { Center, Flex, Text } from "@chakra-ui/react";
import { Header } from "../components/commons/Header";
import Footer from "../components/commons/footer";

export default function NotFound() {
  return (
    <Flex direction="column" h="100vh" align="center" justify="space-between">
      <Header />

      <Center h="100%" bg="gray.600" w="100%">
        <Flex direction="column" align="center">
          <Text fontSize="150px">404</Text>
          <Text fontSize="100px">Não Localizdo</Text>
        </Flex>
      </Center>
      <Footer></Footer>
    </Flex>
  );
}
