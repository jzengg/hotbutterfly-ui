import Candidate from "../components/Candidate.react";
import NextLink from "next/link";
import useGetHrefWithQuery from "../hooks/useGetHrefWithQuery";
import {
  Text,
  Link,
  Flex,
  Stat,
  StatLabel,
  StatHelpText,
  Progress,
} from "@chakra-ui/react";
import { getMatchup } from "../apiUtils";
import { useRecoilValue } from "recoil";
import { numVotesState, isWorkerState } from "../atoms";

export default function VoteProgress() {
  const getHref = useGetHrefWithQuery();
  const numVotes = useRecoilValue(numVotesState);
  const isWorker = useRecoilValue(isWorkerState);
  const completionText = isWorker
    ? "Get to 100% to complete the session"
    : "Get to 100% to see the leaderboard!";
  return (
    <Stat>
      <StatLabel>Session Progress</StatLabel>
      <Progress value={numVotes} />
      <StatHelpText>{completionText}</StatHelpText>
    </Stat>
  );
}
