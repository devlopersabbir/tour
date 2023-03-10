import React from "react";
import Head from "next/head";
import PageHeader from "../../components/layouts/PageHeader/PageHeader";
import Package from "../../components/Home/Package/Package";
import Guide from "../../components/Home/Guide-Banner/Guide";

const index = () => {
  return (
    <>
      <Head>
        <title>MTT - Hajj & Umrah</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title="Hajj & Umrah" />
      <Package />
      <Guide />
    </>
  );
};

export default index;
