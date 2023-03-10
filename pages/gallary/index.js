import Head from "next/head";
import React from "react";
import Gallary from "../../components/Gallary/Gallary";
import PageHeader from "../../components/layouts/PageHeader/PageHeader";

const index = () => {
  return (
    <>
      <Head>
        <title>MTT - Hajj & Umrah | Gallary</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title="Hajj & Umrah" key={0} />
      <Gallary />
    </>
  );
};

export default index;
