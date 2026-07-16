import { useResumoFilme } from "./useResumoFilme";
import { renderHook } from "@testing-library/react";

test("Retorna overview inteiro se menor que o limite", () =>{

    const texto = "Resumo curto";
    const {result} = renderHook(()  => useResumoFilme(texto, 256));
    expect(result.current).toBe(texto);
})

test("Retorna overview  cortado e retiências se passar do limite", () => {
    const texto = "lorem ispum aqbndiq. bhdfqlfoqfqk cacqafqfq njohgeo poi deos ";
    const {result} = renderHook(()  => useResumoFilme(texto, 10));
    expect(result.current).toBe("lorem ispu...");
})