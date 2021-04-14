import { } from './mutations-type'
export default {
  singin(state,phones){
    state.loginsucc=true;
    state.phone=phones
  },
  emailsingin(state,emailnum){
    state.loginsucc=true;
    state.emaillNum=emailnum
  },
  singout(state){
    state.loginsucc=false;
    state.phone='';
    state.emaillNum=''

  }

}
