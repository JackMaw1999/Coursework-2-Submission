import classes from './EntryDetail.module.css';
import ReactStars from "react-rating-stars-component";

const ratingData = {
    size: 50,
    edit: true,
    color: "black",
    activeColor: "orange",
    value: 0,
    a11y: true,
    isHalf: true,
  };

function EntryDetail(props){
    return (
        <section className={classes.detail}>
            <div className={classes.container}>
                <h1>{props.name}</h1>
                <div className={classes.entry}>
                    <div className={classes.entryDetail}>
                        <img src={props.image} alt={props.name} />
                        <p>Submitted by User</p>
                    </div>
                    <div className={classes.ratingArea}>
                        <h2>Rate the Design!</h2>
                        <ReactStars {...ratingData} />
                        <h2>Leave a review: </h2>
                        <textarea className={classes.reviewInput}
                            id='review'
                            rows='5'
                        ></textarea>
                        <button className={classes.submitReview}>Submit Review</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EntryDetail;
