public class Mdc {

    public static int mdc(int a, int b) {
        while (b != 0) {
            int resto = a % b;
            a = b;
            b = resto;
        }

        return a;
    }

    public static void main(String[] args) {
        System.out.println("MDC(48, 18) = " + mdc(48, 18));
        System.out.println("MDC(101, 10) = " + mdc(101, 10));
    }
}
