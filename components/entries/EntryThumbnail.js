import Card from '../ui/Card';
import classes from './EntryThumbnail.module.css';
import {useRouter} from 'next/router';
import Link from 'next/link';

function EntryThumbnail(props) {
  const router = useRouter();
  function showDetailsHandler(){
    router.push('/' + props.id);
  }
  
  return (
    <div className={classes.item} >
      <Link href={`/entry-detail`}>
        <a>
          <Card>
          <div className={classes.image}>
            <img src={props.image} alt={props.name} />
          </div>
          <div className={classes.content}>
            <p>{props.name} <span className={classes.votes}>{props.count}</span></p>
          </div>
          </Card>
        </a>
      </Link>
    </div>
  );
}

export default EntryThumbnail;
