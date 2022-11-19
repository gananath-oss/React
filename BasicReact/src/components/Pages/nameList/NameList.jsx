// Add useState Hooks
import React, { useState, useEffect } from 'react'
import NameListItem from './NameListItem'

export default function NameList() {
    const [loadData, setLoadData] = useState(new Date());
    // get API data from : 'https://randomuser.me'

    // Use useState Hooks - const [1st state - storage, method] = useState(value)
    const [nameList, setNameList] = useState([{
            id: 1,
            name: { "title": "Miss","first": "Jennie","last": "Nichols"},
            location: { "city": "Billings","state": "Michigan","country": "United States" },
            email: "nichols@example.com",
            dob: {"date": "1992-03-08T15:13:16.688Z","age": 30},
            picture: {"medium": "https://randomuser.me/api/portraits/med/men/75.jpg",}
        }
    ]);

    //useEffect Hook -> use fetch() method to get data from API using GET method
    useEffect(()=>{
        fetch("https://randomuser.me/api").then(response => {
            // Return the JSON file in API
            // console.log(response)
            return response.json();
        }).then(responseData => {
            // console.log(responseData.results[0]);
            setNameList(nameList => [...nameList, responseData.results[0]]);
        });
    },[loadData]);

    // nameList Body
    const nameListPass = () => {
        return nameList.map((nameList) => {
            return (
                <NameListItem
                key = {nameList.id}
                    name = {`${nameList.name.title} ${nameList.name.first} ${nameList.name.last}`}
                    city = {nameList.location.city}
                    email = {nameList.email}
                    birthday = {nameList.dob.date}
                    avatar = {nameList.picture.medium}
                />
            )
        })
    }

    // Add Name Button
    const AddUserHandler = () => {
        // const newUser = {
        //     id: new Date(),
        //     name: {"title": "Miss","first": "Jennie","last": "Nichols"},
        //     location: {"city": "Billings","state": "Michigan",
        //     country: "United States"},
        //     email: "nichols@example.com",
        //     dob: {"date": "1992-03-08T15:13:16.688Z","age": 30},
        //     picture: {"medium": "https://randomuser.me/api/portraits/med/men/75.jpg"}
        // }

        // //setNameList(nameList => nameList.concat(newUser))

        // // or Spread operator
        // setNameList(nameList => [...nameList, newUser])
        setLoadData(new Date());
    }

    return (
        <div>
            <div className="container mt-4">
                <button className='btn btn-primary mb-2' onClick={AddUserHandler}>Add Name</button>
                <ul className='list-group'>
                    {nameListPass()}
                </ul>
            </div>
        </div>
    )
}
