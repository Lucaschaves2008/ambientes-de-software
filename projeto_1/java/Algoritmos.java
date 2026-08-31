public class Algoritmos {

    // -------- CALCULO NUMEROS PRIMOS --------
    public static boolean ehPrimo(int numero) {
        if (numero < 2) {
            return false;
        }

        for (int i = 2; i * i <= numero; i++) {
            if (numero % i == 0) {
                return false;
            }
        }

        return true;
    }
    // ------ FIM ------

    // -------- SOMATORIO --------
    public static int somar(int[] numeros) {
        int soma = 0;

        for (int i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }

        return soma;
    }
    // ------ FIM ------

    // -------- FIBONACCI --------
    public static int fibonacci(int n) {
        if (n == 0) {
            return 0;
        }

        if (n == 1) {
            return 1;
        }

        int anterior = 0;
        int atual = 1;

        for (int i = 2; i <= n; i++) {
            int proximo = anterior + atual;
            anterior = atual;
            atual = proximo;
        }

        return atual;
    }
    // ------ FIM ------

    // -------- MAXIMO DIVISOR COMUM --------
    public static int mdc(int a, int b) {
        while (b != 0) {
            int resto = a % b;
            a = b;
            b = resto;
        }

        return a;
    }
    // ------ FIM ------

    // -------- ORDENACAO QUICKSORT --------
    public static void quicksort(int[] array, int inicio, int fim) {
        if (inicio < fim) {
            int posicaoPivo = particionar(array, inicio, fim);
            quicksort(array, inicio, posicaoPivo - 1);
            quicksort(array, posicaoPivo + 1, fim);
        }
    }

    private static int particionar(int[] array, int inicio, int fim) {
        int pivo = array[fim];
        int i = inicio - 1;

        for (int j = inicio; j < fim; j++) {
            if (array[j] <= pivo) {
                i++;
                trocar(array, i, j);
            }
        }

        trocar(array, i + 1, fim);
        return i + 1;
    }

    private static void trocar(int[] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    // ------ FIM ------

    // -------- CONTAGEM --------
    public static int contar(int[] numeros) {
        int n = numeros.length;
        int primeiro = numeros[0];
        int minimo;
        int maximo;

        if (primeiro < n) {
            minimo = primeiro;
            maximo = n;
        } else {
            minimo = n;
            maximo = primeiro;
        }

        int contagem = 0;

        for (int valor : numeros) {
            if (valor >= minimo && valor <= maximo) {
                contagem++;
            }
        }

        return contagem;
    }
    // ------ FIM ------

    public static void main(String[] args) {
        // -------- CALCULO NUMEROS PRIMOS --------
        int[] numerosPrimo = {1, 2, 3, 4, 17, 20, 29};
        for (int n : numerosPrimo) {
            System.out.println(n + " é primo? " + ehPrimo(n));
        }
        // ------ FIM ------

        // -------- SOMATORIO --------
        int[] valores = {10, 20, 30, 40, 50};
        System.out.println("Soma: " + somar(valores));
        // ------ FIM ------

        // -------- FIBONACCI --------
        for (int n = 0; n <= 10; n++) {
            System.out.println("Fibonacci(" + n + ") = " + fibonacci(n));
        }
        // ------ FIM ------

        // -------- MAXIMO DIVISOR COMUM --------
        System.out.println("MDC(48, 18) = " + mdc(48, 18));
        System.out.println("MDC(101, 10) = " + mdc(101, 10));
        // ------ FIM ------

        // -------- ORDENACAO QUICKSORT --------
        int[] numeros = {5, 3, 8, 1, 9, 2, 7};
        quicksort(numeros, 0, numeros.length - 1);
        for (int numero : numeros) {
            System.out.print(numero + " ");
        }
        System.out.println();
        // ------ FIM ------

        // -------- CONTAGEM --------
        int[] dados = {3, 5, 1, 8, 4, 2, 6, 7};
        System.out.println("N = " + dados.length);
        System.out.println("Quantidade entre " + dados[0] + " e " + dados.length + ": " + contar(dados));
        // ------ FIM ------
    }
}
