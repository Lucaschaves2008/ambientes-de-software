public class Contagem {

    // Conta quantos valores do conjunto estão entre o primeiro valor lido e N (o tamanho do conjunto), inclusive.
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
        int[] dados = {3, 5, 1, 8, 4, 2, 6, 7};

        System.out.println("N = " + dados.length);
        System.out.println("Quantidade entre " + dados[0] + " e " + dados.length + ": " + contar(dados));
    }
}
