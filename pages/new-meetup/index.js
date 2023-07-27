import NewMeetupForm from "@/components/meetups/NewMeetupForm";

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

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
export default NewMeetUpData;
