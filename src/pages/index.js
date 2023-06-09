import Head from "next/head";
import { Container, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const fetchProducts = async () => {
    try {
      const productResponse = await axios.get("http://localhost:2000/products");

      console.log(productResponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>APP Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Heading>Hello World</Heading>
        </Container>
      </main>
    </>
  );
}
