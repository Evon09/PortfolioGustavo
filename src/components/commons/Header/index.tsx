import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../../ColorModeSwitcher";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";

export function Header() {
  const { colorMode } = useColorMode();

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
      <Flex>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#home">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#about">About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#exp">Expreriencias</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#quali">Qualificações</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#proj">Projetos</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#gale">Galeria</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#cont">Contato</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Spacer />
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
}
