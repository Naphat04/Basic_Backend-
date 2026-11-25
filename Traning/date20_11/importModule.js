import {nameAom , doSomething} from './exportModule.js';
import{ eduction } from './exportMyname.js';
import { myfullName , myNickname , myAge} from './exportMyname.js';


console.log(nameAom);
doSomething();
console.log(`นี่คือข้อมูลมมหาวิทยาลัยผม ${eduction} นี่คือชื่อเต็มผม ${myfullName} นี่คือชื่อเล่นผม ${myNickname} นี่คืออายุผม ${myAge}`)