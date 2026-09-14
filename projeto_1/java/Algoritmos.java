import java.util.Arrays;
import java.util.Scanner;

public class Algoritmos {

    static Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int opcao = -1;

        while (opcao != 0) {
            mostrarMenu();
            opcao = lerInteiro("Opção: ");
            System.out.println();

            switch (opcao) {
                case 1:
                    opcaoPrimo();
                    break;
                case 2:
                    opcaoSoma();
                    break;
                case 3:
                    opcaoFibonacci();
                    break;
                case 4:
                    opcaoMdc();
                    break;
                case 5:
                    opcaoOrdenar();
                    break;
                case 6:
                    opcaoContar();
                    break;
                case 0:
                    System.out.println("Até mais.");
                    break;
                default:
                    System.out.println("Opção inválida. Escolha um número de 0 a 6.");
            }
        }
    }

    static void mostrarMenu() {
        System.out.println();
        System.out.println("==================================");
        System.out.println("            ALGORITMOS            ");
        System.out.println("==================================");
        System.out.println("  1 - Verificar se é primo");
        System.out.println("  2 - Somar uma lista");
        System.out.println("  3 - Fibonacci");
        System.out.println("  4 - Máximo divisor comum");
        System.out.println("  5 - Ordenar uma lista");
        System.out.println("  6 - Contar dentro de um intervalo");
        System.out.println("  0 - Sair");
        System.out.println("==================================");
    }

    // Cada opção pede os valores e chama o algoritmo correspondente.

    static void opcaoPrimo() {
        int numero = lerInteiro("Número: ");

        if (ehPrimo(numero)) {
            System.out.println(numero + " é primo.");
        } else {
            System.out.println(numero + " não é primo.");
        }
    }

    static void opcaoSoma() {
        int[] numeros = lerLista("Números separados por espaço: ");
        System.out.println("Soma = " + somar(numeros));
    }

    static void opcaoFibonacci() {
        int n = lerInteiro("Até qual posição (0 a 46)? ");

        if (n < 0 || n > 46) {
            System.out.println("Acima de 46 o resultado não cabe em um int.");
            return;
        }

        for (int i = 0; i <= n; i++) {
            System.out.println("Fibonacci(" + i + ") = " + fibonacci(i));
        }
    }

    static void opcaoMdc() {
        int a = lerInteiro("Primeiro número: ");
        int b = lerInteiro("Segundo número: ");
        System.out.println("MDC(" + a + ", " + b + ") = " + mdc(a, b));
    }

    static void opcaoOrdenar() {
        int[] numeros = lerLista("Números separados por espaço: ");
        quicksort(numeros, 0, numeros.length - 1);
        System.out.println("Ordenado: " + Arrays.toString(numeros));
    }

    static void opcaoContar() {
        int[] numeros = lerLista("Números separados por espaço: ");
        int minimo = lerInteiro("Valor mínimo: ");
        int maximo = lerInteiro("Valor máximo: ");
        System.out.println("Quantidade entre " + minimo + " e " + maximo + ": " + contar(numeros, minimo, maximo));
    }

    // Algoritmos

    static boolean ehPrimo(int numero) {
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

    static int somar(int[] numeros) {
        int soma = 0;

        for (int i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }

        return soma;
    }

    static int fibonacci(int n) {
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

    static int mdc(int a, int b) {
        while (b != 0) {
            int resto = a % b;
            a = b;
            b = resto;
        }

        return a;
    }

    static void quicksort(int[] array, int inicio, int fim) {
        if (inicio < fim) {
            int posicaoPivo = particionar(array, inicio, fim);
            quicksort(array, inicio, posicaoPivo - 1);
            quicksort(array, posicaoPivo + 1, fim);
        }
    }

    static int particionar(int[] array, int inicio, int fim) {
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

    static void trocar(int[] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    static int contar(int[] numeros, int minimo, int maximo) {
        int contagem = 0;

        for (int valor : numeros) {
            if (valor >= minimo && valor <= maximo) {
                contagem++;
            }
        }

        return contagem;
    }

    // Leitura do teclado. Repete a pergunta enquanto a resposta não for válida.

    static int lerInteiro(String mensagem) {
        while (true) {
            System.out.print(mensagem);
            String texto = entrada.nextLine().trim();

            try {
                return Integer.parseInt(texto);
            } catch (NumberFormatException erro) {
                System.out.println("Digite um número inteiro.");
            }
        }
    }

    static int[] lerLista(String mensagem) {
        while (true) {
            System.out.print(mensagem);
            String[] partes = entrada.nextLine().trim().split("\\s+");

            try {
                int[] numeros = new int[partes.length];

                for (int i = 0; i < partes.length; i++) {
                    numeros[i] = Integer.parseInt(partes[i]);
                }

                return numeros;
            } catch (NumberFormatException erro) {
                System.out.println("Digite apenas números inteiros separados por espaço.");
            }
        }
    }
}
