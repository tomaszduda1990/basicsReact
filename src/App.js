import React from 'react';
import './App.css';
import Person from './Person/Person'

function App () {
    const [peopleState, setPeopleState] = React.useState( {
        people: [
            {name: "janusz", age: 16},
            {name: "anna", age: 20},
            {name: "magda", age: 60},
            {name: "kajetan", age: 6}
        ]
    });

    const [otherState, setOtherState] = React.useState({
        otherState: '1.0'
    })
    const onClickHandler = addTo => {
        const copiedState = peopleState.people.map(person => {
            let {name, age} = person;
            if(addTo === name){
                age+=10;
            };
            return {name, age};
        });
        setPeopleState({people: copiedState})
    };

    const changeOtherState = () => {
        const arr = otherState.otherState.split('.')
        let ver = parseInt(arr[1]) + 1;
        let mainVer = parseInt(arr[0]);
        if(ver > 9) {
            ver = 0;
            mainVer+=1;
        }
        arr[0]=mainVer;
        arr[1]=ver;
        let versionText = arr.join('.')
        setOtherState({otherState: versionText});
        console.log(otherState)
    };


    const people = peopleState.people.map(person => {
        const {name, age} = person;
        return (
            <Person name={name} age={age} key={name} clicker={() => onClickHandler(name)}>
                {name === 'janusz' ? "I like video games!" : null}
            </Person>
        )
    });
    return (
        <div className="App">
            {people}
            <button onClick={changeOtherState}>SHOW STATE</button>
        </div>
    );
}


export default App;