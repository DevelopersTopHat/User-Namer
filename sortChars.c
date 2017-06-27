#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>
#include <string.h>


void Sort(){

 	FILE *fp;
 	FILE *fp2;
 	FILE *fp3;
 	FILE *fp4;
 	FILE *fp5;
 	FILE *fp6;
 	FILE *fp7;
 	FILE *fp8;
 	FILE *fp9;
 	FILE *fp10;

   	int howmany = 0;
   	char * line = NULL;
   	size_t len = 0;
   	ssize_t read;
   	char *words[100];

	fp = fopen("readChar.txt", "r");
	fp2 = fopen("list2.txt", "w");
	fp3 = fopen("list3.txt", "w");
	fp4 = fopen("list4.txt", "w");
	fp5 = fopen("list5.txt", "w");
	fp6 = fopen("list6.txt", "w");
	fp7 = fopen("list7.txt", "w");
	fp8 = fopen("list8.txt", "w");
	fp9 = fopen("list9.txt", "w");
	fp10 = fopen("list10.txt", "w");

	while ((read = getline(&line, &len, fp)) != -1) {

		if (strlen(line) - 1 == 2){
			fprintf(fp2, line);
    		}
		else if (strlen(line) - 1 == 3){
			fprintf(fp3, line);
    		}
		else if (strlen(line) - 1 == 4){
			fprintf(fp4, line);
    		}
		else if (strlen(line) - 1 == 5){
			fprintf(fp5, line);
    		}
		else if (strlen(line) - 1 == 6){
			fprintf(fp6, line);
    		}
		else if (strlen(line) - 1 == 7){
			fprintf(fp7, line);
    		}
		else if (strlen(line) - 1 == 8){
			fprintf(fp8, line);
    		}
		else if (strlen(line) - 1 == 9){
			fprintf(fp9, line);
    		}
		else if (strlen(line) - 1 == 10){
			fprintf(fp10, line);
    		}
    	}
   	fclose(fp);
   	fclose(fp2);
   	fclose(fp3);
   	fclose(fp4);
   	fclose(fp5);
   	fclose(fp6);
   	fclose(fp7);
   	fclose(fp8);
   	fclose(fp9);
   	fclose(fp10);
}
void main() {
	Sort();
}
