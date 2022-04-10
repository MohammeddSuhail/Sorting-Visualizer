function openmenu(){
    document.getElementById("menu2").style.display="block";
}
function closemenu(){
    document.getElementById("menu2").style.display="none";
}

/*------------Bubble Sort-----------*/
function CFunc(){
    document.getElementsByTagName("li")[11].style.backgroundColor="orangered";
    document.getElementsByTagName("li")[12].style.backgroundColor="";
    document.getElementsByTagName("li")[13].style.backgroundColor="";
    document.getElementsByTagName("li")[14].style.backgroundColor="";
    document.getElementById('Code1').innerHTML=`
    <pre>
            <code class="codesec">
        void bubble_sort(long arr[], long n) {
            long c, d, t;              
            for (c = 0 ; c < n - 1; c++) {
                for (d = 0 ; d < n - c - 1; d++) {
                    if (arr[d] > arr[d+1]) {
                        t = arr[d];
                        arr[d] = arr[d+1];
                        arr[d+1] = t;
                    }
                }
            }
        }

                  </code>
        </pre>`;
}
function CPlusFunc(){
    document.getElementsByTagName("li")[11].style.backgroundColor="";
    document.getElementsByTagName("li")[12].style.backgroundColor="orangered";
    document.getElementsByTagName("li")[13].style.backgroundColor="";
    document.getElementsByTagName("li")[14].style.backgroundColor="";
    
    document.getElementById('Code1').innerHTML=`<pre><code class="codesec">
        void swap(int *xp, int *yp) {
            int temp = *xp;
            *xp = *yp;
            *yp = temp;
        }


        void bubbleSort(int arr[], int n) {
            int i, j;
            for (i = 0; i < n-1; i++)
                for (j = 0; j < n-i-1; j++)
                    if (arr[j] > arr[j+1])
                        swap(&arr[j], &arr[j+1]);
        }
                  </code></pre>`;

                }
function JavaFunc(){
    document.getElementsByTagName("li")[11].style.backgroundColor="";
    document.getElementsByTagName("li")[12].style.backgroundColor="";
    document.getElementsByTagName("li")[13].style.backgroundColor="orangered";
    document.getElementsByTagName("li")[14].style.backgroundColor="";
    document.getElementById('Code1').innerHTML=`
    <pre>
            <code class="codesec">
        static void bubbleSort(int[] arr) {
            int n = arr.length;
            int temp = 0;
            for(int i=0; i < n; i++){
                for(int j=1; j < (n-i); j++){
                    if(arr[j-1] > arr[j]){
                        temp = arr[j-1];
                        arr[j-1] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
        }
                  </code>
        </pre>`;
}
function PyFunc(){
    document.getElementsByTagName("li")[11].style.backgroundColor="";
    document.getElementsByTagName("li")[12].style.backgroundColor="";
    document.getElementsByTagName("li")[13].style.backgroundColor="";
    document.getElementsByTagName("li")[14].style.backgroundColor="orangered";
    document.getElementById('Code1').innerHTML=`
    <pre>
            <code class="codesec">
        def bubbleSort(arr):
            n = len(arr)
            for i in range(n-1):
                for j in range(0, n-i-1):
                    if arr[j] > arr[j+1]:
                        arr[j], arr[j+1] = arr[j+1], arr[j]



                        



                  </code>
        </pre>`;
}

/*----------Insertion sort-------*/
function CFunc1(){
    document.getElementsByTagName("li")[11].style.backgroundColor="orangered";
    document.getElementsByTagName("li")[12].style.backgroundColor="";
    document.getElementsByTagName("li")[13].style.backgroundColor="";
    document.getElementsByTagName("li")[14].style.backgroundColor="";
    document.getElementById('Code1').innerHTML=`
    <pre>
            <code class="codesec">
            void insertionSort(int arr[], int n)
            {
                int i, key, j;
                for (i = 1; i < n; i++) {
                    key = arr[i];
                    j = i - 1;
            
                    while (j >= 0 && arr[j] > key) {
                        arr[j + 1] = arr[j];
                        j = j - 1;
                    }
                    arr[j + 1] = key;
                }
            }
            

                  </code>
        </pre>`;
}
function CPlusFunc1(){
    document.getElementsByTagName("li")[11].style.backgroundColor="";
    document.getElementsByTagName("li")[12].style.backgroundColor="orangered";
    document.getElementsByTagName("li")[13].style.backgroundColor="";
    document.getElementsByTagName("li")[14].style.backgroundColor="";
    
    document.getElementById('Code1').innerHTML=`<pre><code class="codesec">
            void insertionSort(int arr[], int n)
            {
                int i, key, j;
                for (i = 1; i < n; i++)
                {
                    key = arr[i];
                    j = i - 1;

                    while (j >= 0 && arr[j] > key)
                    {
                        arr[j + 1] = arr[j];
                        j = j - 1;
                    }
                    arr[j + 1] = key;
                }
            }

                  </code></pre>`;

                }
function JavaFunc1(){
    document.getElementsByTagName("li")[11].style.backgroundColor="";
    document.getElementsByTagName("li")[12].style.backgroundColor="";
    document.getElementsByTagName("li")[13].style.backgroundColor="orangered";
    document.getElementsByTagName("li")[14].style.backgroundColor="";
    document.getElementById('Code1').innerHTML=`
    <pre>
            <code class="codesec">
            void insertionSort(int arr[])
            {
                int n = arr.length;
                for (int i = 1; i < n; ++i) {
                    int key = arr[i];
                    int j = i - 1;

                    while (j >= 0 && arr[j] > key) {
                        arr[j + 1] = arr[j];
                        j = j - 1;
                    }
                    arr[j + 1] = key;
                }
            }

                  </code>
        </pre>`;
}
function PyFunc1(){
    document.getElementsByTagName("li")[11].style.backgroundColor="";
    document.getElementsByTagName("li")[12].style.backgroundColor="";
    document.getElementsByTagName("li")[13].style.backgroundColor="";
    document.getElementsByTagName("li")[14].style.backgroundColor="orangered";
    document.getElementById('Code1').innerHTML=`
    <pre>
            <code class="codesec">
            def insertionSort(arr):
                for i in range(1, len(arr)):
                    key = arr[i]
                    j = i-1
                    while j >= 0 and key < arr[j] :
                            arr[j + 1] = arr[j]
                            j -= 1
                    arr[j + 1] = key
        


                        



                  </code>
        </pre>`;
}

/*----------Selection sort---------*/
function CFunc2(){
    document.getElementsByTagName("li")[11].style.backgroundColor="orangered";
    document.getElementsByTagName("li")[12].style.backgroundColor="";
    document.getElementsByTagName("li")[13].style.backgroundColor="";
    document.getElementsByTagName("li")[14].style.backgroundColor="";
    document.getElementById('Code1').innerHTML=`
    <pre>
            <code class="codesec">
            void swap(int *xp, int *yp)
            {
                int temp = *xp;
                *xp = *yp;
                *yp = temp;
            }
            
            void selectionSort(int arr[], int n)
            {
                int i, j, min_idx;
            
                for (i = 0; i < n-1; i++)
                {
                    min_idx = i;
                    for (j = i+1; j < n; j++)
                      if (arr[j] < arr[min_idx])
                        min_idx = j;
            
                    swap(&arr[min_idx], &arr[i]);
                }
            }
                  </code>
        </pre>`;
}
function CPlusFunc2(){
    document.getElementsByTagName("li")[11].style.backgroundColor="";
    document.getElementsByTagName("li")[12].style.backgroundColor="orangered";
    document.getElementsByTagName("li")[13].style.backgroundColor="";
    document.getElementsByTagName("li")[14].style.backgroundColor="";
    
    document.getElementById('Code1').innerHTML=`<pre><code class="codesec">
    void swap(int *xp, int *yp) {
        int temp = *xp;
        *xp = *yp;
        *yp = temp;
    }
    
    void selectionSort(int arr[], int n) {
        int i, j, min_idx;
    
        for (i = 0; i < n-1; i++) {
            min_idx = i;
            for (j = i+1; j < n; j++)
                if (arr[j] < arr[min_idx])
                    min_idx = j;
    
            swap(&arr[min_idx], &arr[i]);
        }
    }
                  </code></pre>`;

                }
function JavaFunc2(){
    document.getElementsByTagName("li")[11].style.backgroundColor="";
    document.getElementsByTagName("li")[12].style.backgroundColor="";
    document.getElementsByTagName("li")[13].style.backgroundColor="orangered";
    document.getElementsByTagName("li")[14].style.backgroundColor="";
    document.getElementById('Code1').innerHTML=`
    <pre>
            <code class="codesec">
            void selectionSort(int arr[])
            {
                int n = arr.length;
            
                for (int i = 0; i < n-1; i++)
                {
                    int min_idx = i;
                    for (int j = i+1; j < n; j++)
                        if (arr[j] < arr[min_idx])
                            min_idx = j;
            
                    int temp = arr[min_idx];
                    arr[min_idx] = arr[i];
                    arr[i] = temp;
                }
            }
                  </code>
        </pre>`;
}
function PyFunc2(){
    document.getElementsByTagName("li")[11].style.backgroundColor="";
    document.getElementsByTagName("li")[12].style.backgroundColor="";
    document.getElementsByTagName("li")[13].style.backgroundColor="";
    document.getElementsByTagName("li")[14].style.backgroundColor="orangered";
    document.getElementById('Code1').innerHTML=`
    <pre>
            <code class="codesec">
            def selection_sort(A):
                for i in range(len(A)):
                    min_idx = i
                    for j in range(i+1, len(A)):
                        if A[min_idx] > A[j]:
                            min_idx = j
                    A[i], A[min_idx] = A[min_idx], A[i]



                        



                  </code>
        </pre>`;
}

/*------------Merge Sort-----------*/
function CFunc3(){
    document.getElementsByTagName("li")[11].style.backgroundColor="orangered";
    document.getElementsByTagName("li")[12].style.backgroundColor="";
    document.getElementsByTagName("li")[13].style.backgroundColor="";
    document.getElementsByTagName("li")[14].style.backgroundColor="";
    document.getElementById('Code1').innerHTML=`
    <pre>
            <code class="codesec">
            void merge(int arr[], int l, int m, int r)
            {
                int i, j, k;
                int n1 = m - l + 1;
                int n2 = r - m;
            
                int L[n1], R[n2];
            
                for (i = 0; i < n1; i++)
                    L[i] = arr[l + i];
                for (j = 0; j < n2; j++)
                    R[j] = arr[m + 1 + j];
            
                i = 0;
                j = 0;
                k = l;
            
                while (i < n1 && j < n2) {
                    if (L[i] <= R[j]) {
                        arr[k] = L[i];
                        i++;
                    }
                    else {
                        arr[k] = R[j];
                        j++;
                    }
                    k++;
                }
            
                while (i < n1) {
                    arr[k] = L[i];
                    i++;
                    k++;
                }
            
                while (j < n2) {
                    arr[k] = R[j];
                    j++;
                    k++;
                }
            }
            
            void mergeSort(int arr[], int l, int r)
            {
                if (l < r) {
                    int m = l + (r - l) / 2;
            
                    mergeSort(arr, l, m);
                    mergeSort(arr, m + 1, r);
                    merge(arr, l, m, r);
                }
            }
                  </code>
        </pre>`;
}
function CPlusFunc3(){
    document.getElementsByTagName("li")[11].style.backgroundColor="";
    document.getElementsByTagName("li")[12].style.backgroundColor="orangered";
    document.getElementsByTagName("li")[13].style.backgroundColor="";
    document.getElementsByTagName("li")[14].style.backgroundColor="";
    
    document.getElementById('Code1').innerHTML=`<pre><code class="codesec">
    void swapping(int &a, int &b) {
        int temp;
        temp = a;
        a = b;
        b = temp;
     }
     
     void merge(int *array, int l, int m, int r) {
        int i, j, k, nl, nr;
        nl = m-l+1; nr = r-m;
        int larr[nl], rarr[nr];

        for(i = 0; i < nl; i++)
           larr[i] = array[l+i];

        for(j = 0; j < nr; j++)
           rarr[j] = array[m+1+j];

        i = 0; j = 0; k = l;

        while(i < nl && j < nr) {
           if(larr[i] <= rarr[j]) {
              array[k] = larr[i];
              i++;
           } else {
              array[k] = rarr[j];
              j++;
           }
           k++;
        }
        while(i < nl) {
           array[k] = larr[i];
           i++; k++;
        }
        while(j < nr) {
           array[k] = rarr[j];
           j++; k++;
        }
     }

     void mergeSort(int *array, int l, int r) {
        int m;
        if(l < r) {
           int m = l+(r-l)/2;
           mergeSort(array, l, m);
           mergeSort(array, m+1, r);
           merge(array, l, m, r);
        }
     }
                  </code></pre>`;

                }
function JavaFunc3(){
    document.getElementsByTagName("li")[11].style.backgroundColor="";
    document.getElementsByTagName("li")[12].style.backgroundColor="";
    document.getElementsByTagName("li")[13].style.backgroundColor="orangered";
    document.getElementsByTagName("li")[14].style.backgroundColor="";
    document.getElementById('Code1').innerHTML=`
    <pre>
            <code class="codesec">
            void merge(int arr[], int l, int m, int r)
            {
                int n1 = m - l + 1;
                int n2 = r - m;
            
                int L[] = new int[n1];
                int R[] = new int[n2];
            
                for (int i = 0; i < n1; ++i)
                    L[i] = arr[l + i];
                for (int j = 0; j < n2; ++j)
                    R[j] = arr[m + 1 + j];
            
                int i = 0, j = 0;
            
                int k = l;
                while (i < n1 && j < n2) {
                    if (L[i] <= R[j]) {
                        arr[k] = L[i];
                        i++;
                    }
                    else {
                        arr[k] = R[j];
                        j++;
                    }
                    k++;
                }
            
                while (i < n1) {
                    arr[k] = L[i];
                    i++;
                    k++;
                }
            
                while (j < n2) {
                    arr[k] = R[j];
                    j++;
                    k++;
                }
            }
            
            void sort(int arr[], int l, int r)
            {
                if (l < r) {
                    int m =l+ (r-l)/2;
            
                    sort(arr, l, m);
                    sort(arr, m + 1, r);
            
                    merge(arr, l, m, r);
                }
            }
                  </code>
        </pre>`;
}
function PyFunc3(){
    document.getElementsByTagName("li")[11].style.backgroundColor="";
    document.getElementsByTagName("li")[12].style.backgroundColor="";
    document.getElementsByTagName("li")[13].style.backgroundColor="";
    document.getElementsByTagName("li")[14].style.backgroundColor="orangered";
    document.getElementById('Code1').innerHTML=`
    <pre>
            <code class="codesec">
            def mergeSort(arr):
            if len(arr) > 1:
                mid = len(arr)//2
                L = arr[:mid]
                R = arr[mid:]
        
                mergeSort(L)
                mergeSort(R)
        
                i = j = k = 0
        
                while i < len(L) and j < len(R):
                    if L[i] < R[j]:
                        arr[k] = L[i]
                        i += 1
                    else:
                        arr[k] = R[j]
                        j += 1
                    k += 1
        
                while i < len(L):
                    arr[k] = L[i]
                    i += 1
                    k += 1
        
                while j < len(R):
                    arr[k] = R[j]
                    j += 1
                    k += 1
                        



                  </code>
        </pre>`;
}

/*------------Quick Sort-----------*/
function CFunc4(){
    document.getElementsByTagName("li")[11].style.backgroundColor="orangered";
    document.getElementsByTagName("li")[12].style.backgroundColor="";
    document.getElementsByTagName("li")[13].style.backgroundColor="";
    document.getElementsByTagName("li")[14].style.backgroundColor="";
    document.getElementById('Code1').innerHTML=`
    <pre>
            <code class="codesec">
            void swap(int *a, int *b) {
                int t = *a;
                *a = *b;
                *b = t;
              }
              
              int partition(int array[], int low, int high) {
              
                int pivot = array[high];
                int i = (low - 1);
              
                for (int j = low; j < high; j++) {
                  if (array[j] <= pivot) {
                    i++;
                    swap(&array[i], &array[j]);
                  }
                }
              
                swap(&array[i + 1], &array[high]);
                return (i + 1);
              }
              
              void quickSort(int array[], int low, int high) {
                if (low < high) {
              
                  int pi = partition(array, low, high);
              
                  quickSort(array, low, pi - 1);
              
                  quickSort(array, pi + 1, high);
                }
              }
                  </code>
        </pre>`;
}
function CPlusFunc4(){
    document.getElementsByTagName("li")[11].style.backgroundColor="";
    document.getElementsByTagName("li")[12].style.backgroundColor="orangered";
    document.getElementsByTagName("li")[13].style.backgroundColor="";
    document.getElementsByTagName("li")[14].style.backgroundColor="";
    
    document.getElementById('Code1').innerHTML=`<pre><code class="codesec">
    void swap(int* a, int* b)
    {
        int t = *a;
        *a = *b;
        *b = t;
    }
    
    int partition (int arr[], int low, int high)
    {
        int pivot = arr[high];
        int i = (low - 1);
    
        for (int j = low; j <= high- 1; j++)
        {
            if (arr[j] <= pivot)
            {
                i++;
                swap(&arr[i], &arr[j]);
            }
        }
        swap(&arr[i + 1], &arr[high]);
        return (i + 1);
    }
    
    void quickSort(int arr[], int low, int high)
    {
        if (low < high)
        {
            int pivot = partition(arr, low, high);
    
            quickSort(arr, low, pivot - 1);
            quickSort(arr, pivot + 1, high);
        }
    }
                  </code></pre>`;

                }
function JavaFunc4(){
    document.getElementsByTagName("li")[11].style.backgroundColor="";
    document.getElementsByTagName("li")[12].style.backgroundColor="";
    document.getElementsByTagName("li")[13].style.backgroundColor="orangered";
    document.getElementsByTagName("li")[14].style.backgroundColor="";
    document.getElementById('Code1').innerHTML=`
    <pre>
            <code class="codesec">
            public void quickSort(int arr[], int begin, int end) {
                if (begin < end) {
                    int partitionIndex = partition(arr, begin, end);
            
                    quickSort(arr, begin, partitionIndex-1);
                    quickSort(arr, partitionIndex+1, end);
                }
            }
            
            private int partition(int arr[], int begin, int end) {
                int pivot = arr[end];
                int i = (begin-1);
            
                for (int j = begin; j < end; j++) {
                    if (arr[j] <= pivot) {
                        i++;
            
                        int swapTemp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = swapTemp;
                    }
                }
            
                int swapTemp = arr[i+1];
                arr[i+1] = arr[end];
                arr[end] = swapTemp;
            
                return i+1;
            }
                  </code>
        </pre>`;
}
function PyFunc4(){
    document.getElementsByTagName("li")[11].style.backgroundColor="";
    document.getElementsByTagName("li")[12].style.backgroundColor="";
    document.getElementsByTagName("li")[13].style.backgroundColor="";
    document.getElementsByTagName("li")[14].style.backgroundColor="orangered";
    document.getElementById('Code1').innerHTML=`
    <pre>
            <code class="codesec">
            def partition(array, start, end):
            pivot = array[start]
            low = start + 1
            high = end
        
            while True:
                while low <= high and array[high] >= pivot:
                    high = high - 1
        
                while low <= high and array[low] <= pivot:
                    low = low + 1
        
                if low <= high:
                    array[low], array[high] = array[high], array[low]
                else:
                    break
        
            array[start], array[high] = array[high], array[start]
        
            return high
        
        def quick_sort(array, start, end):
            if start >= end:
                return
        
            p = partition(array, start, end)
            quick_sort(array, start, p-1)
            quick_sort(array, p+1, end)



                        



                  </code>
        </pre>`;
}