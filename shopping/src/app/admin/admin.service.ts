export class AdminService{
	
	constructor(){
		
	}
	
	checkLogin(email : string , password : string){
		if(email=='mohan@gmail.com' && password=='123456'){
			return true;
		}
	}
}