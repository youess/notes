/*
 * only test on linux 64 bit
 */

#include <stdio.h>


int main(int argc, char *argv[])
{
  /* 2MB 2097152 */
  const int m = (int)(1024*1024*1.99);  // 2086666
  /* int a[2090000];  // ok */
  /* int a[2092000];  // ok */
  /* int a[2093000];  // ok */
  int a[2094000];  // ok
  /* int a[2095000];  // bad */
  printf("%d\n", m);
  printf("%ld\n", sizeof(a) / sizeof(a[0]));
  return 0;
}
