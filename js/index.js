let mode = "詐欺体験";

const trial_button = document.getElementById("trial");
const quiz_button = document.getElementById("quiz");

const type_area = document.getElementById("type");

const submit_button = document.getElementById("submit");

trial_button.addEventListener("click", () => {
    mode = "詐欺体験";
    quiz_button.style.backgroundColor = "rgb(230,244,241)";
    trial_button.style.backgroundColor = "rgb(168, 174, 255)";
    type_area.style.border= "solid 6px rgb(168, 174, 255)";
    type_area.style.boxShadow = "15px 13px 0 rgb(168, 174, 255)";
    submit_button.style.boxShadow = "0 10px 0 rgb(168, 174, 255)";
});
quiz_button.addEventListener("click", () => {
    mode = "詐欺クイズ";
    trial_button.style.backgroundColor = "rgb(230,244,241)";
    quiz_button.style.backgroundColor = "rgb(103,231,212)";
    type_area.style.border= "solid 6px rgb(103,231,212)";
    type_area.style.boxShadow = "15px 13px 0 rgb(103,231,212)";
    submit_button.style.boxShadow = "0 10px 0 rgb(103,231,212)";
});

document.getElementById("submit").addEventListener("click", () => {
    const types = document.getElementsByName("types");
    let selectType;
    for(let i = 0; i < types.length; i++){
        if(types[i].checked){
            selectType = types[i].value;
            break;
        }
    }
    console.log("モード:" + mode +" 詐欺種類:" + selectType);
});