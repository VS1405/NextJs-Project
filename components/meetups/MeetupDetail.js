const { Fragment } = require("react");
import MainNavigation from '../layout/MainNavigation';
import classes from './MeetupDetail.module.css'

function MeetupDetail (props){
    return(
        <Fragment>
            <section className={classes.detail}>
                <div className={classes.image}>
                <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.title}>
                <h3>{props.title}</h3>
                <p>{props.address}</p>
                </div>
            </section>
        </Fragment>
    )
}

export default MeetupDetail;