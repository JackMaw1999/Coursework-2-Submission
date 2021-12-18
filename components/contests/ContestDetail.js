import classes from './ContestDetail.module.css';

function ContestDetail(props){
    return (
        <section className={classes.detail}>
            <div className={classes.text}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.description}>{props.description}</p>
                <button className={classes.submit}>Submit an Entry!</button>
            </div>
            <img className={classes.image}
                src={props.image}
                alt={props.name}
            />
        </section>
    );
}

export default ContestDetail;
