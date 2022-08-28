import React, { useEffect, useState } from "react"
import {VStack , Box, ScrollView} from "native-base"
import CocktailCard from "../CocktailCard"
import { CocktailI } from "../../types"

const index: React.FC = () => {
  const [cocktail, setCocktail] = useState<CocktailI>({
    name:"",
    imageUrl:"",
    instructions:"",
    isAlcaholic:"",
    glassType:"",
    category:""
  })
  
  const [isReady,setIsReady] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const [anotherCocktail,setAnotherCocktail] = useState<boolean>(false)
  const makeCocktail : VoidFunction = ()=>{
    setAnotherCocktail(prevState => !prevState)
  }


  useEffect(() => {
    
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((res)=>res.json())
    .then((data)=> {
      setIsReady(true)
      setCocktail({
      name:data.drinks[0].strDrink,
      imageUrl:data.drinks[0].strDrinkThumb,
      instructions:data.drinks[0].strInstructions,
      isAlcaholic:data.drinks[0].strAlcoholic,
      glassType:data.drinks[0].strGlass,
      category:data.drinks[0].strCategory
      })
    })
    .catch((e)=>{
      setError(e.message)
    })

  }, [anotherCocktail])

  return (
<Box
    >
    <VStack
    w='100%'
    maxH='100%'
    bgColor='blueGray.800'
    >
      <VStack
      h='100%'
      p='5'
      justifyContent='center'
      >
        <CocktailCard cocktail={cocktail} makeCocktail={makeCocktail} isReady={isReady} fetchError={error} />
      </VStack>
    </VStack>
    </Box>
  )
}

export default index
