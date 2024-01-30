import {
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../../ColorModeSwitcher";
import { Link } from "react-router-dom";

export function Header() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      w="100%"
      bg={colorMode === "light" ? "light.secondary" : "dark.secondary"}
      paddingRight="10vw"
      paddingLeft="10vw"
      gap="3"
      alignItems="center"
      direction={["column", "column", "row"]}
    >
      <Link to="/">
        <Flex alignItems="center">
          <Image
            width="35"
            height="35"
            src="https://img.icons8.com/color/48/film-reel.png"
            alt="film-reel"
          />
          <Flex direction="column">
            <Heading>Gustavo</Heading>
            <Text>Fliegner</Text>
          </Flex>
        </Flex>
      </Link>

      <Spacer />
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
}
