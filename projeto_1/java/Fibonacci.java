public class Fibonacci {

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

    public static void main(String[] args) {
        for (int n = 0; n <= 10; n++) {
            System.out.println("Fibonacci(" + n + ") = " + fibonacci(n));
        }
    }
}
