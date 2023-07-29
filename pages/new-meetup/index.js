import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/head";


function NewMeetUpData() {


  async function addMeetupHandler(enterredMeetupdata) {
    try {
      console.log("I add new meet up");
      console.log(enterredMeetupdata);
      const responce = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enterredMeetupdata),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!responce.ok) {
        throw new Error("Failed to add New Meetup");
      }
      const data = await responce.json();
      console.log(data);
    } catch (error) {
      console.log("Failed to add meetup", error.message);
    }
  }

  return (
  <Fragment>
      <Head>
        <title>New MeetUp</title>
        <meta name="Discription" content="Add your own meetups!" />
      </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </Fragment>
  );

}
export default NewMeetUpData;
