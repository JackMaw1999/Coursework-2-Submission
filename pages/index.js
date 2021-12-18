import EntryGrid from '../components/entries/EntryGrid';
import { MongoClient } from 'mongodb';
import ContestDetail from '../components/contests/ContestDetail';
import { Fragment } from 'react';


function HomePage(props){
    return (
        <Fragment>
            <ContestDetail 
                name={props.contestData.name}
                image={props.contestData.image}
                description={props.contestData.description}
            />
            <h1>Entries</h1>
            <EntryGrid entries={props.entries}/>
        </Fragment>
    );   
}

export async function getStaticProps(){
    const client = await MongoClient.connect('mongodb+srv://Jack:RfSngnNQE9rhE5ku@cluster0.e2qjt.mongodb.net/t-shirt_contests?retryWrites=true&w=majority');
    const db = client.db();

    const contestsCollection = db.collection('contests');
    const entriesCollection = db.collection('entries');

    const selectedContest = await contestsCollection.findOne();

    const entries = await entriesCollection.find().toArray();

    client.close();

    return{
        props: {
            entries: entries.map(entry => ({
                name: entry.name,
                image: entry.image,
                count: entry.count,
                id: entry._id.toString() 
            })),
            contestData: {
                id: selectedContest._id.toString(),
                name: selectedContest.name,
                image: selectedContest.image,
                description: selectedContest.description,
            }
        },
        revalidate: 1
    };
}

export default HomePage;
