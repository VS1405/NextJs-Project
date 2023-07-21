import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";
import { Fragment } from "react";

const DummyList = [
  {
    id: "m1",
    image:
      "https://media.istockphoto.com/id/1391462403/photo/kicking-horse-river-carves-through-natural-bridge-at-yoho-national-park-british-columbia.webp?b=1&s=612x612&w=0&k=20&c=tk82CSl3zcYRNDriGcydhJRvWytHN1_qNjEmE1uTv9c=",
    title: "A first Meetup!",
    address: "A first City",
  },
  {
    id: "m2",
    image:
      "https://media.istockphoto.com/id/1391462403/photo/kicking-horse-river-carves-through-natural-bridge-at-yoho-national-park-british-columbia.webp?b=1&s=612x612&w=0&k=20&c=tk82CSl3zcYRNDriGcydhJRvWytHN1_qNjEmE1uTv9c=",
    title: "A first Meetup!",
    address: "A second City",
  },
  {
    id: "m3",
    image:
      "https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?s=1024x1024&w=is&k=20&c=C9JwCd6nvW_0hmfolDgi5uq2yAqeNWwyqLgZdODGsEQ=",
    title: "A first Meetup!",
    address: "A third City",
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Layout />
      <MeetupList meetups={props.Meetups} />
    </Fragment>
  );
}



// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//   return {
//     props : {
//         Meetups: DummyList
//     }
//   };
// }

export async function getStaticProps() {

  return {
    props: {
      Meetups: DummyList
    },
    revalidate: 1,
  };
}
export default HomePage;
