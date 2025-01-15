const is=()=>{
    users:[
        
    ]
}
const reducer=(sate,action)=>{
switch(action.type)
{
    case "update" : const arr=[...state.users];
    arr.push(action.payload);
    return {users:arr};
case "reset" : return is;
default : return state;
}
}

export{is,reducer};