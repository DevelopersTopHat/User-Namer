package namelessKingIsHard;

public class Random {
	static int suffixs[] = {0,1,2,3,4,5,6,7,8,9};
	public static void main(String[] args){
		String name="daniell"; //assume user already enter some name
		
		//add suffixs to the name user already entered
		for(int i = 0;i<3;i++){
			int picked = (int) Math.floor(Math.random() * 9);
			name += suffixs[picked];
		}
		
		System.out.println("The name is "+name);
	}

}
