import EntryDetail from '../../components/entries/EntryDetail';
import Reviews from '../../components/reviews/Reviews';

import { Fragment } from 'react';


function EntryDetailsPage(props){
    return (
        <Fragment>
            <EntryDetail 
                name={props.entryData.name}
                image={props.entryData.image}
            />
            <Reviews />
        </Fragment>
    );
}

export async function getStaticProps(context){
    return{
        props: {
            entryData: {
                id: "61bdb7b1122af9a881fcb231",
                name: "Cute Swirl",
                image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Vector-based_example.svg",
            },
        },
    };
}

export default EntryDetailsPage;
