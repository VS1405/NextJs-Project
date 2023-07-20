import { Fragment } from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import Layout from '../layout/Layout';

function MeetupList(props) {
  return (
    <Fragment>
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
    </Fragment>
  );
}

export default MeetupList;
