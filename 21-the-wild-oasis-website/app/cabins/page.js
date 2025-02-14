import Counter from "../components/Counter";


export default async function Page(){

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    // console.log(data);
    

    return (
        <div>
            <h1>Cabins pages</h1>
            <Counter users={data} />
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
