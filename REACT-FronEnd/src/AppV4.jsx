import Contact from './assets/Contact';
import Counter from './assets/Counter'
import Hello from './assets/HelloV2';

function App() {
    const helloData=[
        {name : 'Rut', message : 'Hi there'},
        {name : 'Tom' , message : 'Hello...'}
    ]

    return(
        <div className='App'>
            <Counter/>
            {helloData.map((data,index)=>(
                <Hello key={index} name={data.name} message={data.message}/>
            ))}
        </div>
    )
}

export default App;