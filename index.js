const validateForm = () =>{
    
    let name,email,age,relationship,interest,interestChecked,checked;
    
    checked = 0;
    name = document.forms['questionnaire']['name'].value;
    if(name ==''){
        alert('Please enter your name');
        return false;
    }
    email = document.forms['questionnaire']['email'].value;
    if(email == ''){
        alert('Please enter your email');
        return false;
    }
    age = document.forms['questionnaire']['Age'].value;
    if(age == ''){
        alert('Please select your age range');
        return false;
    }
    relationship = document.forms['questionnaire']['relationship'].value;
    if(relationship == ''){
        alert('Please select your relationship status');
         return false;
    }
    interest = document.getElementById('int');
    interestChecked = interest.getElementsByTagName('input');
    for(let i = 0; i < interestChecked.length; i++){
        if (interestChecked[i].checked){
            checked++;
        }
    }
    if (checked < 1 ){
        alert('Please select an interest');
        return false;
    }
    document.getElementById('questionnaire').style.display='none';    
    formToJson();
    document.getElementById('questionnaire').reset();

}

const formToJson =()=>{
    let form, formInfo;
    form = new FormData(document.forms['questionnaire']);
    formInfo = form.entries();
    formInfo.Name = form.get('name');
    formInfo.Email = form.get('email');
    formInfo.Age = form.get('Age');
    formInfo.Relationship = form.get('relationship');
    formInfo.Interest = form.getAll('interest');
    document.querySelector('.results pre').innerText = JSON.stringify(formInfo, null, 2)
}
