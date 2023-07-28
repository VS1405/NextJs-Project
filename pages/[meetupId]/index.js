const { Fragment } = require("react");
import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails(props) {
  return (
    <Fragment>
      <MeetupDetail
      image={props.meetUpData.image}
        title={props.meetUpData.title}
        address={props.meetUpData.address}
      />
    </Fragment>
  );
}

export async function getStaticPaths(params) {
  try{
    const client = await MongoClient.connect(
      "mongodb+srv://varshamhaske97:cwDJU93BUcAl2aVV@cluster0.m6hewrz.mongodb.net"
    );
    const db = (client).db("MeetUps");
    console.log("Client connect for fetch details");
  
    const meetupCollection = db.collection("meetups");
  
    const meetUPID = await meetupCollection.find({}, { _id: 1 }).toArray();
   
    (client).close();
  
    return {
      fallback: true,
      paths: meetUPID.map((meetId) => ({
        params: { meetUpId: meetId._id.toString() },
      })),
      // [{params: { meetupId: "m1" }, },
      //   {params: { meetupId: "m2" },},],
    };

  }
  catch(error){
    console.log("Error while fetching Data")
    return{
      fallback: true,
      paths: []
    }
  }
 
 
}

export async function getStaticProps(context) {

  const meetupId = context.params.meetupId;
console.log(meetupId)

try{
  const client = MongoClient.connect(
    "mongodb+srv://varshamhaske97:cwDJU93BUcAl2aVV@cluster0.m6hewrz.mongodb.net"
  );
  const db = client.db("MeetUps");
  console.log("Client connect for fetch details");
  const meetupCollection = db.collection("meetups");

  const selectMeetUp = await meetupCollection.findOne({ _id : ObjectId(meetupId)})

  console.log(selectMeetUp);
  (client).close();
  return {
    props: {
      // meetUpData: {
      //   id: meetupID,
      //   image:
      //     "https://media.istockphoto.com/id/1391462403/photo/kicking-horse-river-carves-through-natural-bridge-at-yoho-national-park-british-columbia.webp?b=1&s=612x612&w=0&k=20&c=tk82CSl3zcYRNDriGcydhJRvWytHN1_qNjEmE1uTv9c=",
      //   title: "A first meetup",
      //   address: "A some city 5, some city",
      // },
      meetUpData:  {
        id: selectMeetUp._id.toString(), 
        title:selectMeetUp.title, 
        address: selectMeetUp.address, 
        image: selectMeetUp.image,
       }
    },
  };

}catch(error){
  console.log('Error while fetching Details of MeetUp', error)
  return {
    props:{
      meetUpData: {
        id: '',
        title: '',
        image: '',
        address: ''
      }
    }
  }
}

}

export default MeetupDetails;
