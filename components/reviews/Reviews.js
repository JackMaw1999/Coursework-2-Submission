import classes from './Reviews.module.css';
import Card from '../ui/Card';

function Reviews(props){
    return (
        <section className={classes.reviews}>
            <div className={classes.reviewList}>
            <h2>Reviews</h2>
            <Card className={classes.review}>
                <h3>Jeremy</h3>
                <p>Lovely design! Super simple but expressive all the same.</p>
            </Card>
            <Card className={classes.review}>
                <h3>Isaac</h3>
                <p>A bit unoriginal but you've got the spirit.</p>
            </Card>
            <Card className={classes.review}>
                <h3>Heather</h3>
                <p>Cuuuuuute!</p>
            </Card>
            </div>
        </section>
    );
}

export default Reviews;
