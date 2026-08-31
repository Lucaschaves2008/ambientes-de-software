public class Primo {

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

    public static void main(String[] args) {
        int[] numeros = {1, 2, 3, 4, 17, 20, 29};

        for (int n : numeros) {
            System.out.println(n + " é primo? " + ehPrimo(n));
        }
    }
}
