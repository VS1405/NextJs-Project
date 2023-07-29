import { MongoClient } from "mongodb";
import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";
import { Fragment } from "react";
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>MeetUp Project</title>
        <meta name="Discription" content="Browser a huge list of acive react meetups!" />
      </Head>
      <Layout />
      <MeetupList meetups={props.Meetups} />
    </Fragment>
  );
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//   return {
//     props : {
//         Meetups: DummyList
//     }
//   };
// }

// export async function getStaticProps() {
//   // fetch API data from mongoDB

//   const client = await MongoClient.connect(
//     "mongodb+srv://varshamhaske97:yhlinmaoEqhXfcjs@cluster0.m6hewrz.mongodb.net/MeetUps?retryWrites=true&w=majority"
//   );
//   const db = client.db("MeetUps");

//   const meetupCollection = db.collection("meetup");
//   const meetups = await meetupCollection.find().toArray();
//   client.close()

//   return {
//     props: {
//       Meetups: meetups.map(meetup=> ({
//         title: meetup.title,
//         image: meetup.image,
//         address: meetup.address,
//         id: meetup._id.toString()
//       })),
//     },
//     revalidate: 1,
//   };
// }

const CONNECTION_RETRY_ATTEMPTS = 5;
const CONNECTION_RETRY_INTERVAL_MS = 3000;

export async function getStaticProps() {
  let meetups = [];
  let connectionAttempts = 0;

  // Used loop to fetch data from API
  while (connectionAttempts < CONNECTION_RETRY_ATTEMPTS) {
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://varshamhaske97:fX2Y1KZmbCjubXTX@cluster0.m6hewrz.mongodb.net"
      );
      console.log('Client Connected to MongoDB')

      const db = client.db("MeetUps");

      const meetupCollection = db.collection("meetups");
      meetups = await meetupCollection.find().toArray();
      client.close();

      break; // Break the loop if the connection is successful

    } catch (error) {
      console.error(
        `Error connecting to MongoDB (Attempt ${connectionAttempts + 1}):`,
        error
      );
      connectionAttempts++;

      // Wait before the next retry
      await new Promise((resolve) =>
        setTimeout(resolve, CONNECTION_RETRY_INTERVAL_MS)
      );
    }
  }
  return {
    props: {
      Meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
