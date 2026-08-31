public class Somatorio {

    public static int somar(int[] numeros) {
        int soma = 0;

        for (int i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }

        return soma;
    }

    public static void main(String[] args) {
        int[] valores = {10, 20, 30, 40, 50};

        System.out.println("Soma: " + somar(valores));
    }
}
