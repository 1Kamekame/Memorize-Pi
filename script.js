//input display number
const display = document.getElementsByName("display")[0]; 

//input button
const button_1 = document.getElementsByClassName("button_1")[0];
const button_2 = document.getElementsByClassName("button_2")[0];
const button_3 = document.getElementsByClassName("button_3")[0];
const button_4 = document.getElementsByClassName("button_4")[0];
const button_5 = document.getElementsByClassName("button_5")[0];
const button_6 = document.getElementsByClassName("button_6")[0];
const button_7 = document.getElementsByClassName("button_7")[0];
const button_8 = document.getElementsByClassName("button_8")[0];
const button_9 = document.getElementsByClassName("button_9")[0];
const button_0 = document.getElementsByClassName("button_0")[0];
const button_back = document.getElementsByClassName("button_back")[0];
const button_left = document.getElementsByClassName("button_left")[0];
const button_right = document.getElementsByClassName("button_right")[0];

//input answer
const answer_display = document.getElementById("answer_display");
const answer_true = document.getElementById("answer_true");
const answer_false = document.getElementById("answer_false");

//answer button system 答え合わせ用の変数
var ch_ans_dis = 0;
var ch_ans_sys = 1;

//円周率
var substr_all = "14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196";

//answer button system
answer_display.addEventListener("click",function(){
    ch_ans_dis = 1;
    ch_ans_dis_bt();
    ch_ans_true_bt();
    ch_ans_false_bt();
});
answer_true.addEventListener("click",function(){
    ch_ans_dis = 0;
    ch_ans_dis_bt();
    ch_ans_true_bt();
    ch_ans_false_bt();
});
answer_false.addEventListener("click",function(){
    ch_ans_dis = 0;
    ch_ans_dis_bt();
    ch_ans_true_bt();
    ch_ans_false_bt();
});

//answer button system 表示用の function
function ch_ans_dis_bt(){
    if(ch_ans_dis === 0){
        answer_display.hidden = false;
    }else if(ch_ans_dis = 1){
        answer_display.hidden = true;
    }
};

function ch_ans_true_bt(){
    if(ch_ans_dis === 0){
        answer_true.hidden = true;
    }else if(ch_ans_dis === 1){
        if(ch_ans_sys === 0){
            answer_true.hidden = true;
        }else if(ch_ans_sys === 1){
            answer_true.hidden = false;
        };
    };
};

function ch_ans_false_bt(){
    if(ch_ans_dis === 0){
        answer_false.hidden = true;
    }else if(ch_ans_dis === 1){
        if(ch_ans_sys === 0){
            answer_false.hidden = false;
        }else if(ch_ans_sys === 1){
            answer_false.hidden = true;
        };
    };
};

//input css root
const root = document.querySelector(":root");

//input now_position
const now_position_ID = document.getElementById("now_position_ID");

//display value |
display.value = "|"

//display_back
var display_back = "";

//pointer_position
var pointer = 1;

//function change now_position
function now_position_i(){
    now_position_ID.innerHTML = "現在の桁数:" + display_back.length;
}

//pointer　がマイナスにならないようにする 文字数以上にならないようにする
function pointer_obser(){
    if(pointer < 1){
        pointer +=1;
    }
    if(pointer>display_back.length+1){
        pointer += -1;
    }
};

//function pointer display
function pointer_dp(){
    pointer_obser();
    display.value = display_back.substr(0,pointer-1) + "|" + display_back.substr(pointer-1,display_back.length);
}

//function pointerの位置に文字入力
function pointer_write(pwn){
    display_back = display_back.substr(0,pointer-1) + pwn + display_back.substr(pointer-1,display_back.length);
}

//function pointerの位置の文字消去
function pointer_delete(){
    display_back = display_back.substr(0,pointer-2) + display_back.substr(pointer-1,display_back.length);
}

//function 正答判定 全ての数字
function change_value_all(){
    if(display_back === substr_all.substr(0,display_back.length)){
        ch_ans_sys = 1;
    }else{
        ch_ans_sys = 0;
    }
    
//ボタンが押されたときに実行
    pointer_dp();
    now_position_i();
    ch_ans_dis_bt();
    ch_ans_true_bt();
    ch_ans_false_bt();
}

//pointer move button
button_left.addEventListener("click",function(){
    pointer += -1;
    pointer_dp();
});

button_right.addEventListener("click",function(){
    pointer += 1;
    pointer_dp();
});

//display入力
button_1.addEventListener("click",function(){
    pointer_write(1);
    pointer += 1;
    change_value_all();
});
button_2.addEventListener("click",function(){
    pointer_write(2);
    pointer += 1;
    change_value_all();
});
button_3.addEventListener("click",function(){
    pointer_write(3);
    pointer += 1;
    change_value_all();
});
button_4.addEventListener("click",function(){
    pointer_write(4);
    pointer += 1;
    change_value_all();
});
button_5.addEventListener("click",function(){
    pointer_write(5);
    pointer += 1;
    change_value_all();
});
button_6.addEventListener("click",function(){
    pointer_write(6);
    pointer += 1;
    change_value_all();
});
button_7.addEventListener("click",function(){
    pointer_write(7);
    pointer += 1;
    change_value_all();
});
button_8.addEventListener("click",function(){
    pointer_write(8);
    pointer += 1;
    change_value_all();
});
button_9.addEventListener("click",function(){
    pointer_write(9);
    pointer += 1;
    change_value_all();
});
button_0.addEventListener("click",function(){
    pointer_write(0);
    pointer += 1;
    change_value_all();
});
button_back.addEventListener("click",function(){
    pointer_delete()
    pointer += -1;
    change_value_all();
});

//skip_to_button

//display np
const display_np = document.getElementsByClassName("display_np")[0];

//button np
const button_1_np = document.getElementsByClassName("button_1_np")[0];
const button_2_np = document.getElementsByClassName("button_2_np")[0];
const button_3_np = document.getElementsByClassName("button_3_np")[0];
const button_4_np = document.getElementsByClassName("button_4_np")[0];
const button_5_np = document.getElementsByClassName("button_5_np")[0];
const button_6_np = document.getElementsByClassName("button_6_np")[0];
const button_7_np = document.getElementsByClassName("button_7_np")[0];
const button_8_np = document.getElementsByClassName("button_8_np")[0];
const button_9_np = document.getElementsByClassName("button_9_np")[0];
const button_0_np = document.getElementsByClassName("button_0_np")[0];
const button_back_np = document.getElementsByClassName("button_back_np")[0];
const button_left_np = document.getElementsByClassName("button_left_np")[0];
const button_right_np = document.getElementsByClassName("button_right_np")[0];

const skip_to_button = document.getElementById("skip_to");
const skip_ent =document.getElementById("skip_ent");

//load value
display_np.value = "><文字目まで自動入力"

//display_back_np
var display_back_np = "";

//display_np value
function display_back_np_value(){
    display_np.value = ">" + display_back_np + "<文字目まで自動入力";
};

//display_back_np function
function display_back_np_f(display_back_np_f_w){
    display_back_np += display_back_np_f_w;
};

//display_back_np_dl function
function display_back_np_f_dl(){
    display_back_np = display_back_np.substr(0,display_back_np.length-1);
};

//ボタンクリック発火
function np_bt_f(){
    display_back_np_value();
};

skip_to_button.addEventListener("click",function(){
    display.hidden = true;
    button_0.hidden = true;
    button_1.hidden = true;
    button_2.hidden = true;
    button_3.hidden = true;
    button_4.hidden = true;
    button_5.hidden = true;
    button_6.hidden = true;
    button_7.hidden = true;
    button_8.hidden = true;
    button_9.hidden = true;
    button_left.hidden = true;
    button_right.hidden = true;
    button_back.hidden = true;
    //np
    display_np.hidden = false;
    button_0_np.hidden = false;
    button_1_np.hidden = false;
    button_2_np.hidden = false;
    button_3_np.hidden = false;
    button_4_np.hidden = false;
    button_5_np.hidden = false;
    button_6_np.hidden = false;
    button_7_np.hidden = false;
    button_8_np.hidden = false;
    button_9_np.hidden = false;
    button_left_np.hidden = true;
    button_right_np.hidden = true;
    button_back_np.hidden = false;
    skip_to_button.hidden = true;
    skip_ent.hidden = false;
    answer_display.hidden = true;
    answer_false.hidden =true;
    answer_true.hidden = true;
    now_position_ID.hidden = true;
});

skip_ent.addEventListener("click",function(){
    display.hidden = false;
    button_0.hidden = false;
    button_1.hidden = false;
    button_2.hidden = false;
    button_3.hidden = false;
    button_4.hidden = false;
    button_5.hidden = false;
    button_6.hidden = false;
    button_7.hidden = false;
    button_8.hidden = false;
    button_9.hidden = false;
    button_left.hidden = false;
    button_right.hidden = false;
    button_back.hidden = false;
    //np
    display_np.hidden = true;
    button_0_np.hidden = true;
    button_1_np.hidden = true;
    button_2_np.hidden = true;
    button_3_np.hidden = true;
    button_4_np.hidden = true;
    button_5_np.hidden = true;
    button_6_np.hidden = true;
    button_7_np.hidden = true;
    button_8_np.hidden = true;
    button_9_np.hidden = true;
    button_left_np.hidden = true;
    button_right_np.hidden = true;
    button_back_np.hidden = true;
    skip_to_button.hidden = false;
    skip_ent.hidden = true;
    answer_display.hidden = false;
    now_position_ID.hidden = false;
    //load main display
    var empty = "";
    if(display_back_np === empty){
        display_back_np = "";
        display_back_np_value();
    }else{
        display_back = substr_all.substr(0,display_back_np);
        pointer = Number(display_back_np)+1;
        change_value_all();
        if(200<Number(display_back_np)){
            alert("201桁以上は対応していません");
        };
        display_back_np = "";
        display_back_np_value();
    };

});

button_1_np.addEventListener("click",function(){
    display_back_np_f(1);
    np_bt_f();
});
button_2_np.addEventListener("click",function(){
    display_back_np_f(2);
    np_bt_f();
});
button_3_np.addEventListener("click",function(){
    display_back_np_f(3);
    np_bt_f();
});
button_4_np.addEventListener("click",function(){
    display_back_np_f(4);
    np_bt_f();
});
button_5_np.addEventListener("click",function(){
    display_back_np_f(5);
    np_bt_f();
});
button_6_np.addEventListener("click",function(){
    display_back_np_f(6);
    np_bt_f();
});
button_7_np.addEventListener("click",function(){
    display_back_np_f(7);
    np_bt_f();
});
button_8_np.addEventListener("click",function(){
    display_back_np_f(8);
    np_bt_f();
});
button_9_np.addEventListener("click",function(){
    display_back_np_f(9);
    np_bt_f();
});
button_0_np.addEventListener("click",function(){
    display_back_np_f(0);
    np_bt_f();
});
button_back_np.addEventListener("click",function(){
    display_back_np_f_dl();
    np_bt_f();
});