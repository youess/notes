
#include <stdio.h>

void printBinary(unsigned int a)
{
  char b[32];
  int n = 0;
  while (a > 0)
  {
    b[n++] = a % 2;
    a /= 2;
  }
  for(n--; n >= 0; n--) {
    printf("%d", b[n]);
  }
  printf("\n");
}

int main(int argc, char *argv[])
{
  printf("请输入一个（255以内）十进制数字: ");
  int num;
  scanf("%d", &num);
  printf("输入的数字二进制为: ");
  printBinary(num);
  printf("输入的数字八进制为: 0%o\n", num);
  printf("输入的数字十六进制为: 0x%x\n", num);
  return 0;
}
