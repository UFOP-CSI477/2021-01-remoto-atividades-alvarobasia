import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Container,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { IoIosTime, IoIosTimer } from "react-icons/io";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { format } from "date-fns";
import { AuthContext, User } from "../contexts/AuthContext";

interface SurveyCardProps {
  survey: Survey;
  handleVote: (option: Option) => void;
}

export default function SurveyCard({ survey, handleVote }: SurveyCardProps) {
  const [options, setOptions] = useState<Option[]>([]);
  const [votedUsers, setVotedUsers] = useState<User[]>([]);
  const [selectOption, setSelectedOption] = useState<Option | null>(null);
  const { user } = useContext(AuthContext);
  function handleClickOption(option: Option) {
    if (option.id === selectOption?.id) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  }

  useEffect(() => {
    setOptions(survey.options);

    const voted = survey.options.map((o) => o.users);

    setVotedUsers(voted.flat());
  }, [survey]);

  useEffect(() => {
    if (user && votedUsers.includes(user)) {
      setSelectedOption(
        survey.options.find((o) =>
          o.users.map((u) => u.id).includes(user.id)
        ) as any
      );
    }
  }, [votedUsers]);

  function onVote(option: Option | null) {
    if (option) handleVote(option);
  }

  function isUserAlreadyVoted() {
    if (user) return votedUsers.map((u) => u.id).includes(user.id);
    return false;
  }

  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Heading
            color={useColorModeValue("#066666", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {survey.title}
          </Heading>
          {options.map((option) => {
            return (
              <Container
                fontSize={"22px"}
                rounded={"8px"}
                bg={
                  selectOption && selectOption?.id === option.id
                    ? "#00B3B3"
                    : selectOption === null
                    ? "#00B3B3"
                    : "#AAFFFF"
                }
                color={
                  selectOption && selectOption?.id === option.id
                    ? "#d0ffaa"
                    : selectOption === null
                    ? "white"
                    : "red.300"
                }
                height={"36px"}
                display={"flex"}
                alignItems={"center"}
                transition={"all 0.3s"}
                cursor={"pointer"}
                _hover={{
                  bg: "#AAFFFF",
                  color: "#006666",
                }}
                onClick={() => {
                  if (!isUserAlreadyVoted()) handleClickOption(option);
                }}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
              >
                {selectOption && selectOption.id === option.id ? (
                  <div style={{ width: "26px" }}>
                    <BsCheckLg />
                  </div>
                ) : (
                  <div style={{ width: "26px" }}></div>
                )}
                {option.title}
                {isUserAlreadyVoted() && <p> - {option.users.length} votos</p>}
              </Container>
            );
          })}
        </Stack>
        {user && !isUserAlreadyVoted() && (
          <Button
            mt={4}
            fontSize={"28px"}
            fontWeight={500}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
              boxShadow: "3px 2px 5px -2px rgba(0, 0, 0, 0.25)",
            }}
            width={"full"}
            onClick={() => onVote(selectOption)}
            disabled={!selectOption}
          >
            Votar
          </Button>
        )}
        {user && isUserAlreadyVoted() && (
          <Text mt={4}>Você já votou neste questionário.</Text>
        )}
        <Stack direction={"row"} spacing={4} marginTop={"25px"}>
          <Container
            display={"flex"}
            alignItems={"center"}
            style={{ gap: "5px" }}
            justifyContent={"space-between"}
          >
            <IoIosTime size={32} color="#066666" />
            <Text fontSize={"14px"} color={"#066666"}>
              Aberta em {format(new Date(survey.initDate), "d  MMM, yyyy")}
            </Text>
          </Container>
          <Container
            display={"flex"}
            alignItems={"center"}
            style={{ gap: "5px" }}
            justifyContent={"space-between"}
          >
            <IoIosTimer size={32} color={"#066666"} />
            <Text fontSize={"14px"} color={"#066666"}>
              Encerra em {format(new Date(survey.endDate), "d  MMM, yyyy")}
            </Text>
          </Container>
        </Stack>

        <Stack direction={"row"} spacing={4} marginTop={"5px"}>
          <Container
            display={"flex"}
            alignItems={"center"}
            style={{ gap: "5px" }}
            justifyContent={"flex-start"}
          >
            <BsFillPeopleFill size={32} color={"#066666"} />
            <Text fontSize={"14px"} color={"#066666"}>
              Votantes:{" "}
              {survey.options.reduce((acc, option) => {
                return acc + option.numberOfVotes;
              }, 0)}
            </Text>
          </Container>
          <Container
            display={"flex"}
            alignItems={"center"}
            style={{ gap: "5px" }}
            justifyContent={"flex-start"}
          >
            <BsFillPersonFill size={32} color={"#066666"} />
            <Text color={"#066666"} fontSize={"14px"}>
              Feito por {survey.User.name}
            </Text>
          </Container>
        </Stack>
      </Box>
    </Center>
  );
}
