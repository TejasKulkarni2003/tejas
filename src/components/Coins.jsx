import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  RadioGroup,
  Radio
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from './CoinCard';

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setpage] = useState(1);
  const [currency, setcurrency] = useState('inr');

  const currencySymbol = currency === "inr" ? 
                          "₹" : currency === "eur" ? 
                          "€" : "$";

  const changePage=(page)=>{
    setpage(page);
    setLoading(true);
  }

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchcoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchcoins();
  }, [currency, page]);

  if (error)
    return <ErrorComponent message={"Error While Fetching coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setcurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                key={i.id}
                id={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack overflowX={'auto'} p={'5'}>
            {btns.map((item, index)=>(
              <Button bgColor={'blackAlpha.900'} color={'white'} onClick={()=> changePage(index+1)}>
              {index+1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};




export default Coins