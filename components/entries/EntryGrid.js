import EntryThumbnail from './EntryThumbnail';
import classes from './EntryGrid.module.css';

function EntryGrid(props) {
  return (
    <div className={classes.grid}>
      {props.entries.map((entry) => (
        <EntryThumbnail
          key={entry.id}
          id={entry.id}
          image={entry.image}
          name={entry.name}
          count={entry.count}
        />
      ))}
    </div>
  );
}

export default EntryGrid;
