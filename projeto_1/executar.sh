#!/bin/sh
# Compila e inicia o servidor Java. Depois abra http://localhost:8080
cd "$(dirname "$0")" || exit 1

JAVAC=javac
JAVA=java

# No macOS o /usr/bin/javac é só um atalho que falha sem JDK, então procuramos um JDK de verdade.
for candidato in "$JAVA_HOME" /opt/homebrew/opt/openjdk /usr/local/opt/openjdk; do
  if [ -n "$candidato" ] && [ -x "$candidato/bin/javac" ]; then
    JAVAC="$candidato/bin/javac"
    JAVA="$candidato/bin/java"
    break
  fi
done

if ! "$JAVAC" -version >/dev/null 2>&1; then
  echo "JDK não encontrado. Instale com: brew install openjdk" >&2
  exit 1
fi

mkdir -p build
"$JAVAC" -encoding UTF-8 -d build java/Algoritmos.java java/Servidor.java || exit 1
exec "$JAVA" -cp build Servidor "$@"
