import React from "react"
import { CocktailI } from "../../types"
import {
  Box,
  Badge,
  Heading,
  VStack,
  Image,
  Text,
  HStack,
  Button,
  Skeleton,
  ScrollView
} from "native-base"
import CustomBadge from "../CustomBadge"

type Props = {
  cocktail: CocktailI
  makeCocktail: VoidFunction
  isReady: boolean
  fetchError: string | undefined
}

const Card: React.FC<Props> = ({
  cocktail,
  makeCocktail,
  isReady,
  fetchError
}) => {
  return (
    <Box
      p="5"
      h="90%"
      backgroundColor="cyan.800"
      borderRadius="lg"
      safeAreaTop={1}
    >
      <ScrollView>
        {fetchError === undefined ? (
          <VStack space="5">
            <Box>
              {isReady === true ? (
                <Heading
                  textAlign="center"
                  color="secondary.50"
                  fontStyle="italic"
                  fontWeight="light"
                  fontSize="4xl"
                >
                  {cocktail.name}
                </Heading>
              ) : (
                <Skeleton.Text />
              )}
            </Box>
            <Box>
              {isReady === true ? (
                <Image
                  alt="cocktail"
                  resizeMethod="resize"
                  resizeMode="cover"
                  mx="auto"
                  size="2xl"
                  src={cocktail.imageUrl}
                />
              ) : (
                <Skeleton h="200" />
              )}
            </Box>
            <Box textAlign="center">
              {isReady === true ? (
                <Text
                  p="4"
                  fontSize="xl"
                  color="secondary.50"
                  fontStyle="italic"
                  fontWeight="light"
                >
                  {cocktail.instructions}
                </Text>
              ) : (
                <Skeleton.Text />
              )}
            </Box>
            <Box>
              {isReady === true ? (
                <VStack justifyContent="center" space="2">
                  <CustomBadge text={cocktail.isAlcaholic} />
                  <CustomBadge text={cocktail.category} />
                  <CustomBadge text={cocktail.glassType} />
                </VStack>
              ) : (
                <Skeleton.Text />
              )}
            </Box>
            <Box>
              <Button
                onPress={makeCocktail}
                colorScheme="info"
                mx="auto"
                size="lg"
                _text={{
                  fontSize: 16
                }}
              >
                Pour me more
              </Button>
            </Box>
          </VStack>
        ) : (
          <Text>{fetchError}</Text>
        )}
      </ScrollView>
    </Box>
  )
}

export default Card
