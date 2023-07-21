import NewMeetupForm from "@/components/meetups/NewMeetupForm"

function NewMeetUpData() {
    const addMeetupHandler =(enterredMeetupdata)=>{
console.log(enterredMeetupdata)
    }
    return(
       <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}
export default NewMeetUpData;