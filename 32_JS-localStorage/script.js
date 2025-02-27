// function add(){
//     let inbox = document.getElementById('inbox').value
//     localStorage.setItem([],inbox)
//     document.getElementById('data').innerHTML=localStorage.getItem(0)
//     document.getElementById('inbox').value=''
// }


// function add(){
//     const myArray = ['value1', 'value2', 'value3'];
//     localStorage.setItem('items', JSON.stringify(myArray));

//     let alloo = JSON.parse(localStorage.getItem('items'));
//     console.log(alloo[2])
// }


// function add(){
//     let inbox = document.getElementById('inbox').value
//     // Get existing data from local storage (if any)
//     let submissions = localStorage.getItem('submissions');
//     submissions = submissions ? JSON.parse(submissions) : [];

//     // if(submissions){
//     //     submissions = JSON.parse(submissions)
//     // }else{
//     //     submissions = []
//     // }

//     // Add the new submission
//     submissions.push(inbox);

//     // Save the updated array back to local storage
//     localStorage.setItem('submissions', JSON.stringify(submissions));
    
//     console.log('Data saved to local storage:', submissions);
// }



function add(){
    let inbox = document.getElementById('inbox').value
    if(inbox==''){
        alert('You cant submit empty cell')
    }else{
        // Get existing data from local storage (if any)
    let submissions = localStorage.getItem('submissions');
    submissions = submissions ? JSON.parse(submissions) : [];
    // Add the new submission
    submissions.push(inbox);

    // Save the updated array back to local storage
    localStorage.setItem('submissions', JSON.stringify(submissions));
    
    console.log('Data saved to local storage:', submissions);
    }
}


// to remove a item:
// localStorage.removeItem(key)

// to clear all:
// localStorage.clear()