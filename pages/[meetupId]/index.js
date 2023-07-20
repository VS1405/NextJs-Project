const { Fragment } = require("react");
import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
        <MeetupDetail image= "https://media.istockphoto.com/id/1391462403/photo/kicking-horse-river-carves-through-natural-bridge-at-yoho-national-park-british-columbia.webp?b=1&s=612x612&w=0&k=20&c=tk82CSl3zcYRNDriGcydhJRvWytHN1_qNjEmE1uTv9c=" 
        title='A first meetup'
        address='A some city 5, some city'
        />
    </Fragment>
  );
}

export default MeetupDetails;
