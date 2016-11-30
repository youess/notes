
#include <stdio.h>


void bubble_sort(int a[], int size);

int main(int argc, char *argv[])
{
  int n = 5;
  printf("Please input %d number to apply bubble sort: \n", n);
  int a[1024*1024];
  int *p = a;
  printf("p的地址指向值为: 0x%p p的地址为: 0x%p\n", p, &p);
  for (int i = 0; i < n; ++i) {
    scanf("%d", p++);
    printf("p的地址指向值为: 0x%p p的地址为: 0x%p\n", p, &p);
  }
  bubble_sort(a, n);
  for (int i = 0; i < n; ++i) {
    printf("%d ", a[i]);
  }
  printf("\n");
  return 0;
}

void bubble_sort(int a[], int N)
{
  int tmp = 0;
  // default start from index 0.
  for (int i = 0; i < N; ++i) {
    for (int j = i + 1; j < N; ++j) {
      if (a[j] > a[i]) {
        tmp = a[j];
        a[j] = a[i];
        a[i] = tmp;
      }
    }
  }

}
