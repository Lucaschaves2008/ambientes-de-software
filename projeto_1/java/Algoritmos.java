public class Algoritmos {

    public static boolean ehPrimo(int numero) {
        if (numero < 2) {
            return false;
        }

        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                return false;
            }
        }

        return true;
    }

    public static int somar(int[] numeros) {
        int soma = 0;

        for (int i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }

        return soma;
    }

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

    public static int mdc(int a, int b) {
        while (b != 0) {
            int resto = a % b;
            a = b;
            b = resto;
        }

        return a;
    }

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

    public static int contar(int[] numeros) {
        int n = numeros.length;
        int primeiro = numeros[0];
        int minimo = Math.min(primeiro, n);
        int maximo = Math.max(primeiro, n);

        int contagem = 0;

        for (int valor : numeros) {
            if (valor >= minimo && valor <= maximo) {
                contagem++;
            }
        }

        return contagem;
    }

    public static void main(String[] args) {
        int[] numerosPrimo = {1, 2, 3, 4, 17, 20, 29};
        for (int n : numerosPrimo) {
            System.out.println(n + " é primo? " + ehPrimo(n));
        }

        int[] valores = {10, 20, 30, 40, 50};
        System.out.println("Soma: " + somar(valores));

        for (int n = 0; n <= 10; n++) {
            System.out.println("Fibonacci(" + n + ") = " + fibonacci(n));
        }

        System.out.println("MDC(48, 18) = " + mdc(48, 18));
        System.out.println("MDC(101, 10) = " + mdc(101, 10));

        int[] numeros = {5, 3, 8, 1, 9, 2, 7};
        quicksort(numeros, 0, numeros.length - 1);
        for (int numero : numeros) {
            System.out.print(numero + " ");
        }
        System.out.println();

        int[] dados = {3, 5, 1, 8, 4, 2, 6, 7};
        System.out.println("N = " + dados.length);
        System.out.println("Quantidade entre " + dados[0] + " e " + dados.length + ": " + contar(dados));
    }
}
